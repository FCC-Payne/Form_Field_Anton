const mysql = require('mysql');
const config = require('../config');
const AWS = require('aws-sdk');

const s3 = new AWS.S3({
  accessKeyId: config.AWSAccessKeyId,
  secretAccessKey: config.AWSSecretKey,
  region: 'us-west-1'
});

const connection = mysql.createConnection({
  host: config.hosturldb,
  user: config.userdb,
  password: config.dbPassword,
  database: config.namedb,
  port: config.port
});

const getDressInfo = function (dressId, cb) {
  const result = {};
  console.log('trying to access database');
  console.log('host: ' + config.hosturldb);
  console.log('user: ' + config.userdb);
  console.log('password: ' + config.dbPassword);
  console.log('databse: ' + config.namedb);
  console.log('port: ' + config.port);
  connection.query(`SELECT * FROM dresses WHERE id=${dressId};`, (err, data) => {
    if (err) {
      cb(err, null);
      console.log(err);
    } else {
      console.log('success');
      result.dressInfo = data[0];
      connection.query(`SELECT * FROM sizes WHERE product_id=${dressId};`, (err, data) => {
        if (err) {
          cb(err, null);
        } else {
          result.sizes = data;
          s3.getSignedUrl('getObject', {
            Bucket: 'fec-form-data',
          				Key: `${numberToString(dressId)}.jpg`
          }, (err, data) => {
        				if (err) {
                  console.log('error in s3');
        					cb(err, null);
        				} else {
                  console.log('everything passed');
        					result.dressInfo.image_url = data;
        					cb(null, result);
        				}
        			});
        }
      });
    }
  });
};
let numberToString = function (num) {
  let result = `${num}`;
  while (result.length < 4) {
    result = `0${result}`;
  }
  return result;
};

module.exports = {
  getDressInfo
};
