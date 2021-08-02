const express = require('express');
const router = express.Router();


const { Movie, Review } = require('../models');

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

/* Show Route */
router.get('/:id', async function (req, res, next) {
    try {
        const foundMovie = await Movie.findById(req.params.id);
        const allReviews = await Review.find({ movie: req.params.id });
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

router.post('/:id', async function(req, res, next) {
    try {
        const createdReview = await Review.create(req.body);
        return res.redirect(`/${createdReview.movie._id}`);
    }catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
});

router.put('/:id', async function(req, res, next) {
    try {
        const updatedReview = await Review.findByIdAndUpdate(
            reviews._id, 
            {
                $set: req.body,
            },
            {
                new: true,
            }
        )
        return res.redirect(`/${updatedReview.movie._id}`);
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
});

router.delete('/:id', async function(req, res, next) {
    try {
        const foundReview = await Review.findById(reviews._id);
        await foundReview.delete();
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
});

module.exports = router;

