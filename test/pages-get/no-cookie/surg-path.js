const chai = require('chai');
const chaiHTTP = require('chai-http');
const chaiCheerio = require('chai-cheerio');
const cheerio = require('cheerio');
const server = require('../../../server');
const Promise = require('bluebird');
const util = require('util');
chai.use(chaiHTTP);
chai.use(chaiCheerio);

const responseStatus = require('../../helpers/response-status').getResponseStatus;

const headerNotSignedIn = require('../../helpers/header/pages-get').notSignedIn;

const scriptHelper = require('../../helpers/scripts-loop').scriptReverse;

const cssHelper = require('../../helpers/scripts-loop').cssReverse;

const should = chai.should();

const tests = {
	ihc: function(done) {
		//page should not load without login
		const pathTo = "/surg-path/ihc-table";
		const scripts = [
			"/js/surg-path/ihc-scripts.js"
		];
		chai.request(server)
    .get(pathTo)
    .then(function(res) {
			//verify that the response is 200 and populate the dom with cheerio on return
			$ = responseStatus(res);

			//check that page scripts don't load
			scriptHelper(scripts, false);

			//check for header and not signed in message
			headerNotSignedIn();
			//the access denied message should populate the message box
			$('#access-denied').should.exist;

			//check that page modals & partials don't exist
			$('#flipFlop').should.not.exist;
			$('#addNewInterp').should.not.exist;
			$('#new-case-reference').should.not.exist;
			$('.individual-report-btn-box').should.not.exist;
			$('#caseRefDiv').should.not.exist;

			//check that text boxes & buttons don't render
			$('#ihcwrite').should.not.exist;
			$('#Reset').should.not.exist;
			$('#outPut-2').should.not.exist;
			//$('outPut-2').next().should.have.data('clipboardTarget', '#outPut-2')

			return Promise.resolve(true);
		})
		.then(function(result) {
			done();
		})
		.catch(function(err) {
			done(err);
		});
	},
	breastFixation: function(done) {
		//page should load but without login
		const pathTo = "/surg-path/fixation";
		const scripts = [
			"/js/surg-path/fixation-scripts.js"
		];
		chai.request(server)
    .get(pathTo)
    .then(function(res) {
			$ = responseStatus(res);

			//check that page scripts load
			scriptHelper(scripts, true);

			//check for header and you should sign up message
			headerNotSignedIn();
			$('#you-should-sign-up').should.exist;

			//check that page modals & partials exist or don't since not logged in
			$('#flipFlop').should.exist;
			$('#new-case-reference').should.exist;
			$('.individual-report-btn-box').should.not.exist;
			$('#caseRefDiv').should.not.exist;

			//check that text boxes & buttons render
			$('#writeReport').should.exist;
			$('.standard-button-box > :nth-child(2) > :first-child').should.have.data('toggle', 'popover');
			$('.standard-button-box > :nth-child(2) > :first-child').should.have.data('clipboardTarget', '#outPut-1');
			$('#Reset').should.exist;
			$('.report-button-box').should.not.exist;
			$('#outPut-1').should.exist;

			return Promise.resolve(true);
		})
		.then(function(result) {
			done();
		})
		.catch(function(err) {
			done(err);
		});
	},
	snippets: function(done) {
		//page should not load without login
		const pathTo = "/surg-path/snippets";
		const scripts = [
			"/vendor/tag-it/js/tag-it.min.js",
			"/vendor/he/he.min.js",
			"/js/surg-path/snippets-scripts.js"
		];
		const stylesheets = [
			"/vendor/tag-it/css/jquery.tagit.css",
			"/vendor/tag-it/css/tagit.ui-zendesk.css"
		];
		chai.request(server)
		.get(pathTo)
		.then(function(res) {
			//verify that the response is 200 and populate the dom with cheerio on return
			$ = responseStatus(res);

			//check that page scripts don't load
			scriptHelper(scripts, false);
			cssHelper(stylesheets, false);

			//check for header and not signed in message
			headerNotSignedIn();
			//the access denied message should populate the message box
			$('#access-denied').should.exist;

			//check that page modals & partials don't exist
			$('#combined-report').should.not.exist;
			$('#addnew').should.not.exist;
			$('#caseRefDiv').should.not.exist;
			$('.individual-report-btn-box').should.not.exist;

			//check that text boxes & buttons don't render
			$('.searchresults').should.not.exist;
			$('#saveAsSnippet').should.not.exist;
			$('#writeReport').should.not.exist;
			$('#user-holder').should.not.exist;
			$('#class-holder').should.not.exist;
			$('#keyword-holder').should.not.exist;
			$('#entry_id-holder').should.not.exist;
			$('#outPut-1').should.not.exist;
			//$('#outPut-1').next().should.have.data('clipboardTarget', '#outPut-1');

			return Promise.resolve(true);
		})
		.then(function(result) {
			done();
		})
		.catch(function(err) {
			done(err);
		});
	}
}

module.exports = tests;
