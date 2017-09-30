process.env.NODE_ENV = 'test';
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const beforeEachHooks = require('./helpers/before-each/user');

const root = require('./user/root');
const mail = require('./user/mail');
const reset = require('./user/no-cookie/reset');

const signupNoCookie = require('./user/no-cookie/signup');
const loginNoCookie = require('./user/no-cookie/login');

describe('user pages behavior with valid cookie/session', function () {
	beforeEach('setup user-ready db with the correct auth cred (cookie sent matches an isAuth session)', function(done) {
		beforeEachHooks.correctCookie(done);
	});
});

describe('user pages behavior where cookie references a missing session', function() {
	beforeEach('setup user-ready db with the wrong auth cred (cookie sent doesnt match any session)', function(done) {
		beforeEachHooks.expiredCookie(done);
	});
});

describe('user pages behavior where cookie references an isAuth false session', function() {
	beforeEach('setup user-ready db with false auth cred (cookie sent matches an isAuth false session)', function(done) {
		beforeEachHooks.isAuthFalseCookie(done);
	});
});

describe('user pages behavior where no cookie is sent', function() {
	beforeEach('setup user-ready db without auth cred (no cookie sent, send a session with isAuth false)', function(done) {
		beforeEachHooks.noCookie(done);
	});
	//tests
	//root
	it('should render the main page with logged out header', function(done) {
		root.renderIndexNoCookie(done);
	});
	//signup
	it('should render the signup page with logged out header', function(done) {
		signupNoCookie.renderPage(done);
	});
	it('should signup with valid inputs', function(done) {
		signupNoCookie.validSignup(done);
	});
	it('should not signup with a username already taken', function(done) {
		signupNoCookie.invalidSignup(false, done);
	});
	it('should not signup with an email already taken', function(done) {
		signupNoCookie.invalidSignup(true, done);
	});
	//login
	it('should render the login page with logged out header', function(done) {
		loginNoCookie.renderPage(done);
	});
	it('should login with valid username and password', function(done) {
		loginNoCookie.validLogin(false, done);
	});
	it('should login with valid email and password', function(done) {
		loginNoCookie.validLogin(true, done);
	});
	it('should not login with invalid email', function(done) {
		loginNoCookie.invalidLoginCred(true, done);
	});
	it('should not login with invalid username', function(done) {
		loginNoCookie.invalidLoginCred(false, done);
	});
	it('should not login with valid email but invalid password', function(done) {
		loginNoCookie.invalidLoginPwd(true, done);
	});
	it('should not login with valid username but invalid password', function(done) {
		loginNoCookie.invalidLoginPwd(false, done);
	});
	it('should not login by email when the user is deleted', function(done) {
		loginNoCookie.deletedUser(true, done);
	});
	it('should not login by username when the user is deleted', function(done) {
		loginNoCookie.deletedUser(false, done);
	});
	//mail
	it('should render the mail page with logged out header', function(done) {
		mail.renderPageNoCookie(done);
	});
	it('should send mail when name, email, and message are present');
	//reset password: sending reset email
	it('should render reset password email/username input on request', function(done) {
		reset.renderPage(done);
	});
	it('should reset the password on login if require reset is true');
	it('should send reset email with valid token on reset request submit with valid email'//, function(done) {
	//	//not passing because message isn't loading in dom
	// 	mail.sendResetNotReq(true, done);
	// }
);
	it('should send reset email with valid token on reset request submit with valid username'//, function(done) {
	// 	//not passing because message isn't loading in dom
	// 	mail.sendResetNotReq(false, done);
	// }
);
	it('should not send reset email with invalid email'//, function(done) {
	// 	//not passing because message isn't loading in dom
	// 	mail.dontSendReset(true, done);
	// }
);
	it('should not send reset email with invalid username'//, function(done) {
	// 	//not passing because message isn't loading in dom
	// 	mail.dontSendReset(false, done);
	// }
);
	//reset password: resetting password
		//will not pass yet
	it('should not reset password if the new password matches the old hash');
	it('should not reset the password if the token is expired', function(done) {
		reset.badToken('expired', done);
	});
	it('should not reset the password if the token is used', function(done) {
		reset.badToken('used', done);
	});
	it('should not reset the password if the token is marked invalid', function(done) {
		reset.badToken('invalid', done);
	});
	//reset password: logging in
	it('should automatically load the root page logged in on successful password reset with no reset required', function(done) {
		reset.resetSuccess(false, done);
	});
	it('should automatically load the root page logged in on successful password reset and reset reset required', function(done) {
		reset.resetSuccess(true, done);
	});
	//user settings page
		//will not pass
	it('should not get the user settings page');
		//will not pass?
	it('should post the user settings page with valid password entered');
		//will not pass?
	it('should login the user on valid user settings submit');

});
