
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
	hemeDiff: function(done) {
		const pathTo = '/heme-path/heme-diff';
		const scripts = [
			"/js/heme-path/hemediff-scripts.js"
		];
		return chai.request(server)
    .get(pathTo)
    .then(function(res) {
      //console.log(util.inspect(res.res, {depth: null}));
      $ = responseStatus(res);
			headerNotSignedIn();
			$('#you-should-sign-up').should.exist;
			//check for page modals
			$('#howto').should.exist;
			$('#switch').should.exist;
			$('#combined-report').should.not.exist;
			$('#new-case-reference').should.exist;
			$('.individual-report-btn-box').should.not.exist;
			//check for scripts
			scriptHelper(scripts, true);
			//text panel
			$('#printDiff').should.exist;
			$('#diffOut').should.exist;
			$('#Reset').should.exist;
			$('#printDiff').next().find('small').should.have.data('toggle', 'popover');
			$('#printDiff').next().find('small').should.have.data('placement', 'top');
			$('#printDiff').next().find('small').should.have.data('clipboardTarget', '#diffOut');
		})
		.then(function() {
			done();
		})
		.catch(function(err) {
			done(err);
		});
	},
	counter: function(done) {
		const pathTo = '/heme-path/counter';
		const scripts = [
			"/js/heme-path/counter-scripts.js"
		];
		chai.request(server)
    .get(pathTo)
    .then(function(res) {
			//console.log(res);
      $ = responseStatus(res);
			headerNotSignedIn();
			$('#you-should-sign-up').should.exist;
			//modals on the page
			$('#flipFlop').should.exist;
			$('#combined-report').should.not.exist;
			$('#new-case-reference').should.exist;
			$('.individual-report-btn-box').should.not.exist;
			//scripts on the page
			scriptHelper(scripts, true);
			//text panel
			$('#printDiff').should.exist;
			$('#diffOut').should.exist;
			$('#Reset').should.exist;
			$('#printDiff').next().find('small').should.have.data('toggle', 'popover');
			$('#printDiff').next().find('small').should.have.data('placement', 'top');
			$('#printDiff').next().find('small').should.have.data('clipboardTarget', '#diffOut');
    })
		.then(function() {
			done();
		})
		.catch(function(err) {
			done(err);
		});
	},
	pbSmears: function(done) {
		const pathTo = '/heme-path/pb-smears';
		const scripts = [
			"/json/json-pbsmears.js",
			"/js/heme-path/pb-rules.js",
			"/js/heme-path/pb-scripts.js"
		];
		chai.request(server)
    .get(pathTo)
    .then(function(res) {
			//console.log(res);
      $ = responseStatus(res);
			headerNotSignedIn();
			$('#you-should-sign-up').should.exist;

			//check for modals on the page
			$('#cbchelp').should.exist;
			$('#combined-report').should.exist;
			$('#new-case-reference').should.exist;
			$('.individual-report-btn-box').should.not.exist;

			//check for scripts
			scriptHelper(scripts, true);

			//text panel
			$('#writeReport').should.exist;
			$('#mysisReport').should.exist;
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
	boneMarrow: function(done) {
		const pathTo = '/heme-path/bone-marrow';
		const scripts = [
			"/json/json-bonemarrow.js",
			"/js/heme-path/bm-diff-scripts.js",
			"/js/heme-path/bm-scripts.js",
			"/js/heme-path/pb-rules.js",
			"/js/surg-path/ihc-scripts.js"
		];
		chai.request(server)
    .get(pathTo)
    .then(function(res) {
			//console.log(res);
      $ = responseStatus(res);
			//check for header and not signed in message
			headerNotSignedIn();
			$('#you-should-sign-up').should.exist;
			//check for bone marrow modals
			$('#cbchelp').should.exist;
			$('#diffHelp').should.exist;
			$('#IHCbox').should.exist;
			$('#combined-report').should.exist;
			$('#new-case-reference').should.exist;
			$('.individual-report-btn-box').should.not.exist;

			//scripts
			scriptHelper(scripts, true);

			//text panel
			$('#writeReport').should.exist;
			$('#diffOut').should.exist;
			$('#diffOut').next().should.have.data('clipboardTarget', '#diffOut');
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
	dlbcl: function(done) {
		const pathTo = '/heme-path/dlbcl';
		const scripts = [
			"/js/heme-path/dlbcl-scripts.js"
		];
		chai.request(server)
    .get(pathTo)
    .then(function(res) {
			//console.log(res);
      $ = responseStatus(res);
			//check for header and not signed in message
			headerNotSignedIn();
			$('#access-denied').should.exist;

			//check for dlbcl modals
			$('#flipFlop').should.not.exist;
			$('#whomodal').should.not.exist;
			$('#combined-report').should.not.exist;
			$('#new-case-reference').should.not.exist;
			$('.individual-report-btn-box').should.not.exist;

			//scripts
			scriptHelper(scripts, false);

			//text boxes should not render
			$('#writeReport').should.not.exist;
			$('#Reset').should.not.exist;
			$('#outPut-1').should.not.exist;
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
