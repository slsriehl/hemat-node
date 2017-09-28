const util = require('util');

const Promise = require('bluebird');

const path = require('path');

//const nodemailer = require('nodemailer');

const nodemailer = Promise.promisifyAll(require('nodemailer'));

const writeFileAsync = Promise.promisify(require('fs').writeFile);

// const fs = require('fs');

const testMail = {
	createTestAccount: function() {
		let transporter;
		return nodemailer.createTestAccountAsync()
		.then(function(account) {
			let createdPop3 = {
				hostname: "pop3.ethereal.email",
				port: 995,
				tls: true,
				mailparser: true,
				username: account.user,
				password: account.pass
			}
			let pop = JSON.stringify(createdPop3);
			console.log(`pop ${util.inspect(pop)}`);
			;
			transporter = {
				host: 'smtp.ethereal.email',
				port: 587,
				secure: false,
				auth: {
					user: account.user,
					pass: account.pass
				},
				tls: {
					rejectUnauthorized: false,
					secureProtocol: "TLSv1_method"
				}
			}
			console.log(transporter);
			return writeFileAsync(__dirname + '/test-sent-from.txt', pop, 'utf8')
		})
		.then(function() {
			return Promise.resolve(transporter);
		})
		.catch(function(error) {
			return Promise.reject(error);
		});
	},
	// connectTelnet: function() {
	// 	const connection = new Telnet();
	// 	const params = {
	// 		host: 'smtp.ethereal.email',
	// 		port: 587,
	// 		shellPrompt: '/ # ',
	// 		timeout: 3000,
	// 		// removeEcho: 4
	// 	}
	// 	return connection.connect(params)
	// 	.then(function(prompt) {
	// 		console.log(prompt);
	// 		return connection.exec(prompt)
	// 	})
	// 	.then(function(res) {
	// 		console.log(res);
	// 		return Promise.resolve(res);
	// 	})
	// 	// .catch(function(error) {
	// 	// 	return Promise.reject(error);
	// 	// })
	// }
}

module.exports = testMail;
