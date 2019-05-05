const express = require('express');

const router = new express.Router;

const controller = require('../../controllers/pages');

router.get('/talks/api', (req, res) => {
    controller.openAccess(req, res, './page-views/talks/api.hbs', [

    ]);
});

module.exports = router;
