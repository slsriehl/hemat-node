
const chai = require('chai');
const chaiHTTP = require('chai-http');
const chaiCheerio = require('chai-cheerio');
const cheerio = require('cheerio');
const server = require('../../../server');
const Promise = require('bluebird');
const util = require('util');
chai.use(chaiHTTP);
chai.use(chaiCheerio);

const headerNotSignedIn = require('../../helpers/header').notSignedIn;

const should = chai.should();
//Nightmare.Promise = Promise;
//const htmlElementStringify = require('html-element-stringify');

const tests = {
	hemeDiff: function(done) {
		const pathTo = '/heme-path/heme-diff';
		return chai.request(server)
    .get(pathTo)
    .then(function(res) {
      //console.log(util.inspect(res.res, {depth: null}));
      res.should.have.status(200);
      res.should.be.html;
			let resString = JSON.stringify(res.res.text)
			//console.log(resString);
			$ = cheerio.load(res.res.text);
			headerNotSignedIn();
			$('#you-should-sign-up').should.exist;
			//check for page modals
			$('#howto').should.exist;
			$('#switch').should.exist;
			$('#combined-report').should.not.exist;
			$('#new-case-reference').should.exist;
			$('.individual-report-btn-box').should.not.exist;
			//check for scripts
			$('script')[$('script').length - 1].attribs.src.should.equal('/js/heme-path/hemediff-scripts.js');
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
			console.log(util.inspect(err));
		});
	},
	counter: function(done) {
		const pathTo = '/heme-path/counter';
		chai.request(server)
    .get(pathTo)
    .then(function(res) {
			//console.log(res);
      res.should.have.status(200);
      res.should.be.html;
			let resString = JSON.stringify(res.res.text)
			//console.log(resString);
			$ = cheerio.load(res.res.text);
			headerNotSignedIn();
			$('#you-should-sign-up').should.exist;
			//modals on the page
			$('#flipFlop').should.exist;
			$('#combined-report').should.not.exist;
			$('#new-case-reference').should.exist;
			$('.individual-report-btn-box').should.not.exist;
			//scripts on the page
			$('script')[$('script').length - 1].attribs.src.should.equal('/js/heme-path/counter-scripts.js');
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
			console.log(util.inspect(err));
		});
	},
	pbSmears: function(done) {
		const pathTo = '/heme-path/pb-smears';
		chai.request(server)
    .get(pathTo)
    .then(function(res) {
			//console.log(res);
      res.should.have.status(200);
      res.should.be.html;
			let resString = JSON.stringify(res.res.text)
			//console.log(resString);
			$ = cheerio.load(res.res.text);
			headerNotSignedIn();
			$('#you-should-sign-up').should.exist;

			//check for modals on the page
			$('#cbchelp').should.exist;
			$('#combined-report').should.exist;
			$('#new-case-reference').should.exist;
			$('.individual-report-btn-box').should.not.exist;

			//check for scripts
			$('script')[$('script').length - 1].attribs.src.should.equal("/js/heme-path/pb-scripts.js");
			$('script')[$('script').length - 2].attribs.src.should.equal("/js/heme-path/pb-rules.js");
			$('script')[$('script').length - 3].attribs.src.should.equal("/json/json-pbsmears.js");

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
			console.log(util.inspect(err));
		});
	},
	boneMarrow: function(done) {
		const pathTo = '/heme-path/bone-marrow';
		chai.request(server)
    .get(pathTo)
    .then(function(res) {
			//console.log(res);
      res.should.have.status(200);
      res.should.be.html;
			let resString = JSON.stringify(res.res.text)
			//console.log(resString);
			$ = cheerio.load(res.res.text);
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
			$('script')[$('script').length - 1].attribs.src.should.equal("/js/surg-path/ihc-scripts.js");
			$('script')[$('script').length - 2].attribs.src.should.equal("/js/heme-path/pb-rules.js");
			$('script')[$('script').length - 3].attribs.src.should.equal("/js/heme-path/bm-scripts.js");
			$('script')[$('script').length - 4].attribs.src.should.equal("/js/heme-path/bm-diff-scripts.js");
			$('script')[$('script').length - 5].attribs.src.should.equal("/json/json-bonemarrow.js");

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
			console.log(util.inspect(err));
		});
	},
	dlbcl: function(done) {
		const pathTo = '/heme-path/dlbcl';
		chai.request(server)
    .get(pathTo)
    .then(function(res) {
			//console.log(res);
      res.should.have.status(200);
      res.should.be.html;
			let resString = JSON.stringify(res.res.text)
			//console.log(resString);
			$ = cheerio.load(res.res.text);
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
			$('script')[$('script').length - 1].attribs.src.should.not.equal("/js/heme-path/dlbcl-scripts.js");
			//text boxes should not render
			$('#writeReport').should.not.exist;
			$('#Reset').should.not.exist;
			$('#outPut-1').should.not.exist;
		})
		.then(function() {
			done();
		})
		.catch(function(err) {
			console.log(util.inspect(err));
		});
	}
}

module.exports = tests;
