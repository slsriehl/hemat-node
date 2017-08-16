const express = require('express');

const router = new express.Router;

//pediatric

router.get('/cap/bone_t_bx', (req, res) => {
	res.render('./cap/bone-t-bx.hbs', {"specificScripts":
		[
			"../js/cap/bonebx-scripts.js",
		]
	});
});

router.get('/cap/bone_t_rx', (req, res) => {
	res.render('./cap/bone-t-rx.hbs', {"specificScripts":
		[
			"../js/cap/bonerx-scripts.js",
		]
	});
});

router.get('/cap/neuroblast', (req, res) => {
	res.render('./cap/neuroblast.hbs', {"specificScripts":
		[
			"../js/cap/nb-scripts.js",
		]
	});
});

router.get('/cap/neuro_t', (req, res) => {
	res.render('./cap/neuro-t.hbs', {"specificScripts":
		[
			"",
		]
	});
});






module.exports = router;
