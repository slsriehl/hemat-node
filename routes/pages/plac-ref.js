require('dotenv').config();
const express = require('express');
const router = new express.Router;

let mysql  = require('mysql');

console.log(process.env.DB_TABLE);

var db_host = process.env.DB_HOST || "localhost";
var db_user = process.env.DB_USER || "root";
var db_pass = process.env.DB_PASS || "";
var db_table = process.env.DB_TABLE || "hemat";

var config = {
    host: db_host,
    user: db_user,
    password: db_pass,
    database: db_table
};

let connection = mysql.createConnection(config);

connection.on('connect', function(err) {
    if (err){
        console.log("DB connection error", err.message);
    } else {
        // If no error, then good to proceed.
        console.log("DB Connected");
    }
});

// post placenta reference to placenta Reference database
router.post('/placenta/add', (req, res) => {
    if (req.body){
        var data = req.body;
        var data_ga = req.body.ga;
        var data_weight = req.body.weight;
        var data_twin = req.body.twin;
        var data_country = req.body.country;
        var data_state = req.body.state;
        var data_city = req.body.city;

        // check statement
      //  let chk = "SELECT * FROM hemat.placref WHERE '"+data_ga+"' IN(gestage) AND '"+data_weight+"' IN(weight) AND '"+data_city+"' IN (city);"
        let chk = "SELECT * FROM hemat.placref WHERE '"+data_city+"' IN (city) AND '"+data_ga+"' IN (gestage) AND createdAt BETWEEN timestamp(DATE_SUB(NOW(), INTERVAL 30 SECOND)) AND timestamp(NOW())";
        // insert statment
        let sql = "INSERT INTO hemat.placref (gestage, weight, twin, country, state, city) VALUES ('"+data_ga+"', '"+data_weight+"', '"+data_twin+"', '"+data_country+"', '"+data_state+"', '"+data_city+"')";

        connection.query(chk, function(err, res){
          if (res.length > 0){
              return console.log("Duplicate entry attempt", res, chk);
          }  else {
              console.log("Not a duplicate:", res, chk);
              // execute the insert statment
              connection.query(sql, function (err, results){
                  if (err) {
                      return console.error("DB Sql error",err.message);
                  } else {
                      console.log("Data successfully added to placenta DB:", data);
                  }
              });
          }
        });

        res.status(204).end(); // status 204 returned to let cliet browser know not to wait for content
    } else {
        res.send("No data posted from client to send to DB");
    }
});

// Send DB contents to HTML as JSON api
router.get('/surg-path/placenta-data', (req, res) => {
    // get placref data
    let sql = "SELECT gestage, weight, twin, country, state, city FROM hemat.placref";
        // execute the get statment
        connection.query(sql, function (err, results){
            if (err) {
                return console.error("DB Sql get error",err.message);
            } else {
                var resultJson = JSON.stringify(results);
                resultJson = JSON.parse(resultJson);
                var apiResult = {};

                //add our JSON results to the data table
                apiResult.data = resultJson;

                //send JSON to Express
                res.json(apiResult);
            }
        });
});


module.exports = router;
