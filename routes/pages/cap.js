const express = require('express');

const router = new express.Router;

const controller = require('../../controllers/pages');

const capLoginCheck = require('../middleware/cap-login-check');

router.use(capLoginCheck);

router.all('/checklist', (req, res) => {
    controller.openAccess(req, res, './page-views/cap/checklist.hbs', [
		"/js/cap/checklist-scripts.js"
	])
})

//pediatric, some crossover


router.all('/appy-net', (req, res) => {
    controller.openAccess(req, res, './page-views/cap/appy-net.hbs', [
		"/js/cap/appy-net-scripts.js",
	]);
});

router.all('/bone-t-rx', (req, res) => {
	controller.openAccess(req, res, './page-views/cap/bone-t-rx.hbs', [
		"/js/cap/bonerx-scripts.js",
	]);
});

router.all('/neuro-t', (req, res) => {
	controller.openAccess(req, res, './page-views/cap/neuro-t.hbs', [
		"/js/cap/neuro-scripts.js",
	]);
});

router.all('/neuro-t-biomarker', (req, res) => {
	controller.openAccess(req, res, './page-views/cap/neuro-t-biomarker.hbs', [
		"/js/cap/cnsbio-scripts.js",
	]);
});


router.all('/pnet-rx', (req, res) => {
	controller.openAccess(req, res, './page-views/cap/pnet-rx.hbs', [
		"/js/cap/pnet-rx-scripts.js",
	]);
});

router.all('/colon-net', (req, res) => {
    controller.openAccess(req, res, './page-views/cap/colon-net.hbs', [
    "/js/cap/colon-net-scripts.js",
]);
});

router.all('/ex-gon-gct', (req, res) => {
	controller.openAccess(req, res, './page-views/cap/ex-gon-gct.hbs', [
		"/js/cap/exgct-scripts.js",
	]);
});

router.all('/duo-amp-net', (req, res) => {
    controller.openAccess(req, res, './page-views/cap/duo-amp-net.hbs', [
    "/js/cap/duo-amp-net-scripts.js",
]);
});

router.all('/hepatoblastoma', (req, res) => {
	controller.openAccess(req, res, './page-views/cap/hepatoblastoma.hbs', [
		"/js/cap/hepatoblastoma-scripts.js",
	]);
});

router.all('/neuroblast', (req, res) => {
	controller.openAccess(req, res, './page-views/cap/neuroblast.hbs', [
		"/js/cap/nb-scripts.js",
	]);
});


router.all('/ovary-t', (req, res) => {
	controller.openAccess(req, res, './page-views/cap/ovary-t.hbs', [
		"/js/cap/ovary-scripts.js",
	]);
});

router.all('/wilms-t', (req, res) => {
	controller.openAccess(req, res, './page-views/cap/wilms-t.hbs', [
		"/js/cap/wilms-scripts.js",
	]);
});

router.all('/retinoblast', (req, res) => {
	controller.openAccess(req, res, './page-views/cap/retinoblast.hbs', [
		"/js/cap/rb-scripts.js",
	]);
});

router.all('/rhabdo', (req, res) => {
	controller.openAccess(req, res, './page-views/cap/rhabdo.hbs', [
		"/js/cap/rhabdo-scripts.js",
	]);
});

router.all('/testis-t', (req, res) => {
	controller.openAccess(req, res, './page-views/cap/testis-t.hbs', [
		"/js/cap/testis-scripts.js",
	]);
});

router.all('/soft-t-rx', (req, res) => {
	controller.openAccess(req, res, './page-views/cap/soft-t-rx.hbs', [
		"/js/cap/softrx-scripts.js",
	]);
});

//adult only
router.all('/prostate-t', (req, res) => {
    controller.openAccess(req, res, './page-views/cap/prostate-t.hbs', [
    "/js/cap/prostate-scripts.js",
]);
});


router.all('/adrenal-t', (req, res) => {
    controller.openAccess(req, res, './page-views/cap/adrenal-t.hbs', [
    "/js/cap/adrenal-scripts.js",
]);
});


router.all('/ampulla-t', (req, res) => {
    controller.openAccess(req, res, './page-views/cap/ampulla-t.hbs', [
    "/js/cap/ampulla-scripts.js",
]);
});


router.all('/anal-t', (req, res) => {
    controller.openAccess(req, res, './page-views/cap/anal-t.hbs', [
    "/js/cap/anal-scripts.js",
]);
});


