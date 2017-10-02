const mockery = require('mockery');

const nodemailerMock = require('nodemailer-mock');

const tests = {
	before: function() {
		mockery.enable({
      warnOnUnregistered: false,
    });
	},
	getMail: function() {
		return nodemailerMock.mock.sentMail();
	},
	after: function() {
		nodemailerMock.mock.reset();
		mockery.deregisterAll();
    mockery.disable();
	}
}

module.exports = tests;
