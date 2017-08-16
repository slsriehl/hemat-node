const express = require('express');

const router = new express.Router;

router.get('/', (req, res) => {
	res.render('index.hbs');
});

router.get('/apps/snippets', (req, res) => {
	res.render('./apps/snippets.hbs', {"specificScripts":
		[
			"../vendor/tag-it/tag-it.min.js",
			"../js/snippets-scripts.js"
		]
	});
});

router.get('/apps/heme_diff', (req, res) => {
	res.render('./apps/heme-diff.hbs',
	{"specificScripts":
		[
			"../vendor/bootstrap/js/bootstrap-datepicker.min.js",
			"../js/hemediff-scripts.js"
		]
	});
});

router.get('/apps/counter', (req, res) => {
	res.render('./apps/counter.hbs',
	{"specificScripts":
		[
			"../js/counter-scripts.js"
		]
	});
});

router.get('/apps/pb_smears', (req, res) => {
	res.render('./apps/pb-smears.hbs',
	{"specificScripts":
		[
			"../json/json-pbsmears.js",
			"../js/pb-rules.js",
			"../js/pb-scripts.js"
		]
	});
});

router.get('/apps/gi_bx', (req, res) => {
	res.render('./apps/gi-bx.hbs',
	{"specificScripts":
		[
			"../json/json-gi.js",
			"../js/gi-scripts.js",
		]
	});
});

router.get('/apps/fixation', (req, res) => {
	res.render('./apps/fixation.hbs',
	{"specificScripts":
		[
			"../vendor/jquery/js/jquery-ui-timepicker-addon.min.js",
			"../js/fixation-scripts.js",
		]
	});
});


module.exports = router;
