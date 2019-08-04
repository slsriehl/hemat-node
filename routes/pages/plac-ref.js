
const express = require('express');
const router = new express.Router;

const controller = require('../../controllers/placenta');

const models = require('../../models');

// post placenta reference to placenta Reference database
router.post('/placenta/add', (req, res) => {

    if(Object.keys(req.body).length) {
        return controller.add(req, res);
    } else {
        return res.send("No data posted from client to send to DB");
    }

});

// Send DB contents to HTML as JSON api
router.get('/surg-path/placenta-data', (req, res) => {
    // set header to allow hematogones.com
    //res.header("Access-Control-Allow-Origin", "hematogones.com");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    return controller.allData(req, res);

});


module.exports = router;
