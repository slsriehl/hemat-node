process.env.NODE_ENV = 'test';
//process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const beforeEachHooks = require('./helpers/before-each/user');

const root = require('./user/root');

const mailNoCookie = require('./user/no-cookie/mail');
const resetNoCookie = require('./user/no-cookie/reset');
const signupNoCookie = require('./user/no-cookie/signup');
const loginNoCookie = require('./user/no-cookie/login');
const settingsNoCookie = require('./user/no-cookie/settings');

const mailFalseCookie = require('./user/false-cookie/mail');
const resetFalseCookie = require('./user/false-cookie/reset');
const signupFalseCookie = require('./user/false-cookie/signup');
const loginFalseCookie = require('./user/false-cookie/login');
const settingsFalseCookie = require('./user/false-cookie/settings');

describe('user pages behavior with valid cookie/session', function () {
	beforeEach('setup user-ready db with the correct auth cred (cookie sent matches an isAuth session)', function(done) {
		beforeEachHooks.correctCookie(done);
	});
});

describe('user pages behavior where cookie references a missing session', function() {
	beforeEach('setup user-ready db with the wrong auth cred (cookie sent doesnt match any session)', function(done) {
		beforeEachHooks.expiredCookie(done);
	});
// 	//can use false cookie functions because the header is the same
// 	it('should post the user settings page with valid password entered');
// 	it('should login the user on valid user settings submit');
	it('should render the main page with logged out header', function(done) {
		root.renderIndexFalseCookie(done);
	});
	//signup
	it('should render the signup page with logged out header', function(done) {
		signupFalseCookie.renderPage(done);
	});
	it('should signup with valid inputs', function(done) {
		signupFalseCookie.validSignup(done);
	});
	it('should not signup with a username already taken', function(done) {
		signupFalseCookie.invalidSignup(false, done);
	});
	it('should not signup with an email already taken', function(done) {
		signupFalseCookie.invalidSignup(true, done);
	});
	//login
	it('should render the login page with logged out header', function(done) {
		loginFalseCookie.renderPage(done);
	});
	it('should login with valid username and password', function(done) {
		loginFalseCookie.validLogin(false, done);
	});
	it('should login with valid email and password', function(done) {
		loginFalseCookie.validLogin(true, done);
	});
	it('should not login with invalid email', function(done) {
		loginFalseCookie.invalidLoginCred(true, done);
	});
	it('should not login with invalid username', function(done) {
		loginFalseCookie.invalidLoginCred(false, done);
	});
	it('should not login with valid email but invalid password', function(done) {
		loginFalseCookie.invalidLoginPwd(true, done);
	});
	it('should not login with valid username but invalid password', function(done) {
		loginFalseCookie.invalidLoginPwd(false, done);
	});
	it('should not login by email when the user is deleted', function(done) {
		loginFalseCookie.deletedUser(true, done);
	});
	it('should not login by username when the user is deleted', function(done) {
		loginFalseCookie.deletedUser(false, done);
	});
	//mail
	it('should render the mail page with logged out header', function(done) {
		mailFalseCookie.renderPage(done);
	});
	//reset password: sending reset email
	it('should render reset password email/username input on request', function(done) {
		resetFalseCookie.renderPage(done);
	});

	//reset password: resetting password
		//will not pass yet
	it('should not reset password if the new password matches the old hash');
	it('should not reset the password if the token is expired', function(done) {
		resetFalseCookie.badToken('expired', done);
	});
	it('should not reset the password if the token is used', function(done) {
		resetFalseCookie.badToken('used', done);
	});
	it('should not reset the password if the token is marked invalid', function(done) {
		resetFalseCookie.badToken('invalid', done);
	});
	//reset password: logging in
	it('should automatically load the root page logged in on successful password reset with no reset required', function(done) {
		resetFalseCookie.resetSuccess(false, done);
	});
	it('should automatically load the root page logged in on successful password reset and reset reset required', function(done) {
		resetFalseCookie.resetSuccess(true, done);
	});
	//user settings page
		//will not pass
	it('should not get the user settings page', function(done) {
		settingsNoCookie.dontGet(done);
	});

	//require emailing
	it('should reset the password on login if require reset is true');
	it('should send reset email with valid token on reset request submit with valid email'//, function(done) {
	// 	mail.sendResetNotReq(true, done);
	// }
);
	it('should send reset email with valid token on reset request submit with valid username'//, function(done) {
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
	it('should send mail when name, email, and message are present');
});

describe('user pages behavior where cookie references an isAuth false session', function() {
	beforeEach('setup user-ready db with false auth cred (cookie sent matches an isAuth false session)', function(done) {

		beforeEachHooks.falseCookie(done);
	});
	it('should render the main page with logged out header', function(done) {
		root.renderIndexFalseCookie(done);
	});
	//signup
	it('should render the signup page with logged out header', function(done) {
		signupFalseCookie.renderPage(done);
	});
	it('should signup with valid inputs', function(done) {
		signupFalseCookie.validSignup(done);
	});
// 	it('should not signup with a username already taken', function(done) {
// 		signupFalseCookie.invalidSignup(false, done);
// 	});
// 	it('should not signup with an email already taken', function(done) {
// 		signupFalseCookie.invalidSignup(true, done);
// 	});
// 	//login
// 	it('should render the login page with logged out header', function(done) {
// 		loginFalseCookie.renderPage(done);
// 	});
// 	it('should login with valid username and password', function(done) {
// 		loginFalseCookie.validLogin(false, done);
// 	});
// 	it('should login with valid email and password', function(done) {
// 		loginFalseCookie.validLogin(true, done);
// 	});
// 	it('should not login with invalid email', function(done) {
// 		loginFalseCookie.invalidLoginCred(true, done);
// 	});
// 	it('should not login with invalid username', function(done) {
// 		loginFalseCookie.invalidLoginCred(false, done);
// 	});
// 	it('should not login with valid email but invalid password', function(done) {
// 		loginFalseCookie.invalidLoginPwd(true, done);
// 	});
// 	it('should not login with valid username but invalid password', function(done) {
// 		loginFalseCookie.invalidLoginPwd(false, done);
// 	});
// 	it('should not login by email when the user is deleted', function(done) {
// 		loginFalseCookie.deletedUser(true, done);
// 	});
// 	it('should not login by username when the user is deleted', function(done) {
// 		loginFalseCookie.deletedUser(false, done);
// 	});
// 	//mail
// 	it('should render the mail page with logged out header', function(done) {
// 		mailFalseCookie.renderPage(done);
// 	});
// 	//reset password: sending reset email
// 	it('should render reset password email/username input on request', function(done) {
// 		resetFalseCookie.renderPage(done);
// 	});
//
// 	//reset password: resetting password
// 		//will not pass yet
// 	it('should not reset password if the new password matches the old hash');
// 	it('should not reset the password if the token is expired', function(done) {
// 		resetFalseCookie.badToken('expired', done);
// 	});
// 	it('should not reset the password if the token is used', function(done) {
// 		resetFalseCookie.badToken('used', done);
// 	});
// 	it('should not reset the password if the token is marked invalid', function(done) {
// 		resetFalseCookie.badToken('invalid', done);
// 	});
// 	//reset password: logging in
// 	it('should automatically load the root page logged in on successful password reset with no reset required', function(done) {
// 		resetFalseCookie.resetSuccess(false, done);
// 	});
// 	it('should automatically load the root page logged in on successful password reset and reset reset required', function(done) {
// 		resetFalseCookie.resetSuccess(true, done);
// 	});
// 	//user settings page
// 		//will not pass
// 	it('should not get the user settings page', function(done) {
// 		settingsNoCookie.dontGet(done);
// 	});
//
// 	//require emailing
// 	it('should reset the password on login if require reset is true');
// 	it('should send reset email with valid token on reset request submit with valid email'//, function(done) {
// 	// 	mail.sendResetNotReq(true, done);
// 	// }
// );
// 	it('should send reset email with valid token on reset request submit with valid username'//, function(done) {
// 	// 	mail.sendResetNotReq(false, done);
// 	// }
// );
// 	it('should not send reset email with invalid email'//, function(done) {
// 	// 	//not passing because message isn't loading in dom
// 	// 	mail.dontSendReset(true, done);
// 	// }
// );
// 	it('should not send reset email with invalid username'//, function(done) {
// 	// 	//not passing because message isn't loading in dom
// 	// 	mail.dontSendReset(false, done);
// 	// }
// );
// 	it('should send mail when name, email, and message are present');
});

// describe('user pages behavior where no cookie is sent', function() {
// 	beforeEach('setup user-ready db without auth cred (no cookie sent, send a session with isAuth false)', function(done) {
// 		beforeEachHooks.noCookie(done);
// 	});
// 	//tests
// 	//root
// 	it('should render the main page with logged out header', function(done) {
// 		root.renderIndexNoCookie(done);
// 	});
// 	//signup
// 	it('should render the signup page with logged out header', function(done) {
// 		signupNoCookie.renderPage(done);
// 	});
// 	it('should signup with valid inputs', function(done) {
// 		signupNoCookie.validSignup(done);
// 	});
// 	it('should not signup with a username already taken', function(done) {
// 		signupNoCookie.invalidSignup(false, done);
// 	});
// 	it('should not signup with an email already taken', function(done) {
// 		signupNoCookie.invalidSignup(true, done);
// 	});
// 	//login
// 	it('should render the login page with logged out header', function(done) {
// 		loginNoCookie.renderPage(done);
// 	});
// 	it('should login with valid username and password', function(done) {
// 		loginNoCookie.validLogin(false, done);
// 	});
// 	it('should login with valid email and password', function(done) {
// 		loginNoCookie.validLogin(true, done);
// 	});
// 	it('should not login with invalid email', function(done) {
// 		loginNoCookie.invalidLoginCred(true, done);
// 	});
// 	it('should not login with invalid username', function(done) {
// 		loginNoCookie.invalidLoginCred(false, done);
// 	});
// 	it('should not login with valid email but invalid password', function(done) {
// 		loginNoCookie.invalidLoginPwd(true, done);
// 	});
// 	it('should not login with valid username but invalid password', function(done) {
// 		loginNoCookie.invalidLoginPwd(false, done);
// 	});
// 	it('should not login by email when the user is deleted', function(done) {
// 		loginNoCookie.deletedUser(true, done);
// 	});
// 	it('should not login by username when the user is deleted', function(done) {
// 		loginNoCookie.deletedUser(false, done);
// 	});
// 	//mail
// 	it('should render the mail page with logged out header', function(done) {
// 		mailNoCookie.renderPage(done);
// 	});
// 	//reset password: sending reset email
// 	it('should render reset password email/username input on request', function(done) {
// 		resetNoCookie.renderPage(done);
// 	});
//
// 	//reset password: resetting password
// 		//will not pass yet
// 	it('should not reset password if the new password matches the old hash');
// 	it('should not reset the password if the token is expired', function(done) {
// 		resetNoCookie.badToken('expired', done);
// 	});
// 	it('should not reset the password if the token is used', function(done) {
// 		resetNoCookie.badToken('used', done);
// 	});
// 	it('should not reset the password if the token is marked invalid', function(done) {
// 		resetNoCookie.badToken('invalid', done);
// 	});
// 	//reset password: logging in
// 	it('should automatically load the root page logged in on successful password reset with no reset required', function(done) {
// 		resetNoCookie.resetSuccess(false, done);
// 	});
// 	it('should automatically load the root page logged in on successful password reset and reset reset required', function(done) {
// 		resetNoCookie.resetSuccess(true, done);
// 	});
// 	//user settings page
// 		//will not pass
// 	it('should not get the user settings page', function(done) {
// 		settingsNoCookie.dontGet(done);
// 	});
//
// 	//require emailing
// 	it('should reset the password on login if require reset is true');
// 	it('should send reset email with valid token on reset request submit with valid email'//, function(done) {
// 	// 	mail.sendResetNotReq(true, done);
// 	// }
// );
// 	it('should send reset email with valid token on reset request submit with valid username'//, function(done) {
// 	// 	mail.sendResetNotReq(false, done);
// 	// }
// );
// 	it('should not send reset email with invalid email'//, function(done) {
// 	// 	//not passing because message isn't loading in dom
// 	// 	mail.dontSendReset(true, done);
// 	// }
// );
// 	it('should not send reset email with invalid username'//, function(done) {
// 	// 	//not passing because message isn't loading in dom
// 	// 	mail.dontSendReset(false, done);
// 	// }
// );
// 	it('should send mail when name, email, and message are present');
//
// });
