process.env.NODE_ENV = 'test';

//heme-path pages
const hemePathNoCookie = require('./pages-get/no-cookie/heme-path');
const hemePathWrongCookie = require('./pages-get/wrong-cookie/heme-path');
const hemePathRightCookie = require('./pages-get/right-cookie/heme-path');
//gi-path pages
const giPathNoCookie = require('./pages-get/no-cookie/gi-path');
const giPathWrongCookie = require('./pages-get/wrong-cookie/gi-path');
const giPathRightCookie = require('./pages-get/right-cookie/gi-path');
//clin-path pages
const clinPathNoCookie = require('./pages-get/no-cookie/clin-path');
const clinPathWrongCookie = require('./pages-get/wrong-cookie/clin-path');
const clinPathRightCookie = require('./pages-get/right-cookie/clin-path');
//cap pages
const capOneNoCookie = require('./pages-get/no-cookie/cap-one');
const capTwoNoCookie = require('./pages-get/no-cookie/cap-two');
const capOneWrongCookie = require('./pages-get/wrong-cookie/cap-one');
const capTwoWrongCookie = require('./pages-get/wrong-cookie/cap-two');
const capOneRightCookie = require('./pages-get/right-cookie/cap-one');
const capTwoRightCookie = require('./pages-get/right-cookie/cap-two');
//surg-path pages
const surgPathNoCookie = require('./pages-get/no-cookie/surg-path');
const surgPathWrongCookie = require('./pages-get/wrong-cookie/surg-path');
const surgPathRightCookie = require('./pages-get/right-cookie/surg-path');

const beforeEachHooks = require('./helpers/before-each-pages-get');

describe('logged in get requests', function () {
	beforeEach('setup logged in', function(done) {
		beforeEachHooks.correctCookie(done);
	});
	//heme-path pages
	it('should render the heme-diff page with logged in header', function(done) {
		hemePathRightCookie.hemeDiff(done);
	});
	it('should render the counter page with logged in header', function(done) {
		hemePathRightCookie.counter(done);
	});
	it('should render the pb-smears page with logged in header', function(done) {
		hemePathRightCookie.pbSmears(done);
	});
	it('should render the bone-marrow page with logged in header', function(done) {
		hemePathRightCookie.boneMarrow(done);
	});
	it('should render the dlbcl page with logged in header', function(done) {
		hemePathRightCookie.dlbcl(done);
	});
	//gi-path pages
	it('should render the gi-bx page with logged in header', function(done) {
		giPathRightCookie.giBx(done);
	});
	it('should render liver-bx page with logged in header', function(done) {
		giPathRightCookie.liverBx(done);
	});
	//clin-path pages
	it('should render the bal page', function(done) {
		clinPathRightCookie.bal(done);
	});
	it('should render the csf page', function(done) {
		clinPathRightCookie.csf(done);
	});
	it('should render the antibody-id page', function(done) {
		clinPathRightCookie.antibodyId(done);
	});
	it('should render the tx-rxn page', function(done) {
		clinPathRightCookie.txRxn(done);
	});
	it('should show a user wall on the bone-t-bx page and render the main page', function(done) {
		capOneRightCookie.boneTBx(done);
	});
	it('should show a user wall on the bone-t-rx page and render the main page', function(done) {
		capOneRightCookie.boneTRx(done);
	});
	it('should show a user wall on the neuro-t page and render the main page', function(done) {
		capOneRightCookie.neuroT(done);
	});
	it('should show a user wall on the neuro-t-biomarker page and render the main page', function(done) {
		capOneRightCookie.neuroTBio(done);
	});
	it('should show a user wall on the pnet-bx page and render the main page', function(done) {
		capOneRightCookie.pnetBx(done);
	});
	it('should show a user wall on the pnet-rx page and render the main page', function(done) {
		capOneRightCookie.pnetRx(done);
	});
	it('should show a user wall on the ex-gon-gct page and render the main page', function(done) {
		capOneRightCookie.exGonGct(done);
	});
	it('should show a user wall on the hepatoblast page and render the main page', function(done) {
		capOneRightCookie.hepatoBlast(done);
	});
	it('should show a user wall on the neuroblast page and render the main page', function(done) {
		capOneRightCookie.neuroBlast(done);
	});
	it('should show a user wall on the neuroend-t page and render the main page', function(done) {
		capOneRightCookie.neuroEndT(done);
	});
	it('should show a user wall on the ovary-t page and render the main page', function(done) {
		capOneRightCookie.ovaryT(done);
	});
	it('should show a user wall on the wilms-t page and render the main page', function(done) {
		capOneRightCookie.wilmsT(done);
	});
	it('should show a user wall on the retinoblast page and render the main page', function(done) {
		capOneRightCookie.retinoBlast(done);
	});
	it('should show a user wall on the rhabdo page and render the main page', function(done) {
		capOneRightCookie.rhabdo(done);
	});
	it('should show a user wall on the testis-t page and render the main page', function(done) {
		capOneRightCookie.testisT(done);
	});
	it('should show a user wall on the soft-t-rx page and render the main page', function(done) {
		capOneRightCookie.softTRx(done);
	});
	//cap two adult only
	it('should show a user wall on the breast page and render the main page', function(done) {
		capTwoRightCookie.breast(done);
	});
	it('should show a user wall on the cervix-leep page and render the main page', function(done) {
		capTwoRightCookie.cervixLeep(done);
	});
	it('should show a user wall on the cervix-rx page and render the main page', function(done) {
		capTwoRightCookie.cervixRx(done);
	});
	it('should show a user wall on the colon-polyp page and render the main page', function(done) {
		capTwoRightCookie.colonPolyp(done);
	});
	it('should show a user wall on the colon-rx page and render the main page', function(done) {
		capTwoRightCookie.colonRx(done);
	});
	it('should show a user wall on the endometrium-t page and render the main page', function(done) {
		capTwoRightCookie.endometriumT(done);
	});
	it('should show a user wall on the esophagus page and render the main page', function(done) {
		capTwoRightCookie.esophagus(done);
	});
	it('should show a user wall on the kidney-rx page and render the main page', function(done) {
		capTwoRightCookie.kidneyRx(done);
	});
	it('should show a user wall on the lung-rx page and render the main page', function(done) {
		capTwoRightCookie.lungRx(done);
	});
	it('should show a user wall on the melanoma page and render the main page', function(done) {
		capTwoRightCookie.melanoma(done);
	});
	it('should show a user wall on the plasmacytoma page and render the main page', function(done) {
		capTwoRightCookie.plasmacytoma(done);
	});
	it('should show a user wall on the pancexo-t page and render the main page', function(done) {
		capTwoRightCookie.pancExoT(done);
	});
	it('should show a user wall on the thyroid-t page and render the main page', function(done) {
		capTwoRightCookie.thyroidT(done);
	});
	it('should show a user wall on the salivary-t page and render the main page', function(done) {
		capTwoRightCookie.salivaryT(done);
	});
	it('should show a user wall on the stomach page and render the main page', function(done) {
		capTwoRightCookie.stomach(done);
	});
	//surg path
	it('should show a user wall on the ihc-tables page and render the main page', function(done) {
		surgPathRightCookie.ihc(done);
	});
	it('should render the breast fixation page without login features', function(done) {
		surgPathRightCookie.breastFixation(done);
	});
	it('should show a user wall on the snippets page and render the main page', function(done) {
		surgPathRightCookie.snippets(done);
	});
});

