const express = require('express');

const router = new express.Router;

// router.get('/', (req, res) => {
// 	//res.render('index.hbs');
// });

router.get('/apps/snippets', (req, res) => {
	res.render('./apps/snippets.hbs', {"specificScripts":
		[
			"../vendor/tag-it/tag-it.min.js",
			"../js/snippets-scripts.js"
		]
	});
});


module.exports = router;
