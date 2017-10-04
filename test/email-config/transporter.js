const util = require('util');

//const Promise = require('bluebird');

const path = require('path');

//const createTestAccountAsync = Promise.promisify(require('nodemailer').createTestAccount);

//const writeFileAsync = Promise.promisify(require('fs').writeFile);

const nodemailer = require('nodemailer');

const fs = require('fs');

let transporter;

const testMail = function() {
	nodemailer.createTestAccount(function(err, account) {
		console.log(`create test account err ${util.inspect(err)}`);
		if(err) {
			return err;
		}
		console.log(`account ${util.inspect(account)}`);
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
		fs.writeFile(__dirname + '/test-sent-from.txt', pop, 'utf8', function(error) {
			if(error) {
				console.log(`fs error ${util.inspect(error)}`);
				return error;
			} else {
				return transporter;
			}
		});
	});
}

// const testMail = function() {
// 	return createTestAccountAsync()
// 	.then(function(account) {
// 		let createdPop3 = {
// 			hostname: "pop3.ethereal.email",
// 			port: 995,
// 			tls: true,
// 			mailparser: true,
// 			username: account.user,
// 			password: account.pass
// 		}
// 		let pop = JSON.stringify(createdPop3);
// 		console.log(`pop ${util.inspect(pop)}`);
// 		;
// 		transporter = {
// 			host: 'smtp.ethereal.email',
// 			port: 587,
// 			secure: false,
// 			auth: {
// 				user: account.user,
// 				pass: account.pass
// 			},
// 			tls: {
// 				rejectUnauthorized: false,
// 				secureProtocol: "TLSv1_method"
// 			}
// 		}
// 		console.log(transporter);
// 		return writeFileAsync(__dirname + '/test-sent-from.txt', pop, 'utf8')
// 	})
// 	.then(function() {
// 		return Promise.resolve(transporter);
// 	})
// 	.catch(function(error) {
// 		return Promise.reject(error);
// 	});
// }

module.exports = testMail;
