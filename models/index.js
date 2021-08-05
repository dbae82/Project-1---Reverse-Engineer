require("../config/db.connection");

// const mongoose = require('mongoose');
// mongoose.connect( process.env.MONGODB_URI || 'mongodb://localhost:27017/badapple');

module.exports = {
    Movie: require("./Movie"),
    Review: require("./Review"),
    User: require('./User'),
};
