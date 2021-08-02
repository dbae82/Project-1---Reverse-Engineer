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
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true}));
app.use(methodOverride("_method"));

/* routes */
app.use('/', controllers.movie);
app.use('/reviews', controllers.review);

// Server bind
app.listen(PORT, function () {
    console.log(`Listening for client requests on port ${PORT}`)
});
