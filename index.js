var express = require('express');
var bodyParser = require('body-parser');
var helper = require('./database/helpers.js')

var app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public/'));
app.get('/*', (req, res) => {
	helper.getDressInfo(parseInt(parseInt(req.path.slice(1))), function(err, data){
		if(err){
			res.sendStatus(500);
		}else {
			res.writeHead(200);
			res.end(JSON.stringify(data));
		}
	});
});
app.listen(3003);
console.log('http://localhost:3003');