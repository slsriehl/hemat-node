const express = require('express');

const router = new express.Router;

router.get('/gi-path/gi-bx', (req, res) => {
	res.render('./page-views/gi-path/gi-bx.hbs',
	{"specificScripts":
		[
			"../json/json-gi.js",
			"../js/gi-path/gi-scripts.js",
		]
	});
});


module.exports = router;
