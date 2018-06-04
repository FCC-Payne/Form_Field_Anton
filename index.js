var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public/'));
app.listen(3003);
console.log('http://localhost:3003');