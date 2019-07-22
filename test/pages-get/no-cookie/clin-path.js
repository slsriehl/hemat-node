
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


const tests = {
	bal: function(done) {
		const pathTo = '/clin-path/bal';
		const scripts = [
			"/json/json-bal.js",
			"/js/clin-path/bal-scripts.js"
		];
		return chai.request(server)
    .get(pathTo)
    .then(function(res) {
      //console.log(util.inspect(res.res, {depth: null}));
      $ = responseStatus(res);
			headerNotSignedIn();
			$('#you-should-sign-up').should.exist;
			//check for page modals
			$('#flipFlop').should.exist;
			$('#alert-modal').should.exist;
			$('#combined-report').should.exist;
			$('#new-case-reference').should.exist;
			$('.individual-report-btn-box').should.not.exist;
			//check for scripts
			scriptHelper(scripts, true);

			//text panel
			$('#done').should.exist;
			$('#Reset').should.exist;
			$('#outPut-1').should.exist;
			$('#outPut-1').next().should.have.data('clipboardTarget', '#outPut-1');
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
	csf: function(done) {
		const pathTo = '/clin-path/csf';
		const scripts = [
			"/json/json-csf.js",
			"/js/clin-path/csf-scripts.js"
		];
		return chai.request(server)
    .get(pathTo)
    .then(function(res) {
      //console.log(util.inspect(res.res, {depth: null}));
      $ = responseStatus(res);
			headerNotSignedIn();
			$('#you-should-sign-up').should.exist;
			//check for page modals
			$('#flipFlop').should.exist;
			$('#combined-report').should.exist;
			$('#new-case-reference').should.exist;
			$('.individual-report-btn-box').should.not.exist;
			//check for scripts
			scriptHelper(scripts, true);

			//text panel
			$('#writeReport').should.exist;
			$('#Reset').should.exist;
			$('#outPut-1').should.exist;
			$('#outPut-1').next().should.have.data('clipboardTarget', '#outPut-1');
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
	antibodyId: function(done) {
		const pathTo = '/clin-path/antibody-id';
		const scripts = [
			"/json/json-abid.js",
			"/js/clin-path/antibody-scripts.js"
		];
		return chai.request(server)
    .get(pathTo)
    .then(function(res) {
      //console.log(util.inspect(res.res, {depth: null}));
      $ = responseStatus(res);
			headerNotSignedIn();
			$('#you-should-sign-up').should.exist;
			//check for page modals
			$('#flipFlop').should.exist;
			$('#combined-report').should.not.exist;
			$('#new-case-reference').should.exist;
			$('.individual-report-btn-box').should.not.exist;
			//check for scripts
			scriptHelper(scripts, true);

			//text panel
			$('#writeReport').should.exist;
			$('#Reset').should.exist;
			$('#outPut-1').should.exist;
			$('#writeReport').next().find('small').should.have.data('clipboardTarget', '#outPut-1');
		})
		.then(function() {
			done();
		})
		.catch(function(err) {
			done(err);
		});
	},
	txRxn: function(done) {
		const pathTo = '/clin-path/tx-rxn';
		const scripts = [
			"/json/json-txrxn.js",
			"/js/clin-path/txrxn-scripts.js"
		];
		return chai.request(server)
		.get(pathTo)
		.then(function(res) {
			//console.log(util.inspect(res.res, {depth: null}));
			$ = responseStatus(res);
			headerNotSignedIn();
			$('#you-should-sign-up').should.exist;
			//check for page modals
			$('#flipFlop').should.exist;
			$('#combined-report').should.not.exist;
			$('#new-case-reference').should.exist;
			$('.individual-report-btn-box').should.not.exist;
			//check for scripts
			scriptHelper(scripts, true);

			//text panel
			$('#writeReport').should.exist;
			$('#Reset').should.exist;
			$('#outPut-1').should.exist;
			$('#writeReport').next().find('small').should.have.data('clipboardTarget', '#outPut-1');
		})
		.then(function() {
			done();
		})
		.catch(function(err) {
			done(err);
		});
	},
}

module.exports = tests;
