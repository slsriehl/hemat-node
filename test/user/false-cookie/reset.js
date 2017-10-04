
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
	renderPage: function(done) {
		let server = app.listen(3000, function() {
			console.log('listening');
		});
		const pathTo = '/reset/request';
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
			$('#reset-request-form').should.exist;
			$('#reset-request-form .form-group').should.have.length(1);
			$('#reset-request-form').find('button[type=submit]').should.exist;
			server.close();
			done();
		})
		.catch(function(err) {
			server.close();
			done(err);
		});
	},
	badToken: function(badReason, done) {
		let server = app.listen(3000, function() {
			console.log('listening');
		});
		let token;
		if(badReason == 'expired') {
			token = 'e4d4605a-2929-4701-8873-55c0f3e56ff8';
		} else if (badReason == 'used') {
			token = '576a66fc-80a5-4522-9741-967b027c11b4';
		} else if(badReason == 'invalid') {
			token = 'e51e7e18-5d67-4fc9-ba7d-f6a5624694ff';
		}

		const pathTo = `/reset/${token}`;
		let scripts = [
			"/js/login-settings.js"
		];
		return chai.request(server)
		.get(pathTo)
		.set('Cookie', 'connect.sid=s%3A-UQEXCuRToxObWKYDYwJ4j5-0fEpWphk.kTW4ey%2Fxy4s9fOSA9bd%2FgTrMWX2cszRvEc9nEALjvZU')
		.then(function(res) {
			$ = responseStatus(res);
			header.notSignedIn();
			scriptHelper(scripts, true);
			$('#reset-request-form').should.exist;
			$('#credential').should.exist;
			$('#reset-request-form').find('button[type=submit]').should.have.length(1);
			$('#expired-reset-request-on-load').should.exist;
			$('#expired-reset-request-on-load').should.contain('Sorry, this reset link is expired.  Please request another and use it within 24 hours.');
			server.close();
			done();
		})
		.catch(function(err) {
			server.close();
			done(err);
		});
	},
	resetSuccess: function(requireReset, done) {
		let server = app.listen(3000, function() {
			console.log('listening');
		});
		let token;
		let firstname;
		let userId;
		if(requireReset) {
			token = '94bc94f7-b921-4c4f-bb5e-19c7b0b3e75f';
			userId = 2;
			firstname = "Sandy";
		} else {
			token = '30fcdbfd-567e-4630-b7f9-bb135f46c3be';
			userId = 1;
			firstname = "Louise";
		}
		const pathTo = `/reset/${token}`;
		const newPassword = {
			password: 'ihateclowns'
		}
		return chai.request.agent(server)
		.post(pathTo)
		.set('Cookie', 'connect.sid=s%3A-UQEXCuRToxObWKYDYwJ4j5-0fEpWphk.kTW4ey%2Fxy4s9fOSA9bd%2FgTrMWX2cszRvEc9nEALjvZU')
		.type('form')
		.send(newPassword)
		.then(function(res) {
			$ = responseStatus(res);
			header.signedIn(firstname);
			$('#successful-reset').should.exist;
			$('#successful-reset').should.contain('Password successfully reset!');
			return models.ResetTokens
			.findOne({
				attributes: ['used'],
				where: {
					code: token
				}
			})
		})
		.then(function(data) {
			data.dataValues.used.should.be.true;

			return models.Users
			.findOne({
				attributes: ['password'],
				where: {
					id: userId
				}
			})
		})
		.then(function(data) {
			bcrypt.compareSync(newPassword.password, data.dataValues.password).should.be.true;
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
			session.user.should.equal(userId);
			session.firstname.should.equal(firstname);
			session.isAuth.should.be.true;
			expect(session.message).to.be.null;
			expect(session.messageType).to.be.null;
			server.close();
			done();
		})
		.catch(function(err) {
			server.close;
			done(err);
		});
	}

}

module.exports = tests;
