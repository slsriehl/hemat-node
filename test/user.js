process.env.NODE_ENV = 'test';
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const beforeEachHooks = require('./helpers/before-each/user');

const root = require('./user/root');
const mail = require('./user/mail');

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
	it('should render the signup page with logged out header');
	it('should signup with valid inputs');
	it('should not signup with a username already taken');
	it('should not signup with an email already taken');
	 //will not pass
	it('should not signup with a password too short');
	//login
	it('should render the login page with logged out header');
	it('should login with valid username and password');
	it('should login with valid email and password')
	it('should not login with invalid email');
	it('should not login with invalid username');
	it('should not login with valid email but invalid password');
	it('should not login with valid username but invalid password');
	//mail
	it('should render the mail page with logged out header');
	it('should send mail when name, email, and message are present');
		//will not pass
	it('should send mail when subject is not present');
	it('should send mail when phone is not present');
	it('should not send mail when email is not present');
	it('should not send mail when message is not present');
	it('should not send message when name is not present');
	//reset password: sending reset email
	it('should render reset password email/username input if requireReset is true');
	it('should render reset password email/username input on request');
	it('should send reset email with valid token on reset request submit with valid email', function(done) {
		mail.sendResetNotReq(true, done);
	});
	// it('should send reset email with valid token on reset request submit with valid username', function(done) {
	// 	mail.sendResetNotReq(false, done);
	// });
	it('should not send reset email with invalid email');
	it('should not send reset email with invalid username');
	//reset password: resetting password
	it('should reset password if the new password does not match the old hash and the token is valid, unused, and unexpired');
		//will not pass yet
	it('should not reset password if the new password matches the old hash');
	it('should not reset the password if the token is expired');
	it('should not reset the password if the token is used');
	it('should not reset the password if the token is marked invalid');
	//reset password: logging in
	it('should automatically load the root page logged in on successful password reset');
	it('should log the user in on subsequent log out and relogin');
	//user settings page
	it('should not get the user settings page');
		//will not pass?
	it('should post the user settings page with valid password entered');
		//will not pass?
	it('should login the user on valid user settings submit');

});
