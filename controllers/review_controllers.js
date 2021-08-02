const express = require('express');
const router = express.Router();

const { Review, Product } = require('../models');

// router.get('/', function(req, res) {
//     Review.find({}, function(error, allReviews) {
//         if (error) {
//             console.log(error);
//         }
//         return res.send(allReviews);
//     });
// });

router.put('/:reviewId/edit', async function(req, res, next) {
    try {
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

module.exports = router;