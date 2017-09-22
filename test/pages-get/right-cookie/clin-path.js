
const chai = require('chai');
const chaiHTTP = require('chai-http');
const chaiCheerio = require('chai-cheerio');
const cheerio = require('cheerio');
const server = require('../../../server');
const Promise = require('bluebird');
const util = require('util');
chai.use(chaiHTTP);
chai.use(chaiCheerio);

const headerSignedIn = require('../../helpers/header').signedIn;

const should = chai.should();
//Nightmare.Promise = Promise;
//const htmlElementStringify = require('html-element-stringify');

const tests = {
	bal: function(done) {
		const pathTo = '/clin-path/bal';
		return chai.request(server)
    .get(pathTo)
		.set('Cookie', 'connect.sid=s%3A-UQEXCuRToxObWKYDYwJ4j5-0fEpWphk.kTW4ey%2Fxy4s9fOSA9bd%2FgTrMWX2cszRvEc9nEALjvZU')
    .then(function(res) {
      //console.log(util.inspect(res.res, {depth: null}));
      res.should.have.status(200);
      res.should.be.html;
			let resString = JSON.stringify(res.res.text)
			//console.log(resString);
			$ = cheerio.load(res.res.text);
			headerSignedIn();
			$('#you-should-sign-up').should.not.exist;
			//check for page modals
			$('#flipFlop').should.exist;
			$('#alert-modal').should.exist;
			$('#combined-report').should.exist;
			$('#new-case-reference').should.exist;
			$('.individual-report-btn-box').should.exist;
			//check for scripts
			$('script')[$('script').length - 1].attribs.src.should.equal("/js/clin-path/bal-scripts.js");
			$('script')[$('script').length - 2].attribs.src.should.equal("/json/json-bal.js");

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
			console.log(util.inspect(err));
		});
	},
	csf: function(done) {
		const pathTo = '/clin-path/csf';
		return chai.request(server)
    .get(pathTo)
		.set('Cookie', 'connect.sid=s%3A-UQEXCuRToxObWKYDYwJ4j5-0fEpWphk.kTW4ey%2Fxy4s9fOSA9bd%2FgTrMWX2cszRvEc9nEALjvZU')
    .then(function(res) {
      //console.log(util.inspect(res.res, {depth: null}));
      res.should.have.status(200);
      res.should.be.html;
			let resString = JSON.stringify(res.res.text)
			//console.log(resString);
			$ = cheerio.load(res.res.text);
			headerSignedIn();
			$('#you-should-sign-up').should.not.exist;
			//check for page modals
			$('#flipFlop').should.exist;
			$('#combined-report').should.exist;
			$('#new-case-reference').should.exist;
			$('.individual-report-btn-box').should.exist;
			//check for scripts
			$('script')[$('script').length - 1].attribs.src.should.equal("/js/clin-path/csf-scripts.js");
			$('script')[$('script').length - 2].attribs.src.should.equal("/json/json-csf.js");

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
			console.log(util.inspect(err));
		});
	},
	antibodyId: function(done) {
		const pathTo = '/clin-path/antibody-id';
		return chai.request(server)
    .get(pathTo)
		.set('Cookie', 'connect.sid=s%3A-UQEXCuRToxObWKYDYwJ4j5-0fEpWphk.kTW4ey%2Fxy4s9fOSA9bd%2FgTrMWX2cszRvEc9nEALjvZU')
    .then(function(res) {
      //console.log(util.inspect(res.res, {depth: null}));
      res.should.have.status(200);
      res.should.be.html;
			let resString = JSON.stringify(res.res.text)
			//console.log(resString);
			$ = cheerio.load(res.res.text);
			headerSignedIn();
			$('#you-should-sign-up').should.not.exist;
			//check for page modals
			$('#flipFlop').should.exist;
			$('#combined-report').should.not.exist;
			$('#new-case-reference').should.exist;
			$('.individual-report-btn-box').should.exist;
			//check for scripts
			$('script')[$('script').length - 1].attribs.src.should.equal("/js/clin-path/antibody-scripts.js");
			$('script')[$('script').length - 2].attribs.src.should.equal("/json/json-abid.js");

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
			console.log(util.inspect(err));
		});
	},
	txRxn: function(done) {
		const pathTo = '/clin-path/tx-rxn';
		return chai.request(server)
		.get(pathTo)
		.set('Cookie', 'connect.sid=s%3A-UQEXCuRToxObWKYDYwJ4j5-0fEpWphk.kTW4ey%2Fxy4s9fOSA9bd%2FgTrMWX2cszRvEc9nEALjvZU')
		.then(function(res) {
			//console.log(util.inspect(res.res, {depth: null}));
			res.should.have.status(200);
			res.should.be.html;
			let resString = JSON.stringify(res.res.text)
			//console.log(resString);
			$ = cheerio.load(res.res.text);
			headerSignedIn();
			$('#you-should-sign-up').should.not.exist;
			//check for page modals
			$('#flipFlop').should.exist;
			$('#combined-report').should.not.exist;
			$('#new-case-reference').should.exist;
			$('.individual-report-btn-box').should.exist;
			//check for scripts
			$('script')[$('script').length - 1].attribs.src.should.equal("/js/clin-path/txrxn-scripts.js");
			$('script')[$('script').length - 2].attribs.src.should.equal("/json/json-txrxn.js");

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
			console.log(util.inspect(err));
		});
	},
}

module.exports = tests;