describe('expired cookie get requests', function() {
	beforeEach('setup expired cookie', function(done) {
		beforeEachHooks.expiredCookie(done);
	});
	//heme-path pages
	it('should render the heme-diff page', function(done) {
		hemePathWrongCookie.hemeDiff(done);
	});
	it('should render the counter page', function(done) {
		hemePathWrongCookie.counter(done);
	});
	it('should render the pb-smears page', function(done) {
		hemePathWrongCookie.pbSmears(done);
	});
	it('should render the bone-marrow page', function(done) {
		hemePathWrongCookie.boneMarrow(done);
	});
	it('should show a user wall on the dlbcl page and render the main page', function(done) {
		hemePathWrongCookie.dlbcl(done);
	});
	//gi-path pages
	it('should render the gi-bx page', function(done) {
		giPathWrongCookie.giBx(done);
	});
	it('should show a user wall on the liver-bx page and render the main page', function(done) {
		giPathWrongCookie.liverBx(done);
	});
//clin-path pages
	it('should render the bal page', function(done) {
		clinPathWrongCookie.bal(done);
	});
	it('should render the csf page', function(done) {
		clinPathWrongCookie.csf(done);
	});
	it('should render the antibody-id page', function(done) {
		clinPathWrongCookie.antibodyId(done);
	});
	it('should render the tx-rxn page', function(done) {
		clinPathWrongCookie.txRxn(done);
	});
	it('should show a user wall on the bone-t-bx page and render the main page', function(done) {
		capOneWrongCookie.boneTBx(done);
	});
	it('should show a user wall on the bone-t-rx page and render the main page', function(done) {
		capOneWrongCookie.boneTRx(done);
	});
	it('should show a user wall on the neuro-t page and render the main page', function(done) {
		capOneWrongCookie.neuroT(done);
	});
	it('should show a user wall on the neuro-t-biomarker page and render the main page', function(done) {
		capOneWrongCookie.neuroTBio(done);
	});
	it('should show a user wall on the pnet-bx page and render the main page', function(done) {
		capOneWrongCookie.pnetBx(done);
	});
	it('should show a user wall on the pnet-rx page and render the main page', function(done) {
		capOneWrongCookie.pnetRx(done);
	});
	it('should show a user wall on the ex-gon-gct page and render the main page', function(done) {
		capOneWrongCookie.exGonGct(done);
	});
	it('should show a user wall on the hepatoblast page and render the main page', function(done) {
		capOneWrongCookie.hepatoBlast(done);
	});
	it('should show a user wall on the neuroblast page and render the main page', function(done) {
		capOneWrongCookie.neuroBlast(done);
	});
	it('should show a user wall on the neuroend-t page and render the main page', function(done) {
		capOneWrongCookie.neuroEndT(done);
	});
	it('should show a user wall on the ovary-t page and render the main page', function(done) {
		capOneWrongCookie.ovaryT(done);
	});
	it('should show a user wall on the wilms-t page and render the main page', function(done) {
		capOneWrongCookie.wilmsT(done);
	});
	it('should show a user wall on the retinoblast page and render the main page', function(done) {
		capOneWrongCookie.retinoBlast(done);
	});
	it('should show a user wall on the rhabdo page and render the main page', function(done) {
		capOneWrongCookie.rhabdo(done);
	});
	it('should show a user wall on the testis-t page and render the main page', function(done) {
		capOneWrongCookie.testisT(done);
	});
	it('should show a user wall on the soft-t-rx page and render the main page', function(done) {
		capOneWrongCookie.softTRx(done);
	});
	//cap two adult only
	it('should show a user wall on the breast page and render the main page', function(done) {
		capTwoWrongCookie.breast(done);
	});
	it('should show a user wall on the cervix-leep page and render the main page', function(done) {
		capTwoWrongCookie.cervixLeep(done);
	});
	it('should show a user wall on the cervix-rx page and render the main page', function(done) {
		capTwoWrongCookie.cervixRx(done);
	});
	it('should show a user wall on the colon-polyp page and render the main page', function(done) {
		capTwoWrongCookie.colonPolyp(done);
	});
	it('should show a user wall on the colon-rx page and render the main page', function(done) {
		capTwoWrongCookie.colonRx(done);
	});
	it('should show a user wall on the endometrium-t page and render the main page', function(done) {
		capTwoWrongCookie.endometriumT(done);
	});
	it('should show a user wall on the esophagus page and render the main page', function(done) {
		capTwoWrongCookie.esophagus(done);
	});
	it('should show a user wall on the kidney-rx page and render the main page', function(done) {
		capTwoWrongCookie.kidneyRx(done);
	});
	it('should show a user wall on the lung-rx page and render the main page', function(done) {
		capTwoWrongCookie.lungRx(done);
	});
	it('should show a user wall on the melanoma page and render the main page', function(done) {
		capTwoWrongCookie.melanoma(done);
	});
	it('should show a user wall on the plasmacytoma page and render the main page', function(done) {
		capTwoWrongCookie.plasmacytoma(done);
	});
	it('should show a user wall on the pancexo-t page and render the main page', function(done) {
		capTwoWrongCookie.pancExoT(done);
	});
	it('should show a user wall on the thyroid-t page and render the main page', function(done) {
		capTwoWrongCookie.thyroidT(done);
	});
	it('should show a user wall on the salivary-t page and render the main page', function(done) {
		capTwoWrongCookie.salivaryT(done);
	});
	it('should show a user wall on the stomach page and render the main page', function(done) {
		capTwoWrongCookie.stomach(done);
	});
	//surg-path
	it('should show a user wall on the ihc-tables page and render the main page', function(done) {
		surgPathWrongCookie.ihc(done);
	});
	it('should render the breast fixation page without login features', function(done) {
		surgPathWrongCookie.breastFixation(done);
	});
	it('should show a user wall on the snippets page and render the main page', function(done) {
		surgPathWrongCookie.snippets(done);
	});
});

