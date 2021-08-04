/* External Modules */
const express = require('express');
const methodOverride = require("method-override");
const session = require('express-session');
const MongoStore = require('connect-mongo');
require("dotenv").config();

/* Module instance */
const app = express();

/* Port */
const PORT = process.env.PORT || 4000;

/* Internal Modules */
const controllers = require('./controllers');

/* App Config */
app.set('view engine', 'ejs');

app.use(
    session({
        store: MongoStore.create({ mongoUrl: process.env.MONGODB_URI }),
        secret: process.env.SECRET,
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 7 * 2,
        },
    })
);

/* middleware */

app.use( function (req, res, next) {
    res.locals.user = req.session.currentUser;
    return next ();
});

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true}));
app.use(methodOverride("_method"));

const authRequired = function (req, res, next) {
    if (!req.session.currentUser) {
        return res.redirect('/');
    }
    return next();  
};

app.use(function(req, res, next) {
    console.log(`${req.url} ${req.method}`);
    next();
});

/* routes */
app.use('/auth', controllers.auth);
app.use('/', controllers.movie);
app.use('/reviews', authRequired, controllers.review);


/* 404 route  */
app.get('/*', function(req, res) {
    const context = {
        error: req.error,
    };
    res.render('404', context);
});


// Server bind
app.listen(PORT, function () {
    console.log(`Listening for client requests on port ${PORT}`)
});
