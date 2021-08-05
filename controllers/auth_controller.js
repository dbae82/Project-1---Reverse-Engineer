const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const { User } = require('../models');


const { Movie, Review } = require('../models');

router.get('/register', function (req, res) {
    return res.send('register, got it!');
});

router.get('/login', function (req, res) {
    return res.send('login, got it!');
});

router.post('/register', async function (req, res, next) {
    try {
        const foundUser = await User.exists({ 
            $or: [{ email: req.body.email }, { username: req.body.username }],
        });
        if (foundUser) {
            return res.redirect('/');
        }
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(req.body.password, salt);
        req.body.password = hash;
        if (req.body.avatar === '') {
            delete req.body.avatar;
        } 
        const newUser = await User.create(req.body);
        return res.redirect('/');
    } catch (error) {
        console.log(error);
        return res.send(error);
    }
});

router.post('/login', async function (req, res) {
    try {
        const foundUser = await User.findOne( {email: req.body.email} );
        if (!foundUser) {
            throw 'error';
        }
        const match = await bcrypt.compare(req.body.password, foundUser.password);
        if (!match) {
            return res.render('/');
        }  
        req.session.currentUser = {
            id: foundUser._id,
            username: foundUser.username,
        }
        return res.redirect('/');
    } catch (error) {
        console.log(error);
        return res.redirect('/');
    }
});

router.get('/logout', async function (req, res, next){
    try {
        await req.session.destroy();
        return res.redirect('/');
        
    } catch (error) {
        console.log(error);
        return res.send(error);
    }
});

module.exports = router;