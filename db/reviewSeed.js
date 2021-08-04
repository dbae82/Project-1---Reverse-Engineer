const { Review } = require('../models');

const seed = async function() {
    try {
        await Review.deleteMany();
        const newReviews = await Review.insertMany([
            {
                rating: 5,
                content: 'Movie is the best! Keanu ROCKS!',
                movie: '610ad61b4d912a14c481763d',
                user: '610ad62767191b14cb4ceb02',
            },
            {
                rating: 2,
                content: 'This movie was so confusing. It broke my brain',
                movie: '610ad61b4d912a14c4817640',
                user: '610ad62767191b14cb4ceb03',
            },
            {
                rating: 5,
                content: '😍',
                movie: '610ad61b4d912a14c481763c',
                user: '610ad62767191b14cb4ceb03'
            },{
                rating: 5,
                content: 'Great!',
                movie: '610ad61b4d912a14c481763e',
                user: '610ad62767191b14cb4ceb02'
            },
        ]);
        console.log(newReviews);
    } catch (error) {
        console.log(error);
    }
};

seed();