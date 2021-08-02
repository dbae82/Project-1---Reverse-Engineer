const { Review } = require('../models');

const seed = async function() {
    try {
        await Review.deleteMany();
        const newReviews = await Review.insertMany([
            {
                rating: 5,
                content: 'Movie is the best! Keanu ROCKS!',
                movie: '6105ff0eaf5205c85f7a71fc',
                user: '6106cc17092234d51fc4b873',
            },
            {
                rating: 2,
                content: 'This movie was so confusing. It broke my brain',
                movie: '6105ff0eaf5205c85f7a71ff',
                user: '6106cc17092234d51fc4b873',
            },
            {
                rating: 5,
                content: '😍',
                movie: '6105ff0eaf5205c85f7a71fb',
                user: '6106cc17092234d51fc4b874'
            },{
                rating: 5,
                content: 'Great!',
                movie: '6105ff0eaf5205c85f7a7201',
                user: '6106cc17092234d51fc4b874'
            },
        ]);
        console.log(newReviews);
    } catch (error) {
        console.log(error);
    }
};

seed();