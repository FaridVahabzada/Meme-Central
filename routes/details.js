var express = require('express');
var router = express.Router();

const fs = require('fs');
const path = require('path');

router.get('/', function (req, res, next) {
    const currentUser = req.user ? req.user : undefined;
    const memeDetails = fs.readFileSync(path.resolve(__dirname, '../data/details.json'));
    if(!currentUser) {
        res.redirect('/login');
    } else {
        res.render('details', { currentUser, details: JSON.parse(memeDetails) });
    };
});

module.exports = router;
