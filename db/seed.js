const { Review } = require("../models");

Review.deleteMany({}, function (error, deletedProducts) {
        if (error) {
        return console.log(error);
         }
        Review.insertMany(
        [
            {
                rating: 5,
            },
            {
                rating: 4
            },
            {
                rating: 5
            }
        ],
        function (error, createdReviews) {
        if (error) {
         return console.log(error);
         }
        console.log("=== Seed Complete ===");
        console.log(createdReviews);
    }
 );
});