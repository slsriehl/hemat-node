const chai = require('chai');
const chaiHTTP = require('chai-http');
const chaiCheerio = require('chai-cheerio');
const cheerio = require('cheerio');
const server = require('../../../server');
 
const util = require('util');
chai.use(chaiHTTP);
chai.use(chaiCheerio);

const responseStatus = require('../../helpers/response-status').getResponseStatus;

const headerSignedIn = require('../../helpers/header/pages-get').signedIn;

const scriptHelper = require('../../helpers/scripts-loop').scriptReverse;

const should = chai.should();

const tests = {
	hemeDiff: function(done) {
		const pathTo = '/heme-path/heme-diff';
		const scripts = [
			"/js/heme-path/hemediff-scripts.js"
		];
		return chai.request(server)
    .get(pathTo)
		.set('Cookie', 'connect.sid=s%3A-UQEXCuRToxObWKYDYwJ4j5-0fEpWphk.kTW4ey%2Fxy4s9fOSA9bd%2FgTrMWX2cszRvEc9nEALjvZU')
		.then(function(res) {
			//console.log(util.inspect(res.res, {depth: null}));
			$ = responseStatus(res);
			headerSignedIn();
			//check for page modals
			$('#howto').should.exist;
			$('#switch').should.exist;
			$('#combined-report').should.not.exist;
			$('#new-case-reference').should.exist;
			$('.individual-report-btn-box').should.exist;
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
		return chai.request(server)
    .get(pathTo)
		.set('Cookie', 'connect.sid=s%3A-UQEXCuRToxObWKYDYwJ4j5-0fEpWphk.kTW4ey%2Fxy4s9fOSA9bd%2FgTrMWX2cszRvEc9nEALjvZU')
		.then(function(res) {
			//console.log(res);
      $ = responseStatus(res);
			headerSignedIn();
			//modals on the page
			$('#flipFlop').should.exist;
			$('#combined-report').should.not.exist;
			$('#new-case-reference').should.exist;
			$('.individual-report-btn-box').should.exist;
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
		.set('Cookie', 'connect.sid=s%3A-UQEXCuRToxObWKYDYwJ4j5-0fEpWphk.kTW4ey%2Fxy4s9fOSA9bd%2FgTrMWX2cszRvEc9nEALjvZU')
    .then(function(res) {
			//console.log(res);
      $ = responseStatus(res);
			headerSignedIn();

			//check for modals on the page
			$('#cbchelp').should.exist;
			$('#combined-report').should.exist;
			$('#new-case-reference').should.exist;
			$('.individual-report-btn-box').should.exist;
			$('#combined-report').should.exist;
			$('#new-case-reference').should.exist;
			$('.individual-report-btn-box').should.exist;

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
		.set('Cookie', 'connect.sid=s%3A-UQEXCuRToxObWKYDYwJ4j5-0fEpWphk.kTW4ey%2Fxy4s9fOSA9bd%2FgTrMWX2cszRvEc9nEALjvZU')
    .then(function(res) {
			//console.log(res);
      $ = responseStatus(res);
			//check for header and not signed in message
			headerSignedIn();
			//check for bone marrow modals
			$('#cbchelp').should.exist;
			$('#diffHelp').should.exist;
			$('#IHCbox').should.exist;
			$('#combined-report').should.exist;
			$('#new-case-reference').should.exist;
			$('.individual-report-btn-box').should.exist;

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
		.set('Cookie', 'connect.sid=s%3A-UQEXCuRToxObWKYDYwJ4j5-0fEpWphk.kTW4ey%2Fxy4s9fOSA9bd%2FgTrMWX2cszRvEc9nEALjvZU')
    .then(function(res) {
			//console.log(res);
      $ = responseStatus(res);
			//check for header and not signed in message
			headerSignedIn();
			$('#access-denied').should.not.exist;

			//check for dlbcl modals
			$('#flipFlop').should.exist;
			$('#whomodal').should.exist;
			$('#combined-report').should.not.exist;
			$('#new-case-reference').should.exist;
			$('.individual-report-btn-box').should.exist;

			//scripts
			scriptHelper(scripts, true);

			//text boxes should render
			$('#writeReport').should.exist;
			$('#Reset').should.exist;
			$('#outPut-1').should.exist;
			$('#outPut-1').next().should.have.data('clipboardTarget', '#outPut-1');
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
