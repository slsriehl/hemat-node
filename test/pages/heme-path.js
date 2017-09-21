//require('mocha-generators').install();
//require('jsdom-global')();
//const Nightmare = require('nightmare');
//const jQuery = require('jquery');
//const Zombie = require('zombie');
//const jQuery = require('jquery');
const chai = require('chai');
//const chaiDOM = require('chai-dom');
const chaiHTTP = require('chai-http');
global.$ = global.jQuery = require('jquery');
const cheerio = require('cheerio');
// const jsdom = require('jsdom');
// const {JSDOM} = jsdom;
//const $ = require('jquery');
const server = require('../../server');
const Promise = require('bluebird');
const util = require('util');
//const chaiJQuery = require('chai-jquery');
//chai.use(chaiJQuery);
const chaiCheerio = require('chai-cheerio');
chai.use(chaiHTTP);
//chai.use(chaiDOM);
chai.use(chaiCheerio);

const should = chai.should();
//Nightmare.Promise = Promise;
//const htmlElementStringify = require('html-element-stringify');

const tests = {
	hemeDiffNoCookie: function(done) {
		const pathTo = '/heme-path/heme-diff';
		return chai.request(server)
    .get(pathTo)
    .then(function(res) {
      console.log(util.inspect(res.res, {depth: null}));
      res.should.have.status(200);
      res.should.be.html;
			let resString = JSON.stringify(res.res.text)
			//console.log(resString);
			$ = cheerio.load(res.res.text);
			$('#sign-up').should.exist;
			$('#log-in').should.exist;
			$('#you-should-sign-up').find('.message-item span').should.have.html('<a href="/user/signup">Sign up</a> to save, edit, and PDF your reports and access more resources.');
			//add that more elements on the page specific to heme diff should exist
			$('#meta_pct').should.exist;
			$('.neblast:first-child').find('small').should.have.text('Non-erythroid blast%');
			//text panel
			$('#printDiff').should.exist;
			$('#diffOut').should.exist;
			$('#Reset').should.exist;
			$('script')[9].should.exist.and.have.attr('src', '/js/commonscripts.js');
			// $('#printDiff').next().should.have.$attr('data-toggle', 'popover')
			// .and.should.have.$data('placement', 'top')
			// .and.should.have.$data('clipboard-target', '#diffOut');
		})
		.then(function() {
			done();
		})
		.catch(function(err) {
			console.log(util.inspect(err));
		});
	},
	counterNoCookie: function(done) {
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
			$('#sign-up').should.exist;
			$('#log-in').should.exist;
			$('#you-should-sign-up').find('.message-item span').should.have.$html('<a href="/user/signup">Sign up</a> to save, edit, and PDF your reports and access more resources.');
			//add that more elements on the page specific to heme diff should exist
			//text panel
			$('#box3').should.exist;
			$('#box7_2').should.exist;
			$('#box13').should.exist;
			$('#printDiff').should.exist;
			$('#diffOut').should.exist;
			$('#Reset').should.exist;
    })
		.then(function() {
			done();
		})
		.catch(function(err) {
			console.log(util.inspect(err));
		});
	},
	pbSmearsNoCookie: function(done) {
		// const pathTo = '/heme-path/pb-smears';
		// chai.request(server)
    // .get(pathTo)
    // .then(function(res) {
		// 	//console.log(res);
    //   res.should.have.status(200);
    //   res.should.be.html;
		// 	let resString = JSON.stringify(res.res.text)
		// 	//console.log(resString);
		// 	$ = cheerio.load(res.res.text);
		// 	$('#sign-up').should.exist;
		// 	$('#log-in').should.exist;
		// 	$('#you-should-sign-up').find('.message-item span').should.have.$html('<a href="/user/signup">Sign up</a> to save, edit, and PDF your reports and access more resources.');
		// 	//add that more elements on the page specific to heme diff should exist
		// 	//text panel
		// 	$('#box3').should.exist;
		// 	$('#box7_2').should.exist;
		// 	$('#box13').should.exist;
		// 	$('#printDiff').should.exist;
		// 	$('#diffOut').should.exist;
		// 	$('#Reset').should.exist;
    // })
		// .then(function() {
		// 	done();
		// })
		// .catch(function(err) {
		// 	console.log(util.inspect(err));
		// });
	}
}

module.exports = tests;
