const express = require('express');

const router = new express.Router;

const render = require('../../controllers/pages').render;


router.get('/surg-media/thyroid-graves-hashi', (req, res) => {
    return render(req, res, './page-views/surg-media/thyroid-graves-hashi-media.hbs', [

    ]);
});

router.get('/surg-media/head-neck-az', (req, res) => {
    return render(req, res, './page-views/surg-media/head-neck-az.hbs', [

    ]);
});

router.get('/surg-media/cns-tumor-map', (req, res) => {
    return render(req, res, './page-views/surg-media/cns-tumor-map.hbs', [

    ]);
});


router.get('/api', (req, res) => {
    return render(req, res, './page-views/api.hbs', [

    ]);
});

module.exports = router;
