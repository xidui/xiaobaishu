/*!
 * nodeclub - route.js
 * Copyright(c) 2012 fengmk2 <fengmk2@gmail.com>
 * MIT Licensed
 */

/**
 * Module dependencies.
 */

//var sign = require('./controllers/sign');
var sign = require('./controllers/sign');
var note = require('./controllers/note');
var others = require('./controllers/others');
var config = require('./config').config;

var g2048 = require('./controllers/2048_c.js');


module.exports = function (app) {
    app.get('/', function (req, res) {
        res.render('index');
    });
    app.get('/view/:view', function (req, res){
        res.render('partials/' + req.params.view);
    });

    app.get('/games/:game', function (req, res){
        res.render('games/' + req.params.game);
    });
    app.post('/games/result', g2048.getRatio);

    app.post('/register', sign.register);
    app.post('/login', sign.login);
    app.post('/logout', sign.logout);

    app.post('/navitem', others.navitem);

    //note
    app.post('/note/getNotes', note.getNotes);
    app.post('/note/createNotes', note.createNotes);
    app.post('/note/delNote', note.delNote);
};
