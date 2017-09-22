
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
	giBx: function(done) {
		const pathTo = '/gi-path/gi-bx';
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

			//check for page modals and other partials
			$('#modal-1').should.exist;
			$('#grossfixer').should.exist;
			$('#IHCbox').should.exist;
			$('#combined-report').should.exist;
			$('#new-case-reference').should.exist;
			$('.individual-report-btn-box').should.exist;

			//check for scripts
			$('script')[$('script').length - 1].attribs.src.should.equal("/js/surg-path/ihc-scripts.js");
			$('script')[$('script').length - 2].attribs.src.should.equal("/js/gi-path/gi-scripts.js");
			$('script')[$('script').length - 3].attribs.src.should.equal("/json/json-gi.js");

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
			console.log(util.inspect(err));
		});
	},
	liverBx: function(done) {
		const pathTo = '/gi-path/liver-bx';
		chai.request(server)
    .get(pathTo)
		.set('Cookie', 'connect.sid=s%3A-UQEXCuRToxObWKYDYwJ4j5-0fEpWphk.kTW4ey%2Fxy4s9fOSA9bd%2FgTrMWX2cszRvEc9nEALjvZU')
    .then(function(res) {
			//console.log(res);
      res.should.have.status(200);
      res.should.be.html;
			let resString = JSON.stringify(res.res.text)
			//console.log(resString);
			$ = cheerio.load(res.res.text);
			//check for header and not signed in message
			headerSignedIn();

			//check for liver-bx modals
			$('#modal-1').should.exist;
			$('#IHCbox').should.exist;
			$('#portal').should.exist;
			$('#lobule').should.exist;
			$('#combined-report').should.exist;
			$('#new-case-reference').should.exist;
			$('.individual-report-btn-box').should.exist;

			//scripts
			$('script')[$('script').length - 1].attribs.src.should.equal("/js/surg-path/ihc-scripts.js");
			$('script')[$('script').length - 2].attribs.src.should.equal("/js/gi-path/liver-scripts.js");
			$('script')[$('script').length - 3].attribs.src.should.equal("/json/json-liver.js");

			//text boxes should not render
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
	}
}

module.exports = tests;
