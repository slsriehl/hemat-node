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
	loginObj: {
		username: '  louise  ',
		firstname: 'Louise',
		email: '  auurpgnddqjdchqu@ethereal.email  ',
		password: ' spaz5713 '
	},
	renderPage: function(done) {
		let server = app.listen(3000, function() {
			console.log('listening');
		});
		const pathTo = '/user/login';
		const scripts = [
			"/js/login-settings.js"
		];
		return chai.request(server)
		.get(pathTo)
		.set('Cookie', 'connect.sid=s%3A-UQEXCuRToxObWKYDYwJ4j5-0fEpWphk.kTW4ey%2Fxy4s9fOSA9bd%2FgTrMWX2cszRvEc9nEALjvZU')
		.then(function(res) {
			$ = responseStatus(res);
			header.notSignedIn();
			scriptHelper(scripts, true);
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
	},
	validLogin: function(isEmail, done) {
		let server = app.listen(3000, function() {
			console.log('listening');
		});
		const pathTo = '/user/login';
		let loginObj = {
			password: tests.loginObj.password
		}
		if(isEmail) {
			loginObj.credential = tests.loginObj.email;
		} else {
			loginObj.credential = tests.loginObj.username;
		}
		return chai.request.agent(server)
		.post(pathTo)
		.set('Cookie', 'connect.sid=s%3A-UQEXCuRToxObWKYDYwJ4j5-0fEpWphk.kTW4ey%2Fxy4s9fOSA9bd%2FgTrMWX2cszRvEc9nEALjvZU')
		.type('form')
		.send(loginObj)
		.then(function(res) {
			$ = responseStatus(res);
			header.signedIn(tests.loginObj.firstname);
			$('.message-center > :first-child').should.not.exist;
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
			session.user.should.equal(1);
			session.firstname.should.equal(tests.loginObj.firstname);
			session.isAuth.should.be.true;
			server.close();
			done();
		})
		.catch(function(err) {
			server.close();
			done(err);
		});
	},
	invalidLoginCred: function(isEmail, done) {
		let server = app.listen(3000, function() {
			console.log('listening');
		});
		const pathTo = '/user/login';
		let failObj = {
			password: tests.loginObj.password
		}
		if(isEmail) {
			failObj.credential = 'bar@baz.com';
		} else {
			failObj.credential = 'larry';
		}
		return chai.request.agent(server)
		.post(pathTo)
		.set('Cookie', 'connect.sid=s%3A-UQEXCuRToxObWKYDYwJ4j5-0fEpWphk.kTW4ey%2Fxy4s9fOSA9bd%2FgTrMWX2cszRvEc9nEALjvZU')
		.type('form')
		.send(failObj)
		.then(function(res) {
			$ = responseStatus(res);
			$('#failed-login').should.exist;
			$('#failed-login').should.contain("Sorry, that username or email doesn't match any on record.  Please try again");
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
			let session = JSON.parse(resultArr[resultArr.length - 1].dataValues.data);
			expect(session.user).to.be.undefined;
			expect(session.firstname).to.be.undefined;
			expect(session.isAuth).to.be.false;
			expect(session.message).to.be.null;
			expect(session.messageType).to.be.null;
			server.close();
			done();
		})
		.catch(function(err) {
			server.close();
			done(err);
		});
	},
	invalidLoginPwd: function(isEmail, done) {
		let server = app.listen(3000, function() {
			console.log('listening');
		});
		const pathTo = '/user/login';
		let failObj = {
			password: 'nincompoop'
		}
		if(isEmail) {
			failObj.credential = tests.loginObj.email;
		} else {
			failObj.credential = tests.loginObj.username;
		}
		return chai.request.agent(server)
		.post(pathTo)
		.set('Cookie', 'connect.sid=s%3A-UQEXCuRToxObWKYDYwJ4j5-0fEpWphk.kTW4ey%2Fxy4s9fOSA9bd%2FgTrMWX2cszRvEc9nEALjvZU')
		.type('form')
		.send(failObj)
		.then(function(res) {
			$ = responseStatus(res);
			$('#failed-login').should.exist;
			$('#failed-login').should.contain("Sorry, that password isn't right.  Please try again");
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
			let session = JSON.parse(resultArr[resultArr.length - 1].dataValues.data);
			expect(session.user).to.be.undefined;
			expect(session.firstname).to.be.undefined;
			expect(session.isAuth).to.be.false;
			expect(session.message).to.be.null;
			expect(session.messageType).to.be.null;
			server.close();
			done();
		})
		.catch(function(err) {
			server.close();
			done(err);
		});
	},
	deletedUser: function(isEmail, done) {
		let server = app.listen(3000, function() {
			console.log('listening');
		});
		const pathTo = '/user/login';
		let failObj = {
			password: 'nincompoop'
		}
		if(isEmail) {
			failObj.credential = 'foo@bar.com';
		} else {
			failObj.credential = 'alice';
		}
		return chai.request.agent(server)
		.post(pathTo)
		.set('Cookie', 'connect.sid=s%3A-UQEXCuRToxObWKYDYwJ4j5-0fEpWphk.kTW4ey%2Fxy4s9fOSA9bd%2FgTrMWX2cszRvEc9nEALjvZU')
		.type('form')
		.send(failObj)
		.then(function(res) {
			$ = responseStatus(res);
			$('.message-box').should.have.length(1);
			$('#failed-login-deleted-account').should.exist;
			$('#failed-login-deleted-account').should.contain("ou appear to have deleted your account.  To reactivate it, please");
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
			let session = JSON.parse(resultArr[resultArr.length - 1].dataValues.data);
			expect(session.user).to.be.undefined;
			expect(session.firstname).to.be.undefined;
			expect(session.isAuth).to.be.false;
			expect(session.message).to.be.null;
			expect(session.messageType).to.be.null;
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
