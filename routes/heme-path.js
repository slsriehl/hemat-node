const express = require('express');

const router = new express.Router;

router.get('/heme-path/pb-smears', (req, res) => {
	res.render('./page-views/heme-path/pb-smears.hbs',
	{"specificScripts":
		[
			"../json/json-pbsmears.js",
			"../js/heme-path/pb-rules.js",
			"../js/heme-path/pb-scripts.js"
		]
	});
});

router.get('/heme-path/bone-marrow', (req, res) => {
	res.render('./page-views/heme-path/bone-marrow.hbs',
	{"specificScripts":
		[
			"../json/json-bonemarrow.js",
			"../js/heme-path/bm-diff-scripts.js",
			"../js/heme-path/bm-scripts.js",
			"../js/heme-path/pb-rules.js"
		]
	});
});

router.get('/heme-path/heme-diff', (req, res) => {
	res.render('./page-views/heme-path/heme-diff.hbs',
	{"specificScripts":
		[
			"../js/heme-path/hemediff-scripts.js"
		]
	});
});

router.get('/heme-path/counter', (req, res) => {
	res.render('./page-views/heme-path/counter.hbs',
	{"specificScripts":
		[
			"../js/heme-path/counter-scripts.js"
		]
	});
});

router.get('/heme-path/dlbcl', (req, res) => {
	res.render('./page-views/heme-path/dlbcl.hbs',
	{"specificScripts":
		[
			"../js/heme-path/dlbcl-scripts.js"
		]
	});
});


module.exports = router;
