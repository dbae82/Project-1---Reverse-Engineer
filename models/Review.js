const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema(
    {
        rating: Number
    }
);


const Review = mongoose.model("Review", ReviewSchema);

module.exports = Review;