const nodemailer = require('nodemailer');

const Promise = require('bluebird');

const nodemailerMock = require('nodemailer-mock');
const mockery = require('mockery');

const transporter = {
	setTrans: function() {
		let transport = {
				host: null,
				port: 465,
				secure: true, // use SSL
				auth: {
					user: null,
					pass: null
				}
			}

		if(process.env.TRANS_HOST) {
			transport.host = process.env.TRANS_HOST;
		} else {
			transport.host = require('../config/host');
		}

		if(process.env.TRANS_USER) {
			transport.auth.user = process.env.TRANS_USER;
		} else {
			transport.auth.user = require('../config/from');
		}

		if(process.env.TRANS_PASS) {
			transport.auth.pass = process.env.TRANS_PASS;
		} else {
			transport.auth.pass = require('../config/pass');
		}
		return transport;
	},
	testTrans: function() {
		if(process.env.NODE_ENV == 'test') {
			const testTransport = require('../test/email-config/transporter');
			//mockery.registerMock('nodemailer', nodemailerMock);
			return testTransport;
		} else {
			return transporter.setTrans();
		}

	},
	transportPromise: function(mailOptions) {
		let transport = transporter.testTrans();
		let transporterProm = Promise.promisifyAll(nodemailer.createTransport(transport));
		return transporterProm.sendMailAsync(mailOptions);
	}
}

	module.exports = transporter.transportPromise;
