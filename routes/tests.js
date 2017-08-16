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

router.get('/surg-path/fixation', (req, res) => {
	res.render('./page-views/surg-path/fixation.hbs',
	{"specificScripts":
		[
			"../vendor/jquery/js/jquery-ui-timepicker-addon.min.js",
			"../js/surg-path/fixation-scripts.js",
		]
	});
});


module.exports = router;
