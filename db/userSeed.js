const { User } = require('../models');

const seed = async function() {
    try {
        await User.deleteMany();
        const newUsers = await User.insertMany([
            {
                email: 'dbae82@gmail.com',
                password: 'connect1234',
                username: 'baecon',
            },
            {
                email: 'jwaffensmith@gmail.com',
                password: 'badapple1234',
                username: 'theCreator'
            },
        ]);
        console.log(newUsers);
    } catch (error) {
        console.log(error);
    }
};

seed();