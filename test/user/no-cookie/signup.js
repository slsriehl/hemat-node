
const chai = require('chai');
const chaiHTTP = require('chai-http');
const chaiCheerio = require('chai-cheerio');
const cheerio = require('cheerio');
const app = require('../../../app');
 
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
	signupObj: {
		firstname: '  Mary  ',
		lastname: '  Jones  ',
		username: '  MARY  ',
		email: '  VINqypqsisj5d5zi@ethereal.email  ',
		mobile: '  12146325412  ',
		password: '  dorkwad49  ',
		"g-recaptcha-response": 'foo'
	},
	renderPage: function(done) {
		let server = app.listen(3000, function() {
			console.log('listening');
		});
		const pathTo = '/user/signup';
		const scripts = [
			"/js/login-settings.js"
		];
		return chai.request(server)
		.get(pathTo)
		.then(function(res) {
			$ = responseStatus(res);
			header.notSignedIn();
			scriptHelper(scripts, true);
			$('#signup-form').should.exist;
			$('#signup-form .form-group').should.have.length(5);
			$('#signup-form').find('.g-recaptcha').should.exist;
			$('#signup-form').find('button[type=submit]').should.exist;
			server.close();
			done();
		})
		.catch(function(err) {
			server.close();
			done(err);
		});
	},
	validSignup: function(done) {
		let server = app.listen(3000, function() {
			console.log('listening');
		});
		const pathTo = '/user/signup';

		return chai.request.agent(server)
		.post(pathTo)
		.type('form')
		.send(tests.signupObj)
		.then(function(res) {
			$ = responseStatus(res);
			header.signedIn('Mary');
			$('#successful-signup').should.exist;
			$('#failed-signup').should.not.exist;
			$('#system-fail').should.not.exist;
			$('#successful-signup').should.contain('Welcome to Hematogones.com!  I hope you find these tools useful.');
			return models.Users
			.findOne({
				attributes: ['id', 'firstname', 'lastname', 'email', 'mobile', 'password', 'requireReset'],
				where: {
					username: 'mary'
				}
			})
		})
		.then(function(data) {
			data.dataValues.id.should.equal(4);
			data.dataValues.firstname.should.equal('Mary');
			data.dataValues.lastname.should.equal('Jones');
			data.dataValues.email.should.equal('vinqypqsisj5d5zi@ethereal.email');
			data.dataValues.mobile.should.equal('12146325412');
			bcrypt.compareSync(tests.signupObj.password.trim(), data.dataValues.password).should.be.true;
			data.dataValues.requireReset.should.be.false;
			return models.UserSessions
			.findAll({
				attributes: ['expires', 'data']
			})
		})
		.then(function(results) {
			console.log(results);
			let resultArr = results;
			resultArr.sort(function(a, b) {
				if(moment(a.dataValues.expires).isAfter(b.dataValues.expires)) {
					return b - a;
				}
			});
			console.log(resultArr[resultArr.length - 1]);
			let session = JSON.parse(resultArr[resultArr.length - 1].dataValues.data);
			console.log(session);
			session.user.should.equal(4);
			session.firstname.should.equal('Mary');
			session.isAuth.should.be.true;
			server.close();
			done();
		})
		.catch(function(err) {
			server.close();
			done(err);
		});
	},
	invalidSignup: function(isEmail, done) {
		let server = app.listen(3000, function() {
			console.log('listening');
		});
		const pathTo = '/user/signup';
		let failObj = tests.signupObj;
		if(isEmail) {
			failObj.email = 'auurpgnddqjdchqu@ethereal.email';
		} else {
			failObj.username = 'louise';
		}
		return chai.request.agent(server)
		.post(pathTo)
		.type('form')
		.send(failObj)
		.then(function(res) {
			$ = responseStatus(res);
			$('#successful-signup').should.not.exist;
			$('#failed-signup').should.exist;
			$('#system-fail').should.not.exist;
			$('#failed-signup').should.contain('Sorry, that username or email is taken already.');
			return models.Users
			.findOne({
				where: {
					firstname: 'Mary'
				}
			})
		})
		.then(function(data) {
			expect(data).to.be.null;
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
