
const chai = require('chai');
const chaiHTTP = require('chai-http');
const chaiCheerio = require('chai-cheerio');
//const cheerio = require('cheerio');


const server = require('../../server');
//const Promise = require('bluebird');
const util = require('util');
chai.use(chaiHTTP);
chai.use(chaiCheerio);

const responseStatus = require('./response-status').getResponseStatus;

const headerHelpers = require('./header/pages-get');

const should = chai.should();
//Nightmare.Promise = Promise;
//const htmlElementStringify = require('html-element-stringify');

const scriptHelper = require('./scripts-loop').scriptReverse;

const helpers = {
	failPromise: function(pathTo, scripts, done) {
		return chai.request(server)
    .get(pathTo)
    .then(function(res) {
      //console.log(util.inspect(res.res, {depth: null}));
			$ = responseStatus(res);
			headerHelpers.notSignedIn();
			helpers.notSignedIn(scripts);
			return Promise.resolve(true);
		})
		.then(function(value) {
			done();
		})
		.catch(function(err) {
			console.log(util.inspect(err));
		});
	},
	wrongPromise: function(pathTo, scripts, done) {
		return chai.request(server)
		.get(pathTo)
		.set('Cookie', 'connect.sid=s%3A-UQEXCuRToxObWKYDYwJ4j5-0fEpWphk.kTW4ey%2Fxy4s9fOSA9bd%2FgTrMWX2cszRvEc9nEALjvZU')
		.then(function(res) {
			//console.log(util.inspect(res.res, {depth: null}));
			$ = responseStatus(res);
			headerHelpers.notSignedIn();
			helpers.notSignedIn(scripts);
			return Promise.resolve(true);
		})
		.then(function(value) {
			done();
		})
		.catch(function(err) {
			console.log(util.inspect(err));
		});
	},
	succeedPromise: function(pathTo, scripts, done) {
		return chai.request(server)
    .get(pathTo)
		.set('Cookie', 'connect.sid=s%3A-UQEXCuRToxObWKYDYwJ4j5-0fEpWphk.kTW4ey%2Fxy4s9fOSA9bd%2FgTrMWX2cszRvEc9nEALjvZU')
    .then(function(res) {
      //console.log(util.inspect(res.res, {depth: null}));
			$ = responseStatus(res);
			headerHelpers.signedIn();
			helpers.signedIn(scripts);
			return Promise.resolve(true);
		})
		.then(function(value) {
			done();
		})
		.catch(function(err) {
			console.log(util.inspect(err));
		});
	},
	notSignedIn: function(scripts) {
		$('#access-denied').should.exist;
		//check for page modals
		$('#flipFlop').should.not.exist;
		$('#combined-report').should.not.exist;
		$('#new-case-reference').should.not.exist;
		$('.individual-report-btn-box').should.not.exist;
		//check for scripts
		scriptHelper(scripts, false);
		//cap footer
		$('#writeReport').should.not.exist;
		//$('.button-box:nth-child(2)').find('small').should.have.data('clipboardTarget', '#outPut-1');
		$('.button-box:nth-child(2)').find('small').should.not.exist;
		$('#Reset').should.not.exist;
		$('#outPut-1').should.not.exist;
		return;
	},
	signedIn: function(scripts) {
		$('#access-denied').should.not.exist;
		//check for page modals
		$('#flipFlop').should.exist;
		$('#combined-report').should.not.exist;
		$('#new-case-reference').should.exist;
		$('.individual-report-btn-box').should.exist;
		//check for scripts
		scriptHelper(scripts, true);
		//cap footer
		$('#writeReport').should.exist;
		$('.button-box > :first-child > :nth-child(2)').find('small').should.have.data('clipboardTarget', '#outPut-1');
		$('#Reset').should.exist;
		$('#outPut-1').should.exist;
		return;
	},
}

module.exports = helpers;
