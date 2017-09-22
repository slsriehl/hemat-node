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
//surg-path pages
//cap pages



const beforeEachHooks = require('./helpers/before-each');

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
});
//
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
});
