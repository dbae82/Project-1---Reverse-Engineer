const express = require('express');
const router = express.Router();

//const Review = require('../models');

/* index route */
router.get('/', function (req, res) {
     return res.render('./index');
});

module.exports = router;