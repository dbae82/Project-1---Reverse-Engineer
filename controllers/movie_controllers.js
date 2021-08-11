const express = require('express');
const router = express.Router();


const { Movie, Review } = require('../models');

/* index route */
router.get('/', async function (req, res, next) {
    try {
        let query = {};

        if (req.query.q) {
            query = {
                $or: [
                    {
                        title: {
                            $regex: req.query.q,
                            $options: 'i',
                        },
                    },
                    {
                        genre: {
                            $regex: req.query.q,
                            $options: 'i',
                        },
                    },
                ],
            };
        }

        const allMovies = await Movie.find(query);
        console.log("allMovies", allMovies);
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

/* Show Route */
router.get('/:id', async function (req, res, next) {
    try {
        const foundMovie = await Movie.findById(req.params.id);
        console.log(req.user);
        const allReviews = await Review.find({ movie: req.params.id }).populate('user');
        const context = {
            movie: foundMovie,
            reviews: allReviews,
        };
        return res.render('./reviews/index', context);
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
});

module.exports = router;