describe('no cookie get requests', function() {
	//no before each because there's no db considerations
	//heme-path pages
	it('should render the heme-diff page', function(done) {
		hemePathNoCookie.hemeDiff(done);
	});

	it('should render the counter page', function(done) {
		hemePathNoCookie.counter(done);
	});

	it('should render the pb-smears page', function(done) {
		hemePathNoCookie.pbSmears(done);
	});

	it('should render the bone-marrow page', function(done) {
		hemePathNoCookie.boneMarrow(done);
	});

	it('should show a user wall on the dlbcl page and render the main page', function(done) {
		hemePathNoCookie.dlbcl(done);
	});
	//gi-path pages
	it('should render the gi-bx page', function(done) {
		giPathNoCookie.giBx(done);
	});
	it('should show a user wall on the liver-bx page and render the main page', function(done) {
		giPathNoCookie.liverBx(done);
	});
	//clin-path pages
	it('should render the bal page', function(done) {
		clinPathNoCookie.bal(done);
	});
	it('should render the csf page', function(done) {
		clinPathNoCookie.csf(done);
	});
	it('should render the antibody-id page', function(done) {
		clinPathNoCookie.antibodyId(done);
	});
	it('should render the tx-rxn page', function(done) {
		clinPathNoCookie.txRxn(done);
	});
	//cap one
	it('should show a user wall on the bone-t-bx page and render the main page', function(done) {
		capOneNoCookie.boneTBx(done);
	});
	it('should show a user wall on the bone-t-rx page and render the main page', function(done) {
		capOneNoCookie.boneTRx(done);
	});
	it('should show a user wall on the neuro-t page and render the main page', function(done) {
		capOneNoCookie.neuroT(done);
	});
	it('should show a user wall on the neuro-t-biomarker page and render the main page', function(done) {
		capOneNoCookie.neuroTBio(done);
	});
	it('should show a user wall on the pnet-bx page and render the main page', function(done) {
		capOneNoCookie.pnetBx(done);
	});
	it('should show a user wall on the pnet-rx page and render the main page', function(done) {
		capOneNoCookie.pnetRx(done);
	});
	it('should show a user wall on the ex-gon-gct page and render the main page', function(done) {
		capOneNoCookie.exGonGct(done);
	});
	it('should show a user wall on the hepatoblast page and render the main page', function(done) {
		capOneNoCookie.hepatoBlast(done);
	});
	it('should show a user wall on the neuroblast page and render the main page', function(done) {
		capOneNoCookie.neuroBlast(done);
	});
	it('should show a user wall on the neuroend-t page and render the main page', function(done) {
		capOneNoCookie.neuroEndT(done);
	});
	it('should show a user wall on the ovary-t page and render the main page', function(done) {
		capOneNoCookie.ovaryT(done);
	});
	it('should show a user wall on the wilms-t page and render the main page', function(done) {
		capOneNoCookie.wilmsT(done);
	});
	it('should show a user wall on the retinoblast page and render the main page', function(done) {
		capOneNoCookie.retinoBlast(done);
	});
	it('should show a user wall on the rhabdo page and render the main page', function(done) {
		capOneNoCookie.rhabdo(done);
	});
	it('should show a user wall on the testis-t page and render the main page', function(done) {
		capOneNoCookie.testisT(done);
	});
	it('should show a user wall on the soft-t-rx page and render the main page', function(done) {
		capOneNoCookie.softTRx(done);
	});
	//cap two adult only
	it('should show a user wall on the breast page and render the main page', function(done) {
		capTwoNoCookie.breast(done);
	});
	it('should show a user wall on the cervix-leep page and render the main page', function(done) {
		capTwoNoCookie.cervixLeep(done);
	});
	it('should show a user wall on the cervix-rx page and render the main page', function(done) {
		capTwoNoCookie.cervixRx(done);
	});
	it('should show a user wall on the colon-polyp page and render the main page', function(done) {
		capTwoNoCookie.colonPolyp(done);
	});
	it('should show a user wall on the colon-rx page and render the main page', function(done) {
		capTwoNoCookie.colonRx(done);
	});
	it('should show a user wall on the endometrium-t page and render the main page', function(done) {
		capTwoNoCookie.endometriumT(done);
	});
	it('should show a user wall on the esophagus page and render the main page', function(done) {
		capTwoNoCookie.esophagus(done);
	});
	it('should show a user wall on the kidney-rx page and render the main page', function(done) {
		capTwoNoCookie.kidneyRx(done);
	});
	it('should show a user wall on the lung-rx page and render the main page', function(done) {
		capTwoNoCookie.lungRx(done);
	});
	it('should show a user wall on the melanoma page and render the main page', function(done) {
		capTwoNoCookie.melanoma(done);
	});
	it('should show a user wall on the plasmacytoma page and render the main page', function(done) {
		capTwoNoCookie.plasmacytoma(done);
	});
	it('should show a user wall on the pancexo-t page and render the main page', function(done) {
		capTwoNoCookie.pancExoT(done);
	});
	it('should show a user wall on the thyroid-t page and render the main page', function(done) {
		capTwoNoCookie.thyroidT(done);
	});
	it('should show a user wall on the salivary-t page and render the main page', function(done) {
		capTwoNoCookie.salivaryT(done);
	});
	it('should show a user wall on the stomach page and render the main page', function(done) {
		capTwoNoCookie.stomach(done);
	});
	//surg-path
	it('should show a user wall on the ihc-tables page and render the main page', function(done) {
		surgPathNoCookie.ihc(done);
	});
	it('should render the breast fixation page without login features', function(done) {
		surgPathNoCookie.breastFixation(done);
	});
	it('should show a user wall on the snippets page and render the main page', function(done) {
		surgPathNoCookie.snippets(done);
	});
});
