const express = require('express');

const router = new express.Router;

const render = require('../../controllers/pages').render;

router.get('/talks/api', (req, res) => {
    return render(req, res, './page-views/talks/api.hbs', [
    ]);
});

module.exports = router;
