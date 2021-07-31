const express = require('express');
const router = express.Router();

// const { Review } = require('../models');

router.get('/:id', function(req, res) {
    return res.send(`${req.params.id} got it!`);
});

module.exports = router;