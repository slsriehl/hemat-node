
const chai = require('chai');
const chaiHTTP = require('chai-http');
const chaiCheerio = require('chai-cheerio');
const cheerio = require('cheerio');
const server = require('../../../server');
 
const util = require('util');
chai.use(chaiHTTP);
chai.use(chaiCheerio);

const responseStatus = require('../../helpers/response-status').getResponseStatus;

const headerNotSignedIn = require('../../helpers/header/pages-get').notSignedIn;

const scriptHelper = require('../../helpers/scripts-loop').scriptReverse;

const should = chai.should();
//Nightmare.Promise = Promise;
//const htmlElementStringify = require('html-element-stringify');

const tests = {
	giBx: function(done) {
		const pathTo = '/gi-path/gi-bx';
		const scripts = [
			"/json/json-gi.js",
			"/js/gi-path/gi-scripts.js",
			"/js/surg-path/ihc-scripts.js"
		];
		return chai.request(server)
    .get(pathTo)
		.set('Cookie', 'connect.sid=s%3A-UQEXCuRToxObWKYDYwJ4j5-0fEpWphk.kTW4ey%2Fxy4s9fOSA9bd%2FgTrMWX2cszRvEc9nEALjvZU')
    .then(function(res) {
      //console.log(util.inspect(res.res, {depth: null}));
      $ = responseStatus(res);
			headerNotSignedIn();
			$('#you-should-sign-up').should.exist;

			//check for page modals and other partials
			$('#modal-1').should.exist;
			$('#grossfixer').should.exist;
			$('#IHCbox').should.exist;
			$('#combined-report').should.exist;
			$('#new-case-reference').should.exist;
			$('.individual-report-btn-box').should.not.exist;

			//check for scripts
			scriptHelper(scripts, true);

			//text panel
			$('#writeReport').should.exist;
			$('#outPut-2').should.exist;
			$('#outPut-2').next().should.have.data('clipboardTarget', '#outPut-2');
			$('#outPut-3').should.exist;
			$('#outPut-3').next().should.have.data('clipboardTarget', '#outPut-3');
			$('#outPut-4').should.exist;
			$('#outPut-4').next().should.have.data('clipboardTarget', '#outPut-4');

		})
		.then(function() {
			done();
		})
		.catch(function(err) {
			done(err);
		});
	},
	liverBx: function(done) {
		const pathTo = '/gi-path/liver-bx';
		const scripts = [
			"/json/json-liver.js",
			"/js/gi-path/liver-scripts.js",
			"/js/surg-path/ihc-scripts.js"
		];
		chai.request(server)
    .get(pathTo)
		.set('Cookie', 'connect.sid=s%3A-UQEXCuRToxObWKYDYwJ4j5-0fEpWphk.kTW4ey%2Fxy4s9fOSA9bd%2FgTrMWX2cszRvEc9nEALjvZU')
    .then(function(res) {
			//console.log(res);
      $ = responseStatus(res);
			//check for header and not signed in message
			headerNotSignedIn();
			$('#access-denied').should.exist;

			//check for liver-bx modals
			$('#modal-1').should.not.exist;
			$('#IHCbox').should.not.exist;
			$('#portal').should.not.exist;
			$('#lobule').should.not.exist;
			$('#combined-report').should.not.exist;
			$('#new-case-reference').should.not.exist;
			$('.individual-report-btn-box').should.not.exist;

			//scripts
			scriptHelper(scripts, false);

			//text boxes should not render
			$('#writeReport').should.not.exist;
			$('#Reset').should.not.exist;
			$('#outPut-1').should.not.exist;
			$('#outPut-2').should.not.exist;
			$('#outPut-3').should.not.exist;
			$('#outPut-4').should.not.exist;
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
