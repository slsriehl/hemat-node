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

// describe('logged in', function () {
// 	beforeEach('setup logged in', function(done) {
// 		beforeEach.loggedIn(done);
// 	});
// 	it('should render the heme-diff page', function(done) {
// 		hemePath.hemeDiffLoggedIn(done);
// 	});
// });

// describe('expired cookie', function() {
// 	beforeEach('setup expired cookie', function(done) {
// 		beforeEach.expiredCookie(done);
// 	});
// });
//
describe('no cookie', function() {
	// beforeEach('setup no cookie', function(done) {
	// 	beforeEach.noCookie(done);
	// });
	it('should render the heme-diff page', function(done) {
		hemePath.hemeDiffNoCookie(done);
	});
});
