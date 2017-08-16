const express = require('express');

const router = new express.Router;

//pediatric, some crossover

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

router.get('/cap/neuro-t', (req, res) => {
	res.render('./page-views/cap/neuro-t.hbs', {"specificScripts":
		[
			"../js/cap/neuro-scripts.js",
		]
	});
});

router.get('/cap/neuro-t-biomarker', (req, res) => {
	res.render('./page-views/cap/neuro-t-biomarker.hbs',
	{"specificScripts":
		[
			"../js/cap/cnsbio-scripts.js",
		]
	});
});

router.get('/cap/pnet-bx', (req, res) => {
	res.render('./page-views/cap/pnet-bx.hbs', {"specificScripts":
		[
			"../js/cap/pnet-scripts.js",
		]
	});
});

router.get('/cap/pnet-rx', (req, res) => {
	res.render('./page-views/cap/pnet-rx.hbs', {"specificScripts":
		[
			"../js/cap/pnetrx-scripts.js",
		]
	});
});

router.get('/cap/ex-gon-gct', (req, res) => {
	res.render('./page-views/cap/ex-gon-gct.hbs', {"specificScripts":
		[
			"../js/cap/exgct-scripts.js",
		]
	});
});

router.get('/cap/hepatoblast', (req, res) => {
	res.render('./page-views/cap/hepatoblast.hbs', {"specificScripts":
		[
			"../js/cap/hepato-scripts.js",
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

router.get('/cap/neuroend-t', (req, res) => {
	res.render('./page-views/cap/neuroend-t.hbs', {"specificScripts":
		[
			"../js/cap/net-scripts.js",
		]
	});
});

router.get('/cap/ovary-t', (req, res) => {
	res.render('./page-views/cap/ovary-t.hbs', {"specificScripts":
		[
			"../js/cap/ovary-scripts.js",
		]
	});
});

router.get('/cap/wilms-t', (req, res) => {
	res.render('./page-views/cap/wilms-t.hbs', {"specificScripts":
		[
			"../js/cap/wilms-scripts.js",
		]
	});
});

router.get('/cap/retinoblast', (req, res) => {
	res.render('./page-views/cap/retinoblast.hbs', {"specificScripts":
		[
			"../js/cap/rb-scripts.js",
		]
	});
});

router.get('/cap/rhabdo', (req, res) => {
	res.render('./page-views/cap/rhabdo.hbs', {"specificScripts":
		[
			"../js/cap/rhabdo-scripts.js",
		]
	});
});

router.get('/cap/testis-t', (req, res) => {
	res.render('./page-views/cap/testis-t.hbs', {"specificScripts":
		[
			"../js/cap/testis-scripts.js",
		]
	});
});



router.get('/cap/soft-t-rx', (req, res) => {
	res.render('./page-views/cap/soft-t-rx.hbs', {"specificScripts":
		[
			"../js/cap/softrx-scripts.js",
		]
	});
});

//adult only

router.get('/cap/breast', (req, res) => {
	res.render('./page-views/cap/breast.hbs', {"specificScripts":
		[
			"../js/cap/breast-scripts.js",
		]
	});
});

router.get('/cap/cervix-leep', (req, res) => {
	res.render('./page-views/cap/cervix-leep.hbs', {"specificScripts":
		[
			"../js/cap/cxleep-scripts.js",
		]
	});
});

router.get('/cap/cervix-rx', (req, res) => {
	res.render('./page-views/cap/cervix-rx.hbs', {"specificScripts":
		[
			"../js/cap/cxrx-scripts.js",
		]
	});
});

router.get('/cap/colon-polyp', (req, res) => {
	res.render('./page-views/cap/colon-polyp.hbs', {"specificScripts":
		[
			"../js/cap/colonpolyp-scripts.js",
		]
	});
});

router.get('/cap/colon-rx', (req, res) => {
	res.render('./page-views/cap/colon-rx.hbs', {"specificScripts":
		[
			"../js/cap/colonrx-scripts.js",
		]
	});
});

router.get('/cap/endometrium-t', (req, res) => {
	res.render('./page-views/cap/endometrium-t.hbs', {"specificScripts":
		[
			"../js/cap/endometrium-scripts.js",
		]
	});
});

router.get('/cap/esophagus', (req, res) => {
	res.render('./page-views/cap/esophagus.hbs', {"specificScripts":
		[
			"../js/cap/esophagus-scripts.js",
		]
	});
});

router.get('/cap/kidney-rx', (req, res) => {
	res.render('./page-views/cap/kidney-rx.hbs', {"specificScripts":
		[
			"../js/cap/kidney-scripts.js",
		]
	});
});

router.get('/cap/lung-rx', (req, res) => {
	res.render('./page-views/cap/lung-rx.hbs', {"specificScripts":
		[
			"../js/cap/lung-scripts.js",
		]
	});
});

router.get('/cap/melanoma', (req, res) => {
	res.render('./page-views/cap/melanoma.hbs', {"specificScripts":
		[
			"../js/cap/melanoma-scripts.js",
		]
	});
});

router.get('/cap/plasmacytoma', (req, res) => {
	res.render('./page-views/cap/plasmacytoma.hbs', {"specificScripts":
		[
			"../js/cap/plasmacytoma-scripts.js",
		]
	});
});

router.get('/cap/pancexo-t', (req, res) => {
	res.render('./page-views/cap/pancexo-t.hbs', {"specificScripts":
		[
			"../js/cap/pancexo-scripts.js",
		]
	});
});

router.get('/cap/thyroid-t', (req, res) => {
	res.render('./page-views/cap/thyroid-t.hbs', {"specificScripts":
		[
			"../js/cap/thyroid-scripts.js",
		]
	});
});

router.get('/cap/salivary-t', (req, res) => {
	res.render('./page-views/cap/salivary-t.hbs', {"specificScripts":
		[
			"../js/cap/salivary-scripts.js",
		]
	});
});

router.get('/cap/stomach', (req, res) => {
	res.render('./page-views/cap/stomach.hbs', {"specificScripts":
		[
			"../js/cap/stomach-scripts.js",
		]
	});
});


module.exports = router;
