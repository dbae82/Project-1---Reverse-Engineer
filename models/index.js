require("../config/db.connection");

//mongoose.connect( process.env.MONGODB_URI || 'mongodb://localhost:27017/badapple');

module.exports = {
    Movie: require("./Movie"),
    Review: require("./Review"),
    User: require('./User'),
};
