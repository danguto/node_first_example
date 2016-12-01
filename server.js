/**
 * Created by dangu on 30/11/2016.
 */
var port = 1337;
var express = require('./config/express');
var app = express();

app.listen(port);

module.exports = app;

console.log('Our awesome web server running at http://localhost:'+ port);