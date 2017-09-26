
const failPromise = require('../../helpers/cap').failPromise;

const tests = {
	breast: function(done) {
		const pathTo = '/cap/breast';
		const scripts = [
			"/js/cap/breast-scripts.js"
		];
		failPromise(pathTo, scripts, done);
	},
	cervixLeep: function(done) {
		const pathTo = '/cap/cervix-leep';
		const scripts = [
			"/js/cap/cxleep-scripts.js"
		];
		failPromise(pathTo, scripts, done);
	},
	cervixRx: function(done) {
		const pathTo = '/cap/cervix-rx';
		const scripts = [
			"/js/cap/cxrx-scripts.js"
		];
		failPromise(pathTo, scripts, done);
	},
	colonPolyp: function(done) {
		const pathTo = '/cap/colon-polyp';
		const scripts = [
			"/js/cap/colonpolyp-scripts.js",
		];
		failPromise(pathTo, scripts, done);
	},
	colonRx: function(done) {
		const pathTo = '/cap/colon-rx';
		const scripts = [
			"/js/cap/colonrx-scripts.js"
		];
		failPromise(pathTo, scripts, done);
	},
	endometriumT: function(done) {
		const pathTo = '/cap/endometrium-t';
		const scripts = [
			"/js/cap/endometrium-scripts.js"
		];
		failPromise(pathTo, scripts, done);
	},
	esophagus: function(done) {
		const pathTo = '/cap/esophagus';
		const scripts = [
			"/js/cap/esophagus-scripts.js"
		];
		failPromise(pathTo, scripts, done);
	},
	kidneyRx: function(done) {
		const pathTo = '/cap/kidney-rx';
		const scripts = [
			"/js/cap/kidney-scripts.js"
		];
		failPromise(pathTo, scripts, done);
	},
	lungRx: function(done) {
		const pathTo = '/cap/lung-rx';
		const scripts = [
			"/js/cap/lung-scripts.js"
		];
		failPromise(pathTo, scripts, done);
	},
	melanoma: function(done) {
		const pathTo = '/cap/melanoma';
		const scripts = [
			"/js/cap/melanoma-scripts.js"
		];
		failPromise(pathTo, scripts, done);
	},
	plasmacytoma: function(done) {
		const pathTo = '/cap/plasmacytoma';
		const scripts = [
			"/js/cap/plasmacytoma-scripts.js"
		];
		failPromise(pathTo, scripts, done);
	},
	pancExoT: function(done) {
		const pathTo = '/cap/pancexo-t';
		const scripts = [
			"/js/cap/pancexo-scripts.js"
		];
		failPromise(pathTo, scripts, done);
	},
	thyroidT: function(done) {
		const pathTo = '/cap/thyroid-t';
		const scripts = [
			"/js/cap/thyroid-scripts.js"
		];
		failPromise(pathTo, scripts, done);
	},
	salivaryT: function(done) {
		const pathTo = '/cap/salivary-t';
		const scripts = [
			"/js/cap/salivary-scripts.js"
		];
		failPromise(pathTo, scripts, done);
	},
	stomach: function(done) {
		const pathTo = '/cap/stomach';
		const scripts = [
			"/js/cap/stomach-scripts.js"
		];
		failPromise(pathTo, scripts, done);
	},
}

module.exports = tests;
