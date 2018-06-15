const express = require('express');
const helper = require('./database/helpers.js');

const app = express();
app.use('/:id', express.static(`${__dirname}/public/`));
app.get('/info/:id', (req, res) => {
  const dressID = req.params.id;
  if (dressID > 100 || dressID < 1) {
    res.sendStatus(404);
    res.end();
  } else {
    helper.getDressInfo(dressID, (err, data) => {
      if (err) {
        res.sendStatus(500);
      } else {
        res.writeHead(200);
        res.end(JSON.stringify(data));
      }
    });
  }
});
app.listen(3003);
console.log('http://localhost:3003');
