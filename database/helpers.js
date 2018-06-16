const mysql = require('mysql');
const config = require('../config');
const AWS = require('aws-sdk');

const s3 = new AWS.S3({
  accessKeyId: config.AWSAccessKeyId,
  secretAccessKey: config.AWSSecretKey,
  region: 'us-west-1'
});

const connection = mysql.createConnection({
  user: 'root',
  password: config.dbPassword,
  database: 'FECForms'
});

const getDressInfo = function (dressId, cb) {
  const result = {};
  connection.query(`SELECT * FROM dresses WHERE id=${dressId};`, (err, data) => {
    if (err) {
      cb(err, null);
    } else {
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
        					cb(err, null);
        				} else {
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
