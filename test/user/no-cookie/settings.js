const chai = require('chai');
const chaiHTTP = require('chai-http');
const chaiCheerio = require('chai-cheerio');
const cheerio = require('cheerio');
const app = require('../../../app');
const Promise = require('bluebird');
const util = require('util');
chai.use(chaiHTTP);
chai.use(chaiCheerio);

const should = chai.should();
const expect = chai.expect;

const bcrypt = require('bcryptjs');

const models = require('../../../models');

const moment = require('moment');

const responseStatus = require('../../helpers/response-status').getResponseStatus;

const scriptHelper = require('../../helpers/scripts-loop').scriptReverse;

const header = require('../../helpers/header/user');

const tests = {
	dontGet: function(done) {
		let server = app.listen(3000, function() {
			console.log('listening');
		});
		const pathTo = '/user';
		const scripts = [
			"/js/login-settings.js"
		];
		return chai.request(server)
		.get(pathTo)
		.then(function(res) {
			$ = responseStatus(res);
			res.should.redirect;
			header.notSignedIn();
			$('#login-form').should.exist;
			$('#login-form .form-group').should.have.length(2);
			$('#login-form').find('button[type=submit]').should.exist;
			server.close();
			done();
		})
		.catch(function(err) {
			server.close();
			done(err);
		});
	}
}

module.exports = tests;
