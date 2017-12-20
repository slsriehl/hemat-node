const express = require('express');

const router = new express.Router;

const controller = require('../../controllers/pages');

//pediatric, some crossover

router.get('/cap/bone-t-bx', (req, res) => {
	controller.userWall(req, res, './page-views/cap/bone-t-bx.hbs', [
		"/js/cap/bonebx-scripts.js",
	]);
});

router.get('/cap/bone-t-rx', (req, res) => {
	controller.userWall(req, res, './page-views/cap/bone-t-rx.hbs', [
		"/js/cap/bonerx-scripts.js",
	]);
});

router.get('/cap/neuro-t', (req, res) => {
	controller.userWall(req, res, './page-views/cap/neuro-t.hbs', [
		"/js/cap/neuro-scripts.js",
	]);
});

router.get('/cap/neuro-t-biomarker', (req, res) => {
	controller.userWall(req, res, './page-views/cap/neuro-t-biomarker.hbs', [
		"/js/cap/cnsbio-scripts.js",
	]);
});

router.get('/cap/pnet-bx', (req, res) => {
	controller.userWall(req, res, './page-views/cap/pnet-bx.hbs', [
		"/js/cap/pnet-scripts.js",
	]);
});

router.get('/cap/pnet-rx', (req, res) => {
	controller.userWall(req, res, './page-views/cap/pnet-rx.hbs', [
		"/js/cap/pnetrx-scripts.js",
	]);
});

router.get('/cap/ex-gon-gct', (req, res) => {
	controller.userWall(req, res, './page-views/cap/ex-gon-gct.hbs', [
		"/js/cap/exgct-scripts.js",
	]);
});

router.get('/cap/hepatoblast', (req, res) => {
	controller.userWall(req, res, './page-views/cap/hepatoblast.hbs', [
		"/js/cap/hepato-scripts.js",
	]);
});

router.get('/cap/neuroblast', (req, res) => {
	controller.userWall(req, res, './page-views/cap/neuroblast.hbs', [
		"/js/cap/nb-scripts.js",
	]);
});

router.get('/cap/neuroend-t', (req, res) => {
	controller.userWall(req, res, './page-views/cap/neuroend-t.hbs', [
		"/js/cap/net-scripts.js",
	]);
});

router.get('/cap/ovary-t', (req, res) => {
	controller.userWall(req, res, './page-views/cap/ovary-t.hbs', [
		"/js/cap/ovary-scripts.js",
	]);
});

router.get('/cap/wilms-t', (req, res) => {
	controller.userWall(req, res, './page-views/cap/wilms-t.hbs', [
		"/js/cap/wilms-scripts.js",
	]);
});

router.get('/cap/retinoblast', (req, res) => {
	controller.userWall(req, res, './page-views/cap/retinoblast.hbs', [
		"/js/cap/rb-scripts.js",
	]);
});

router.get('/cap/rhabdo', (req, res) => {
	controller.userWall(req, res, './page-views/cap/rhabdo.hbs', [
		"/js/cap/rhabdo-scripts.js",
	]);
});

router.get('/cap/testis-t', (req, res) => {
	controller.userWall(req, res, './page-views/cap/testis-t.hbs', [
		"/js/cap/testis-scripts.js",
	]);
});

router.get('/cap/soft-t-rx', (req, res) => {
	controller.userWall(req, res, './page-views/cap/soft-t-rx.hbs', [
		"/js/cap/softrx-scripts.js",
	]);
});

//adult only

router.get('/cap/breast', (req, res) => {
	controller.userWall(req, res, './page-views/cap/breast.hbs', [
		"/js/cap/breast-scripts.js",
	]);
});

router.get('/cap/cervix-leep', (req, res) => {
	controller.userWall(req, res, './page-views/cap/cervix-leep.hbs', [
		"/js/cap/cxleep-scripts.js",
	]);
});

router.get('/cap/cervix-rx', (req, res) => {
	controller.userWall(req, res, './page-views/cap/cervix-rx.hbs', [
		"/js/cap/cxrx-scripts.js",
	]);
});

router.get('/cap/colon-polyp', (req, res) => {
	controller.userWall(req, res, './page-views/cap/colon-polyp.hbs', [
		"/js/cap/colonpolyp-scripts.js",
	]);
});

router.get('/cap/colon-rx', (req, res) => {
	controller.userWall(req, res, './page-views/cap/colon-rx.hbs', [
		"/js/cap/colonrx-scripts.js",
	]);
});

router.get('/cap/endometrium-t', (req, res) => {
	controller.userWall(req, res, './page-views/cap/endometrium-t.hbs', [
		"/js/cap/endometrium-scripts.js",
	]);
});

router.get('/cap/esophagus', (req, res) => {
	controller.userWall(req, res, './page-views/cap/esophagus.hbs', [
		"/js/cap/esophagus-scripts.js",
	]);
});

router.get('/cap/kidney-rx', (req, res) => {
	controller.userWall(req, res, './page-views/cap/kidney-rx.hbs', [
		"/js/cap/kidney-scripts.js",
	]);
});

