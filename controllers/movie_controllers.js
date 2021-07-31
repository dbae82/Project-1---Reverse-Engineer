const express = require('express');
const router = express.Router();


//const Review = require('../models');

/* index route */
router.get('/', function (req, res, next) {
     return res.render('./index');
     if (error) {
     console.log(error);
     req.error = error;
     return next();
     }
});


module.exports = router;

