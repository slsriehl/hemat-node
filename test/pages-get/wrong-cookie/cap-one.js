
const wrongPromise = require('../../helpers/cap').wrongPromise;

const tests = {
	boneTBx: function(done) {
		const pathTo = '/cap/bone-t-bx';
		const scripts = [
			"/js/cap/bonebx-scripts.js"
		];
		wrongPromise(pathTo, scripts, done);
	},
	boneTRx: function(done) {
		const pathTo = '/cap/bone-t-rx';
		const scripts = [
			"/js/cap/bonerx-scripts.js"
		];
		wrongPromise(pathTo, scripts, done);
	},
	neuroT: function(done) {
		const pathTo = '/cap/neuro-t';
		const scripts = [
			"/js/cap/neuro-scripts.js"
		];
		wrongPromise(pathTo, scripts, done);
	},
	neuroTBio: function(done) {
		const pathTo = '/cap/neuro-t-biomarker';
		const scripts = [
			"/js/cap/cnsbio-scripts.js",
		];
		wrongPromise(pathTo, scripts, done);
	},
	pnetBx: function(done) {
		const pathTo = '/cap/pnet-bx';
		const scripts = [
			"/js/cap/pnet-scripts.js",
		];
		wrongPromise(pathTo, scripts, done);
	},
	pnetRx: function(done) {
		const pathTo = '/cap/pnet-rx';
		const scripts = [
			"/js/cap/pnetrx-scripts.js"
		];
		wrongPromise(pathTo, scripts, done);
	},
	exGonGct: function(done) {
		const pathTo = '/cap/ex-gon-gct';
		const scripts = [
			"/js/cap/exgct-scripts.js"
		];
		wrongPromise(pathTo, scripts, done);
	},
	hepatoBlast: function(done) {
		const pathTo = '/cap/hepatoblast';
		const scripts = [
			"/js/cap/hepato-scripts.js"
		];
		wrongPromise(pathTo, scripts, done);
	},
	neuroBlast: function(done) {
		const pathTo = '/cap/neuroblast';
		const scripts = [
			"/js/cap/nb-scripts.js"
		];
		wrongPromise(pathTo, scripts, done);
	},
	neuroEndT: function(done) {
		const pathTo = '/cap/neuroend-t';
		const scripts = [
			"/js/cap/net-scripts.js"
		];
		wrongPromise(pathTo, scripts, done);
	},
	ovaryT: function(done) {
		const pathTo = '/cap/ovary-t';
		const scripts = [
			"/js/cap/ovary-scripts.js"
		];
		wrongPromise(pathTo, scripts, done);
	},
	wilmsT: function(done) {
		const pathTo = '/cap/wilms-t';
		const scripts = [
			"/js/cap/wilms-scripts.js"
		];
		wrongPromise(pathTo, scripts, done);
	},
	retinoBlast: function(done) {
		const pathTo = '/cap/retinoblast';
		const scripts = [
			"/js/cap/rb-scripts.js"
		];
		wrongPromise(pathTo, scripts, done);
	},
	rhabdo: function(done) {
		const pathTo = '/cap/rhabdo';
		const scripts = [
			"/js/cap/rhabdo-scripts.js"
		];
		wrongPromise(pathTo, scripts, done);
	},
	testisT: function(done) {
		const pathTo = '/cap/testis-t';
		const scripts = [
			"/js/cap/testis-scripts.js"
		];
		wrongPromise(pathTo, scripts, done);
	},
	softTRx: function(done) {
		const pathTo = '/cap/soft-t-rx';
		const scripts = [
			"/js/cap/softrx-scripts.js"
		];
		wrongPromise(pathTo, scripts, done);
	},
}

module.exports = tests;
