const express = require('express');

const router = new express.Router;

router.get('/', (req, res) => {
	res.render('index.hbs');
});

router.get('/surg-path/snippets', (req, res) => {
	res.render('./page-views/surg-path/snippets.hbs', {"specificScripts":
		[
			"../vendor/tag-it/tag-it.min.js",
			"../js/surg-path/snippets-scripts.js"
		]
	});
});

router.get('/gi-path/gi-bx', (req, res) => {
	res.render('./page-views/gi-path/gi-bx.hbs',
	{"specificScripts":
		[
			"../json/json-gi.js",
			"../js/gi-path/gi-scripts.js",
		]
	});
});

router.get('/apps/fixation', (req, res) => {
	res.render('./apps/fixation.hbs',
	{"specificScripts":
		[
			"../vendor/jquery/js/jquery-ui-timepicker-addon.min.js",
			"../js/apps/fixation-scripts.js",
		]
	});
});


module.exports = router;