router.get('/cap/lung-rx', (req, res) => {
	controller.userWall(req, res, './page-views/cap/lung-rx.hbs', [
		"/js/cap/lung-scripts.js",
	]);
});

router.get('/cap/melanoma', (req, res) => {
	controller.userWall(req, res, './page-views/cap/melanoma.hbs', [
		"/js/cap/melanoma-scripts.js",
	]);
});

router.get('/cap/melanoma-bx', (req, res) => {
    controller.userWall(req, res, './page-views/cap/melanoma-bx.hbs', [
    "/js/cap/melanoma-bx-scripts.js",
]);
});

router.get('/cap/larynx-t', (req, res) => {
    controller.userWall(req, res, './page-views/cap/larynx-t.hbs', [
    "/js/cap/larynx-scripts.js",
]);
});

router.get('/cap/perihilar-ducts', (req, res) => {
    controller.userWall(req, res, './page-views/cap/perihilar-ducts.hbs', [
    "/js/cap/perihilar-ducts-scripts.js",
]);
});

router.get('/cap/pharynx-t', (req, res) => {
    controller.userWall(req, res, './page-views/cap/pharynx-t.hbs', [
    "/js/cap/pharynx-scripts.js",
]);
});

router.get('/cap/plasmacytoma', (req, res) => {
	controller.userWall(req, res, './page-views/cap/plasmacytoma.hbs', [
		"/js/cap/plasmacytoma-scripts.js",
	]);
});

router.get('/cap/pancexo-t', (req, res) => {
	controller.userWall(req, res, './page-views/cap/pancexo-t.hbs', [
		"/js/cap/pancexo-scripts.js",
	]);
});

router.get('/cap/thyroid-t', (req, res) => {
	controller.userWall(req, res, './page-views/cap/thyroid-t.hbs', [
		"/js/cap/thyroid-scripts.js",
	]);
});

router.get('/cap/salivary-t', (req, res) => {
	controller.userWall(req, res, './page-views/cap/salivary-t.hbs', [
		"/js/cap/salivary-scripts.js",
	]);
});

router.get('/cap/skin-merkel', (req, res) => {
    controller.userWall(req, res, './page-views/cap/skin-merkel.hbs', [
    "/js/cap/skin-merkel-scripts.js",
]);
});

router.get('/cap/small-intestine', (req, res) => {
    controller.userWall(req, res, './page-views/cap/small-intestine.hbs', [
    "/js/cap/small-intestine-scripts.js",
]);
});

router.get('/cap/stomach', (req, res) => {
	controller.userWall(req, res, './page-views/cap/stomach.hbs', [
		"/js/cap/stomach-scripts.js",
	]);
});

router.get('/cap/stomach-net', (req, res) => {
    controller.userWall(req, res, './page-views/cap/stomach-net.hbs', [
    "/js/cap/stomach-net-scripts.js",
]);
});

router.get('/cap/thymus-t', (req, res) => {
    controller.userWall(req, res, './page-views/cap/thymus-t.hbs', [
    "/js/cap/thymus-scripts.js",
]);
});

router.get('/cap/trophoblast', (req, res) => {
    controller.userWall(req, res, './page-views/cap/trophoblast.hbs', [
    "/js/cap/trophoblast-scripts.js",
]);
});


router.get('/cap/urethra-t', (req, res) => {
    controller.userWall(req, res, './page-views/cap/urethra-t.hbs', [
    "/js/cap/urethra-scripts.js",
]);
});

router.get('/cap/ureter-pelvis-t', (req, res) => {
    controller.userWall(req, res, './page-views/cap/ureter-pelvis-t.hbs', [
    "/js/cap/ureter-scripts.js",
]);
});

router.get('/cap/bladder-bx', (req, res) => {
    controller.userWall(req, res, './page-views/cap/bladder-bx.hbs', [
    "/js/cap/bladder-bx-scripts.js",
]);
});

router.get('/cap/bladder-t', (req, res) => {
    controller.userWall(req, res, './page-views/cap/bladder-t.hbs', [
    "/js/cap/bladder-scripts.js",
]);
});


router.get('/cap/uterine-sarc', (req, res) => {
    controller.userWall(req, res, './page-views/cap/uterine-sarc.hbs', [
    "/js/cap/utsarc-scripts.js",
]);
});


router.get('/cap/uveal-mel', (req, res) => {
    controller.userWall(req, res, './page-views/cap/uveal-mel.hbs', [
    "/js/cap/uveal-mel-scripts.js",
]);
});


router.get('/cap/vagina', (req, res) => {
    controller.userWall(req, res, './page-views/cap/vagina.hbs', [
    "/js/cap/vagina-scripts.js",
]);
});


router.get('/cap/vulva', (req, res) => {
    controller.userWall(req, res, './page-views/cap/vulva.hbs', [
    "/js/cap/vulva-scripts.js",
]);
});



module.exports = router;
