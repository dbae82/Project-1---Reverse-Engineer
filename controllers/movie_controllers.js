const express = require('express');
const router = express.Router();

//const { Movie } = require('../models');

/* index route */
router.get('/', function (req, res) {
        if (error) {
            console.log(error);
            req.error = error;
        }
        return res.render('/index', context);
});