require('dotenv').config();
const express = require('express');
const router = new express.Router;

let mysql  = require('mysql');

console.log(process.env.DB_TABLE);

var config = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_TABLE
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

        // insert statment
        let sql = "INSERT INTO hemat.placref (gestage, weight, twin, country, state, city) VALUES ('"+data_ga+"', '"+data_weight+"', '"+data_twin+"', '"+data_country+"', '"+data_state+"', '"+data_city+"')";

        // execute the insert statment
        connection.query(sql, function (err, results){
            if (err) {
                return console.error(err.message);
            } else {
                console.log("Data added to placenta DB:", data);
                // get inserted id
                console.log('Plac insert Id:' + results.row);
            }
        });
        res.status(204).end(); // status 204 returned to let cliet browser know not to wait for content
    } else {
        res.send("No data posted from client to send to DB");
    }
});


module.exports = router;
