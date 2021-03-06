"use-strict"

var express = require('express');
var router = express.Router();
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({
    extended: true
})); // support encoded bodies
app.use('/api/route', router);
app.use('/api/tweets', require('./app/controllers/api/tweets'))
app.use('/crawl', require('./crawler'));
app.use('/', require('./app/controllers/static'))


var port = process.env.PORT || 1818
var server = app.listen(port, function() {
    console.log("Live on ", port)
})

//server.timeout = 2000000;