router.all('/appy-t', (req, res) => {
    controller.openAccess(req, res, './page-views/cap/appy-t.hbs', [
    "/js/cap/appy-t-scripts.js",
]);
});

router.all('/breast-dcis', (req, res) => {
    controller.openAccess(req, res, './page-views/cap/breast-dcis.hbs', [
    "/js/cap/breast-dcis-scripts.js",
]);
});


router.all('/breast', (req, res) => {
	controller.openAccess(req, res, './page-views/cap/breast.hbs', [
		"/js/cap/breast-scripts.js",
	]);
});

router.all('/cervix-leep', (req, res) => {
	controller.openAccess(req, res, './page-views/cap/cervix-leep.hbs', [
		"/js/cap/cxleep-scripts.js",
	]);
});

router.all('/cervix-rx', (req, res) => {
	controller.openAccess(req, res, './page-views/cap/cervix-rx.hbs', [
		"/js/cap/cxrx-scripts.js",
	]);
});

router.all('/colon-polyp', (req, res) => {
	controller.openAccess(req, res, './page-views/cap/colon-polyp.hbs', [
		"/js/cap/colonpolyp-scripts.js",
	]);
});

router.all('/colon-rx', (req, res) => {
	controller.openAccess(req, res, './page-views/cap/colon-rx.hbs', [
		"/js/cap/colonrx-scripts.js",
	]);
});

router.all('/endometrium-t', (req, res) => {
	controller.openAccess(req, res, './page-views/cap/endometrium-t.hbs', [
		"/js/cap/endometrium-scripts.js",
	]);
});

router.all('/esophagus', (req, res) => {
	controller.openAccess(req, res, './page-views/cap/esophagus.hbs', [
		"/js/cap/esophagus-scripts.js",
	]);
});

router.all('/gist', (req, res) => {
    controller.openAccess(req, res, './page-views/cap/gist.hbs', [
    "/js/cap/gist-scripts.js",
]);
});

router.all('/kidney-rx', (req, res) => {
	controller.openAccess(req, res, './page-views/cap/kidney-rx.hbs', [
		"/js/cap/kidney-scripts.js",
	]);
});

router.all('/lung-rx', (req, res) => {
	controller.openAccess(req, res, './page-views/cap/lung-rx.hbs', [
		"/js/cap/lung-scripts.js",
	]);
});

router.all('/melanoma', (req, res) => {
	controller.openAccess(req, res, './page-views/cap/melanoma.hbs', [
		"/js/cap/melanoma-scripts.js",
	]);
});

router.all('/melanoma-bx', (req, res) => {
    controller.openAccess(req, res, './page-views/cap/melanoma-bx.hbs', [
    "/js/cap/melanoma-bx-scripts.js",
]);
});

router.all('/gallbladder', (req, res) => {
    controller.openAccess(req, res, './page-views/cap/gallbladder', [
    "/js/cap/gallbladder-scripts.js",
]);
});

router.all('/hepatocellular', (req, res) => {
    controller.openAccess(req, res, './page-views/cap/hepatocellular', [
    "/js/cap/hepatocellular-scripts.js",
]);
});

router.all('/jejunal-t', (req, res) => {
    controller.openAccess(req, res, './page-views/cap/jejunal-t.hbs', [
    "/js/cap/jejunal-scripts.js",
]);
});

router.all('/lip-oral-t', (req, res) => {
    controller.openAccess(req, res, './page-views/cap/lip-oral-t.hbs', [
    "/js/cap/lip-oral-scripts.js",
]);
});

router.all('/larynx-t', (req, res) => {
    controller.openAccess(req, res, './page-views/cap/larynx-t.hbs', [
    "/js/cap/larynx-scripts.js",
]);
});

router.all('/mesothelioma', (req, res) => {
    controller.openAccess(req, res, './page-views/cap/mesothelioma.hbs', [
    "/js/cap/mesothelioma-scripts.js",
]);
});

router.all('/nasal-t', (req, res) => {
    controller.openAccess(req, res, './page-views/cap/nasal-t.hbs', [
    "/js/cap/nasal-scripts.js",
]);
});

router.all('/pancendo-t', (req, res) => {
    controller.openAccess(req, res, './page-views/cap/pancendo-t.hbs', [
    "/js/cap/pancendo-scripts.js",
]);
});

router.all('/penis-t', (req, res) => {
    controller.openAccess(req, res, './page-views/cap/penis-t.hbs', [
    "/js/cap/penis-scripts.js",
]);
});

