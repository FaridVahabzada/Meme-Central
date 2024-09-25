var express = require('express');
var router = express.Router();

const fs = require('fs');
const path = require('path');

const axios = require('axios');

const config = require('config');
const urlAPI = config.get('server.urlAPI');

var bodyparser = require('body-parser');
var jsonParser = bodyparser.json();

let memes;

axios.get(urlAPI)
.then((response) => {
        memesResponse = response.data.memes;
        memes = memesResponse.map(meme => ({...meme, backgroundColor: "rgb(210, 238, 241)"}));

        fs.writeFileSync(path.resolve(__dirname, '../data/memes.json'), JSON.stringify(memes));
})
.catch((error) => {
   console.log(error);
});

router.get('/', function (req, res, next) {
    const currentUser = req.user ? req.user : undefined;
    memes = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/memes.json')));
    
    if(req.query.memeName !== undefined && req.query.memeName != '') {
        memes = memes.filter(meme => meme.name.toLowerCase().includes(req.query.memeName.toLowerCase()));
        res.render('overview', { currentUser, memes: memes });
    } else {
        res.render('overview', { currentUser, memes: memes });
    };
});

router.post('/', jsonParser, function(req, res, next) {
    let memesJSON = fs.readFileSync(path.resolve(__dirname, '../data/memes.json'));
    let memesArray = JSON.parse(memesJSON);
    let filteredMeme = memesArray.filter(meme => meme.name == req.body.name);

    memesArray.forEach(meme => {
        if(meme.name == req.body.name) {
            meme.backgroundColor = "rgb(184, 236, 242)";
        };
    });
    
    fs.writeFileSync(path.resolve(__dirname, '../data/memes.json'), JSON.stringify(memesArray));
    fs.writeFileSync(path.resolve(__dirname, '../data/details.json'), JSON.stringify(filteredMeme));
    
    res.end();
  });

module.exports = router;
