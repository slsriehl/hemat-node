process.env.NODE_ENV = 'test';

// const chai = require('chai');
// const chaiHTTP = require('chai-http');
// const server = require('../server');
// const should = chai.should();
// //const models = require('../models');
// const bcrypt = require('bcryptjs');
// const chaiDOM = require('chai-dom');
//
// //require('mocha-generators').install();
//
// chai.use(chaiHTTP);
// chai.use(chaiDOM);

// const myNightmare = require('./parts/my-nightmare');
//
// const beforeEach = require('./parts/before-each');

const hemePath = require('./pages/heme-path');

// describe('logged in get requests', function () {
// 	beforeEach('setup logged in', function(done) {
// 		beforeEach.loggedIn(done);
// 	});
// 	it('should render the heme-diff page', function(done) {
// 		hemePath.hemeDiffLoggedIn(done);
// 	});
// });

// describe('expired cookie get requests', function() {
// 	beforeEach('setup expired cookie', function(done) {
// 		beforeEach.expiredCookie(done);
// 	});
// });
//
describe('no cookie get requests', function() {
	// before('setup no cookie', function(done) {
	//
	// });
	it('should render the heme-diff page', function(done) {
		hemePath.hemeDiffNoCookie(done);
	});

	// it('should render the counter page', function(done) {
	// 	hemePath.counterNoCookie(done);
	// });

	// it('should render the pb-smears page', function(done) {
	// 	hemePath.pbSmearsNoCookie(done);
	// });

	// it('should render the bone-marrow page', function(done) {
	// 	hemePath.boneMarrowNoCookie(done);
	// });
	//
	// it('should show a user wall on the dlbcl page and render the main page', function(done) {
	// 	hemePath.dlbclNoCookie(done);
	// });
});
