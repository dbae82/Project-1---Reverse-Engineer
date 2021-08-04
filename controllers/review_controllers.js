const express = require('express');
const router = express.Router();

const { Review, Product } = require('../models');



router.post('/:id', async function (req, res, next) {
    try {
        req.body.user = req.session.currentUser.id;
        const createdReview = await Review.create(req.body);
        return res.redirect(`/${createdReview.movie._id}`);
    }catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
});

router.put('/:reviewId/edit', async function(req, res, next) {
    try {
        req.body.user = req.session.currentUser.id;
        const updatedReview = await Review.findByIdAndUpdate(
            req.params.reviewId,
            {
                $set: req.body,
            },
            {
                new: true,
            }
        )
        console.log(updatedReview.id, "put route");
        return res.redirect(`/${updatedReview.movie}`);
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
});

router.delete('/:movieId/:reviewId', async function(req, res, next) {
    try {
        req.body.user = req.session.currentUser.id;
        await Review.findByIdAndDelete(req.params.reviewId);
        return res.redirect(`/${req.params.movieId}`);
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
});

module.exports = router;

