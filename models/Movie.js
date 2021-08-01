const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    runtime: {
        type: Date
    },
    genre: {
        type: [String]
    },
    cast: {
        type: [String]
    },
    image: {
        type: String
    }
},
{
    timestamps: true
});


const Movie = mongoose.model('Movie', MovieSchema );

module.exports = Movie;