router.all('/intrahepatic-ducts', (req, res) => {
    controller.openAccess(req, res, './page-views/cap/intrahepatic-ducts.hbs', [
    "/js/cap/intrahepatic-ducts-scripts.js",
]);
});

router.all('/distal-ducts', (req, res) => {
    controller.openAccess(req, res, './page-views/cap/distal-ducts.hbs', [
    "/js/cap/distal-ducts-scripts.js",
]);
});

router.all('/perihilar-ducts', (req, res) => {
    controller.openAccess(req, res, './page-views/cap/perihilar-ducts.hbs', [
    "/js/cap/perihilar-ducts-scripts.js",
]);
});

router.all('/pharynx-t', (req, res) => {
    controller.openAccess(req, res, './page-views/cap/pharynx-t.hbs', [
    "/js/cap/pharynx-scripts.js",
]);
});

router.all('/plasmacytoma', (req, res) => {
	controller.openAccess(req, res, './page-views/cap/plasmacytoma.hbs', [
		"/js/cap/plasmacytoma-scripts.js",
	]);
});

router.all('/pancexo-t', (req, res) => {
	controller.openAccess(req, res, './page-views/cap/pancexo-t.hbs', [
		"/js/cap/pancexo-scripts.js",
	]);
});

router.all('/thyroid-t', (req, res) => {
	controller.openAccess(req, res, './page-views/cap/thyroid-t.hbs', [
		"/js/cap/thyroid-scripts.js",
	]);
});

router.all('/salivary-t', (req, res) => {
	controller.openAccess(req, res, './page-views/cap/salivary-t.hbs', [
		"/js/cap/salivary-scripts.js",
	]);
});

router.all('/skin-merkel', (req, res) => {
    controller.openAccess(req, res, './page-views/cap/skin-merkel.hbs', [
    "/js/cap/skin-merkel-scripts.js",
]);
});

router.all('/small-intestine', (req, res) => {
    controller.openAccess(req, res, './page-views/cap/small-intestine.hbs', [
    "/js/cap/small-intestine-scripts.js",
]);
});

router.all('/stomach', (req, res) => {
	controller.openAccess(req, res, './page-views/cap/stomach.hbs', [
		"/js/cap/stomach-scripts.js",
	]);
});

router.all('/stomach-net', (req, res) => {
    controller.openAccess(req, res, './page-views/cap/stomach-net.hbs', [
    "/js/cap/stomach-net-scripts.js",
]);
});

router.all('/thymus-t', (req, res) => {
    controller.openAccess(req, res, './page-views/cap/thymus-t.hbs', [
    "/js/cap/thymus-scripts.js",
]);
});

router.all('/trophoblast', (req, res) => {
    controller.openAccess(req, res, './page-views/cap/trophoblast.hbs', [
    "/js/cap/trophoblast-scripts.js",
]);
});


router.all('/urethra-t', (req, res) => {
    controller.openAccess(req, res, './page-views/cap/urethra-t.hbs', [
    "/js/cap/urethra-scripts.js",
]);
});

router.all('/ureter-pelvis-t', (req, res) => {
    controller.openAccess(req, res, './page-views/cap/ureter-pelvis-t.hbs', [
    "/js/cap/ureter-scripts.js",
]);
});

router.all('/bladder-bx', (req, res) => {
    controller.openAccess(req, res, './page-views/cap/bladder-bx.hbs', [
    "/js/cap/bladder-bx-scripts.js",
]);
});

router.all('/bladder-t', (req, res) => {
    controller.openAccess(req, res, './page-views/cap/bladder-t.hbs', [
    "/js/cap/bladder-scripts.js",
]);
});


router.all('/uterine-sarc', (req, res) => {
    controller.openAccess(req, res, './page-views/cap/uterine-sarc.hbs', [
    "/js/cap/utsarc-scripts.js",
]);
});


router.all('/uveal-mel', (req, res) => {
    controller.openAccess(req, res, './page-views/cap/uveal-mel.hbs', [
    "/js/cap/uveal-mel-scripts.js",
]);
});


router.all('/vagina', (req, res) => {
    controller.openAccess(req, res, './page-views/cap/vagina.hbs', [
    "/js/cap/vagina-scripts.js",
]);
});


router.all('/vulva', (req, res) => {
    controller.openAccess(req, res, './page-views/cap/vulva.hbs', [
    "/js/cap/vulva-scripts.js",
]);
});



module.exports = router;
