const bcrypt = require('bcryptjs');

const moment = require('moment');

const helpers = {
	users: function() {
		const louiseSalt = bcrypt.genSaltSync(10);
		const louisePassword = bcrypt.hashSync('spaz5713', louiseSalt);

		const sandySalt = bcrypt.genSaltSync(10);
		const sandyPassword = bcrypt.hashSync('donkeykong', sandySalt);

		let newUsers = [{
			//id: 1
			firstname: 'Louise',
			lastname: 'Bates',
			username: 'louise',
			email: 'auurpgnddqjdchqu@ethereal.email',
			password: louisePassword,
			requireReset: false
		}, {
			//id: 2
			firstname: 'Sandy',
			lastname: 'Dunes',
			username: 'sandy',
			email: 'rr2fznwjhurq3of7@ethereal.email',
			password: sandyPassword,
			requireReset: true
		}];

		return newUsers;
	},
	resetTokens: [{
		//id: 1
		//valid, not requireReset
		code: '30fcdbfd-567e-4630-b7f9-bb135f46c3be',
		used: 0,
		valid: 0,
		userId: 1,
		expiresAt: moment().add(3, 'days').format('YYYY-MM-DD HH:mm:ss')
	}, {
		//id: 2
		//valid, requireReset
		code: '94bc94f7-b921-4c4f-bb5e-19c7b0b3e75f',
		used: 0,
		valid: 0,
		userId: 2,
		expiresAt: moment().add(3, 'minutes').format('YYYY-MM-DD HH:mm:ss')
	}, {
		//id: 3
		//invalid, expired, not requireReset
		code: 'e4d4605a-2929-4701-8873-55c0f3e56ff8',
		used: 0,
		valid: 0,
		userId: 1,
		expiresAt: moment().subtract(3, 'minutes').format('YYYY-MM-DD HH:mm:ss')
	}, {
		//id: 4
		//invalid, used, not requireReset
		code: '576a66fc-80a5-4522-9741-967b027c11b4',
		used: 1,
		valid: 0,
		userId: 1,
		expiresAt: moment().add(3, 'minutes').format('YYYY-MM-DD HH:mm:ss')
	}, {
		//id: 5
		//invalid, invalid, not requireReset
		code: 'e51e7e18-5d67-4fc9-ba7d-f6a5624694ff',
		used: 0,
		valid: 1,
		userId: 1,
		expiresAt: moment().add(3, 'minutes').format('YYYY-MM-DD HH:mm:ss')
	}]

}

module.exports = helpers;
