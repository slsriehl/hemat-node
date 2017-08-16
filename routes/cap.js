const express = require('express');

const router = new express.Router;

//pediatric

router.get('/cap/bone-t-bx', (req, res) => {
	res.render('./page-views/cap/bone-t-bx.hbs', {"specificScripts":
		[
			"../js/cap/bonebx-scripts.js",
		]
	});
});

router.get('/cap/bone-t-rx', (req, res) => {
	res.render('./page-views/cap/bone-t-rx.hbs', {"specificScripts":
		[
			"../js/cap/bonerx-scripts.js",
		]
	});
});

router.get('/cap/neuroblast', (req, res) => {
	res.render('./page-views/cap/neuroblast.hbs', {"specificScripts":
		[
			"../js/cap/nb-scripts.js",
		]
	});
});

router.get('/cap/neuro-t', (req, res) => {
	res.render('./page-views/cap/neuro-t.hbs', {"specificScripts":
		[
			"",
		]
	});
});






module.exports = router;
