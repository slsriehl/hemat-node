const Promise = require('bluebird');
const chai = require('chai');
const chaiHTTP = require('chai-http');
const chaiCheerio = require('chai-cheerio');
const cheerio = require('cheerio');
const server = require('../../server');
const util = require('util');
chai.use(chaiHTTP);
chai.use(chaiCheerio);

const readFileAsync = Promise.promisify(require('fs').readFile);

const path = require('path');

const should = chai.should();

const models = require('../../models');

const responseStatusReload = require('../helpers/response-status').getResponseStatus;

//mail stuff
const popCredentials = require('../email-config/test-send/pop-objs');

const Client = require('yapople').Client;

let newClient;

let client;

// const Pop3Command = require('node-pop3');
//
// const MailParser = require('front-mailparser').MailParser;
// const mailParser = new MailParser;
// mailParser.on('end', function(mail) {
// 	console.log(mail);
// });
// const sendCredentials = require('../email-config/transporter');
//
// const transporter = Promise.promisifyAll(sendCredentials);

const tests = {
	sendResetNotReq: function(usedEmail, done) {
		const pathTo = '/reset/request';
		let sentMessage;
		let credential;
		if(usedEmail) {
			credential = popCredentials.louise.user;
		} else {
			credential = 'louise';
		}
		return chai.request(server)
		.post(pathTo)
		.type('form')
		.send({credential})
		.then(function(res) {
			//test the dom response
			console.log(res.res.text);
			$ = responseStatusReload(res);
			$('.message-center').should.have.length(1);
			console.log($('.message-center'))
			$('#successful-reset-send-optional').should.exist;
			$('#successful-reset-send-optional').should.contain("Your reset request was successful.  Please check your email to reset your password.");
			return readFileAsync(__dirname + '/../email-config/test-sent-from.txt', 'utf8')
		})
		.then(function(data) {
			console.log(data);
			const fileData = JSON.parse(data);
			//test to see if email was sent

			newClient = new Client(fileData);

			client = Promise.promisifyAll(newClient);
			return client.connectAsync()
		})
		.then(function() {
			return client.retrieveAsync(1)
		})
		.then(function(message) {
			//deal with the mail received by the test account to see if the email is present with the correct UUID
			sentMessage = message;
			return client.quitAsync()
		})
		.then(function() {
			return models.ResetTokens
			.findAll({
				attributes: ['code'],
				where: {
					valid: true,
					userId: 1
				}
			})
		})
		.then(function(data) {
			data.should.have.length(1);
			console.log(sentMessage.html);
			sentMessage.html.should.contain(data[0].dataValues.code);
		})
		.then(function() {
			done();
		})
		.catch(function(err) {
			done(err);
		});
	}
}

module.exports = tests;
