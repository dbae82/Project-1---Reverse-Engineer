/* External Modules */
const express = require("express");


/* Module instance */
const app = express();

/* Port */
const PORT = 4000


/* Internal Modules */


/* App Config */
app.set('view engine', 'ejs');


// Server bind
app.listen(PORT, function () {
    console.log(`Listening for client requests on port ${PORT}`)
});