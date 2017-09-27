const Promise = require('bluebird');

const nodemailer = Promise.promisifyAll(require('nodemailer'));

const fs = Promise.promisifyAll(require('fs'));


const testMail = {
	createTestAccount: function() {
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
			testMail.writeToCredentialStorage(createdPop3);
			let transporter = {
				host: 'smtp.ethereal.email',
				port: 587,
				auth: {
					user: account.user,
					pass: account.pass
				}
			}
			console.log(transporter);
			return transporter;
		})
		.catch(function(error) {
			throw error;
		});
	},
	writeToCredentialStorage: function (newAccount) {
		return fs.writeFileAsync('./test-sent-from.txt', JSON.stringify(newAccount))
		.catch(function(error) {
			throw error
		});
	}
}

module.exports = testMail.createTestAccount;
