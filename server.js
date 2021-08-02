/* External Modules */
const express = require('express');
const methodOverride = require("method-override");
require("dotenv").config();

/* Module instance */
const app = express();

/* Port */
const PORT = process.env.PORT || 4000;

/* Internal Modules */
const controllers = require('./controllers');

/* App Config */
app.set('view engine', 'ejs');

/* middleware */
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true}));
app.use(methodOverride("_method"));
app.use(function(req, res, next) {
    console.log(`${req.url} ${req.method}`);
    next();
});

/* routes */
app.use('/reviews', controllers.review);
app.use('/', controllers.movie);


// Server bind
app.listen(PORT, function () {
    console.log(`Listening for client requests on port ${PORT}`)
});
