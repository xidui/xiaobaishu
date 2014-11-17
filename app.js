
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes.js');
var http = require('http');
var path = require('path');
var ejs = require('ejs');
var config = require('./config').config;
//
var app = express();

//all environments
app.engine('.html', ejs.__express);
app.set('port', process.env.PORT || 5860);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

app.use(express.bodyParser());
app.use(express.cookieParser());
//app.use(express.cookieSession({ secret: "keyboard cat" }));
app.use(express.session({secret: config.session_secret}));
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}

routes(app);

http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});

