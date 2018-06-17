const express = require('express');
const helper = require('./database/helpers.js');
const cors = require('cors');

const app = express();
app.use('/:id', express.static(`${__dirname}/public/`));
app.options('/forms/:id', cors());
app.get('/forms/:id', cors(), (req, res) => {
  const dressID = req.params.id;
  console.log('first request');
  if (dressID > 100 || dressID < 1) {
    res.sendStatus(404);
    res.end();
  } else {
    helper.getDressInfo(dressID, (err, data) => {
      if (err) {
        console.log('couldnt access dress info');
        res.sendStatus(500);
      } else {
        res.set({
        });
        res.writeHead(200);
        res.end(JSON.stringify(data));
      }
    });
  }
});
app.listen(8081);
console.log('http://forminputanton-env.hehprhmpyj.us-east-2.elasticbeanstalk.com/');
