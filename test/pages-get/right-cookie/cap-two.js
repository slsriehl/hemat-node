
const succeedPromise = require('../../helpers/cap').succeedPromise;

const tests = {
	breast: function(done) {
		const pathTo = '/cap/breast';
		const scripts = [
			"/js/cap/breast-scripts.js"
		];
		succeedPromise(pathTo, scripts, done);
	},
	cervixLeep: function(done) {
		const pathTo = '/cap/cervix-leep';
		const scripts = [
			"/js/cap/cxleep-scripts.js"
		];
		succeedPromise(pathTo, scripts, done);
	},
	cervixRx: function(done) {
		const pathTo = '/cap/cervix-rx';
		const scripts = [
			"/js/cap/cxrx-scripts.js"
		];
		succeedPromise(pathTo, scripts, done);
	},
	colonPolyp: function(done) {
		const pathTo = '/cap/colon-polyp';
		const scripts = [
			"/js/cap/colonpolyp-scripts.js",
		];
		succeedPromise(pathTo, scripts, done);
	},
	colonRx: function(done) {
		const pathTo = '/cap/colon-rx';
		const scripts = [
			"/js/cap/colonrx-scripts.js"
		];
		succeedPromise(pathTo, scripts, done);
	},
	endometriumT: function(done) {
		const pathTo = '/cap/endometrium-t';
		const scripts = [
			"/js/cap/endometrium-scripts.js"
		];
		succeedPromise(pathTo, scripts, done);
	},
	esophagus: function(done) {
		const pathTo = '/cap/esophagus';
		const scripts = [
			"/js/cap/esophagus-scripts.js"
		];
		succeedPromise(pathTo, scripts, done);
	},
	kidneyRx: function(done) {
		const pathTo = '/cap/kidney-rx';
		const scripts = [
			"/js/cap/kidney-scripts.js"
		];
		succeedPromise(pathTo, scripts, done);
	},
	lungRx: function(done) {
		const pathTo = '/cap/lung-rx';
		const scripts = [
			"/js/cap/lung-scripts.js"
		];
		succeedPromise(pathTo, scripts, done);
	},
	melanoma: function(done) {
		const pathTo = '/cap/melanoma';
		const scripts = [
			"/js/cap/melanoma-scripts.js"
		];
		succeedPromise(pathTo, scripts, done);
	},
	plasmacytoma: function(done) {
		const pathTo = '/cap/plasmacytoma';
		const scripts = [
			"/js/cap/plasmacytoma-scripts.js"
		];
		succeedPromise(pathTo, scripts, done);
	},
	pancExoT: function(done) {
		const pathTo = '/cap/pancexo-t';
		const scripts = [
			"/js/cap/pancexo-scripts.js"
		];
		succeedPromise(pathTo, scripts, done);
	},
	thyroidT: function(done) {
		const pathTo = '/cap/thyroid-t';
		const scripts = [
			"/js/cap/thyroid-scripts.js"
		];
		succeedPromise(pathTo, scripts, done);
	},
	salivaryT: function(done) {
		const pathTo = '/cap/salivary-t';
		const scripts = [
			"/js/cap/salivary-scripts.js"
		];
		succeedPromise(pathTo, scripts, done);
	},
	stomach: function(done) {
		const pathTo = '/cap/stomach';
		const scripts = [
			"/js/cap/stomach-scripts.js"
		];
		succeedPromise(pathTo, scripts, done);
	},
}

module.exports = tests;
