const express = require('express');
const router = express.Router();

//const { Movie } = require('../models');

/* index route */
router.get('/', function (req, res, next) {
        if (error) {
            console.log(error);
            req.error = error;
            return next();
        }
       res.send("hello, you made it!");
        //return res.render('./index', context);
});