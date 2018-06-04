var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.set('port', 3003);
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public/'));
app.listen(app.get('port'));
console.log('http://localhost:' + app.get('port'));