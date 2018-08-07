const express = require('express');

const router = new express.Router;

const controller = require('../../controllers/pages');


router.get('/clin-media/newborn-blood-smears', (req, res) => {
    controller.openAccess(req, res, './page-views/clin-media/newborn-pbsmears-media.hbs', [

    ]);
});



module.exports = router;
