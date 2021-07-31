const express = require('express');
const router = express.Router();


const { Movie } = require('../models/Movie');

/* index route */
router.get('/', async function (req, res, next) {
    try {
        const allMovies = await Movie.find({});
        const context = {
            movies: allMovies,
        };
    return res.render('./index', context);
    } catch (error) {
        console.log(error);
        req.error = error;
       return next();
    }
});

module.exports = router;

