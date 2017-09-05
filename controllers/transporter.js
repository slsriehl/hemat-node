const nodemailer = require('nodemailer');

let transporter = {
		host: null,
		port: 465,
		secure: true, // use SSL
		auth: {
			user: null,
			pass: null
		}
	}

	if(process.env.TRANS_HOST) {
		transporter.host = process.env.TRANS_HOST;
	} else {
		transporter.host = require('../config/host');
	}

	if(process.env.TRANS_USER) {
		transporter.auth.user = process.env.TRANS_USER;
	} else {
		transporter.auth.user = require('../config/from');
	}

	if(process.env.TRANS_PASS) {
		transporter.auth.pass = process.env.TRANS_PASS;
	} else {
		transporter.auth.pass = require('../config/pass');
	}


	module.exports = nodemailer.createTransport(transporter);
