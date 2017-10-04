
const chai = require('chai');
const chaiHTTP = require('chai-http');
const chaiCheerio = require('chai-cheerio');
const cheerio = require('cheerio');
//
// const server = require('../../server');
const app = require('../../app');
const Promise = require('bluebird');
const util = require('util');
chai.use(chaiHTTP);
chai.use(chaiCheerio);

const should = chai.should();

const responseStatus = require('../helpers/response-status').getResponseStatus;

const scriptHelper = require('../helpers/scripts-loop');

const header = require('../helpers/header/user');

const pathTo = '/';

const scripts = [
	'https://platform.twitter.com/widgets.js',
	'/vendor/jquery/js/jquery.min.js',
	'/vendor/jquery/js/jquery-ui.min.js',
	'/vendor/moment/moment.min.js',
	'/vendor/tether/tether.min.js',
	'/vendor/bootstrap/js/bootstrap.min.js',
	'/vendor/jquery/js/jquery.alphanum.min.js',
	'/vendor/jquery/js/jquery.validate.min.js',
	'/vendor/bootstrap/js/bootstrap-datetimepicker.min.js',
	'/vendor/clipboard/clipboard.min.js',
	'/js/commonscripts.js'
];

const stylesheets = [
	'/img/hg-favicon.ico',
	'/vendor/bootstrap/css/bootstrap.min.css',
	'/vendor/bootstrap/css/bootstrap-datetimepicker.min.css',
	'/vendor/font-awesome/css/font-awesome.min.css',
	'/vendor/datatables/css/dataTables.bootstrap4.css',
	'/vendor/jquery/css/themes/smoothness/jquery-ui.min.css',
	'/css/sb-admin.css',
	'/css/hg-base.css'
];

const tests = {
	renderIndexNoCookie: function(done) {
		let server = app.listen(3000, function() {
			console.log('listening');
		});
		const pathTo = '/';
		const scripts = [
			'https://platform.twitter.com/widgets.js',
			'/vendor/jquery/js/jquery.min.js',
			'/vendor/jquery/js/jquery-ui.min.js',
			'/vendor/moment/moment.min.js',
			'/vendor/tether/tether.min.js',
			'/vendor/bootstrap/js/bootstrap.min.js',
			'/vendor/jquery/js/jquery.alphanum.min.js',
			'/vendor/jquery/js/jquery.validate.min.js',
			'/vendor/bootstrap/js/bootstrap-datetimepicker.min.js',
			'/vendor/clipboard/clipboard.min.js',
			'/js/commonscripts.js'
		];
		const stylesheets = [
			'/img/hg-favicon.ico',
			'/vendor/bootstrap/css/bootstrap.min.css',
			'/vendor/bootstrap/css/bootstrap-datetimepicker.min.css',
			'/vendor/font-awesome/css/font-awesome.min.css',
			'/vendor/datatables/css/dataTables.bootstrap4.css',
			'/vendor/jquery/css/themes/smoothness/jquery-ui.min.css',
			'/css/sb-admin.css',
			'/css/hg-base.css'
		];
		return chai.request(server)
    .get(pathTo)
    .then(function(res) {
      $ = responseStatus(res);
			console.log(res.res.text);
			header.notSignedIn();
			$('#you-should-sign-up').should.not.exist;

			//check for scripts
			scriptHelper.scriptReverse(scripts, true);
			scriptHelper.cssReverse(stylesheets, true);
			server.close();
			done();
		})
		.catch(function(err) {
			server.close();
			done(err);
		});
	},
	renderIndexFalseCookie: function(done) {
		let server = app.listen(3000, function() {
			console.log('listening');
		});
		const pathTo = '/';
		const scripts = [
			'https://platform.twitter.com/widgets.js',
			'/vendor/jquery/js/jquery.min.js',
			'/vendor/jquery/js/jquery-ui.min.js',
			'/vendor/moment/moment.min.js',
			'/vendor/tether/tether.min.js',
			'/vendor/bootstrap/js/bootstrap.min.js',
			'/vendor/jquery/js/jquery.alphanum.min.js',
			'/vendor/jquery/js/jquery.validate.min.js',
			'/vendor/bootstrap/js/bootstrap-datetimepicker.min.js',
			'/vendor/clipboard/clipboard.min.js',
			'/js/commonscripts.js'
		];
		const stylesheets = [
			'/img/hg-favicon.ico',
			'/vendor/bootstrap/css/bootstrap.min.css',
			'/vendor/bootstrap/css/bootstrap-datetimepicker.min.css',
			'/vendor/font-awesome/css/font-awesome.min.css',
			'/vendor/datatables/css/dataTables.bootstrap4.css',
			'/vendor/jquery/css/themes/smoothness/jquery-ui.min.css',
			'/css/sb-admin.css',
			'/css/hg-base.css'
		];
		return chai.request(server)
    .get(pathTo)
		.set('Cookie', 'connect.sid=s%3A-UQEXCuRToxObWKYDYwJ4j5-0fEpWphk.kTW4ey%2Fxy4s9fOSA9bd%2FgTrMWX2cszRvEc9nEALjvZU')
    .then(function(res) {
      $ = responseStatus(res);
			header.notSignedIn();
			$('#you-should-sign-up').should.not.exist;

			//check for scripts
			scriptHelper.scriptReverse(scripts, true);
			scriptHelper.cssReverse(stylesheets, true);
			server.close();
			done();
		})
		.catch(function(err) {
			server.close();
			done(err);
		});
	}
}

module.exports = tests;
