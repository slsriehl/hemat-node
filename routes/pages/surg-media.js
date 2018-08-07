const express = require('express');

const router = new express.Router;

const controller = require('../../controllers/pages');


router.get('/surg-media/thyroid-graves-hashi', (req, res) => {
    controller.openAccess(req, res, './page-views/surg-media/thyroid-graves-hashi-media.hbs', [

    ]);
});



module.exports = router;
