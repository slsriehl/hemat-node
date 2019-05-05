const express = require('express');

const router = new express.Router;

const controller = require('../../controllers/pages');


router.get('/surg-media/thyroid-graves-hashi', (req, res) => {
    controller.openAccess(req, res, './page-views/surg-media/thyroid-graves-hashi-media.hbs', [

    ]);
});

router.get('/surg-media/head-neck-az', (req, res) => {
    controller.openAccess(req, res, './page-views/surg-media/head-neck-az.hbs', [

    ]);
});


router.get('/api', (req, res) => {
    controller.openAccess(req, res, './page-views/api.hbs', [

    ]);
});

module.exports = router;
