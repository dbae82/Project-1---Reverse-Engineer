const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: [true, 'Please provide an email address'],
            unique: true,
        },
        password: {
            type: String,
            required: [true, 'Please provide a password'],
        },
        username: {
            type: String,
            required: [true, 'Please provide a username'],
            unique: true,
        },
        avatar: {
            type: String,
            default: 'https://picsum.photos/200',
        }
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model('User', UserSchema);

module.exports = User;