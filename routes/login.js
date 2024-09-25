var express = require('express');
var passport = require('passport'); 
var LocalStrategy = require('passport-local'); 
const path = require('path');
const fs = require('fs');

var router = express.Router();

router.get('/', (req, res) => {
    const currentUser = req.user ? req.user : undefined;
    res.render('login', { currentUser });
});

passport.use(new LocalStrategy(function verify(username, password, cb) {
    let usersArray = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../data/users.json")));
    let filteredArray = usersArray.filter(x => x.username == username);
    if (filteredArray.length > 0) {
        let usersData = filteredArray[0];
        if (usersData.password == password) {
            return cb(null, usersData);
        };
    } else {
        return cb(null, false);
    };
}));

router.post('/', passport.authenticate('local', {
    successRedirect: '/memeoverview',
    failureRedirect: '/login'
}), (req, res) => {
    req.session.currentUser = req.user;
    res.redirect('/');
});

passport.serializeUser((user,callback) => {
    callback(null, user);
});

passport.deserializeUser((user,callback) => {
    const userID = user ? user.username : '';
    callback(null, userID);
});

router.get('/logout', (req, res, next) => {
    let memesJSON = fs.readFileSync(path.resolve(__dirname, '../data/memes.json'));
    let memesArray = JSON.parse(memesJSON);

    memesArray.forEach(meme => {
        meme.backgroundColor = "rgb(210, 238, 241)";
    });

    fs.writeFileSync(path.resolve(__dirname, '../data/memes.json'), JSON.stringify(memesArray));
    
    req.logout(function(err){
        if (err) { return next(err); }
        res.redirect('/');
    });
});

module.exports = router;