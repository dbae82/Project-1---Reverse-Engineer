const mongoose = require('mongoose');
require('dotenv').config();

const connectionStr = process.env.MONGODB_URI || 'mongodb://localhost:27017/badapple';

mongoose.connect(connectionStr, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
});

mongoose.connection.on('connected', function (){
    console.log(`MongoDB connected to ${connectionStr}`);
});

mongoose.connection.on('error', function (error){
    console.log(`MongoDB connection error ${error}`);
});
mongoose.connection.on('disconnected', function (){
    console.log('MongoDB disconnected');
});
