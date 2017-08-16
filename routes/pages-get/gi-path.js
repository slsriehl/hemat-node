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

router.get('/gi-path/liver-bx', (req, res) => {
	res.render('./page-views/gi-path/liver-bx.hbs',
	{"specificScripts":
		[
			"../json/json-liver.js",
			"../js/gi-path/liver-scripts.js"
		]
	});
});


module.exports = router;
