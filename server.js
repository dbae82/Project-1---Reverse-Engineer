/* External Modules */
const express = require('express');

/* Module instance */
const app = express();

/* Port */
const PORT = 4000


/* Internal Modules */
const controllers = require('./controllers/movie_controllers');

/* App Config */
app.set('view engine', 'ejs');

/* middleware */
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true}));

/* routes */
//app.use('/', controllers);

app.get('/', function (req, res) {
    //if (error) {
       // console.log(error);
        //req.error = error;
        //return next();
    ///}
   //res.send("hello, you made it!");
    return res.render('./index');
});

// Server bind
app.listen(PORT, function () {
    console.log(`Listening for client requests on port ${PORT}`)
});