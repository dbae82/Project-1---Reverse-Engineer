const express = require('express');
const router = express.Router();

const { Review, Product } = require('../models');

router.get('/', function(req, res) {
    Review.find({}, function(error, allReviews) {
        if (error) {
            console.log(error);
        }
        return res.send(allReviews);
    });
});

module.exports = router;