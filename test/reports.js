process.env.NODE_ENV = 'test';

const beforeEachHooks = require('./helpers/before-each-reports');

describe('report behavior with the correct auth cred (cookie sent matches an isAuth session)', function () {
	beforeEach('setup report-ready db', function(done) {
		beforeEachHooks.correctCookie(done);
	});
});

describe('reports behavior where cookie references a missing session', function() {
	beforeEach('setup reports-ready db with the wrong auth cred (cookie sent doesnt match any session)', function(done) {
		beforeEachHooks.expiredCookie(done);
	});
});

describe('user pages behavior where cookie references an isAuth false session', function() {
	beforeEach('setup reports-ready db with false auth cred (cookie sent matches an isAuth false session)', function(done) {
		beforeEachHooks.isAuthFalseCookie(done);
	});
});

describe('report behavior with no cookie', function() {
	beforeEach('setup report-ready db without auth cred (no cookie sent, send a session with isAuth false)', function(done) {
		beforeEachHooks.noCookie(done);
	});
});
