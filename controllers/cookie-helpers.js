

const cookieHelpers = {
	read: (header) => {
		let cookies = ` ${header}`;
		let a = cookies.includes(';') ? cookies.split(';') : [cookies];

		return a.map(b => b.split('='))
		.filter(b => b[0] == ` connect.sid`)
		.map(b => {
			let c = b[1];
			let d = c.slice(4, (c.length - 1));
			let cookie = d.split('.')[0];
			console.log('+++ Cookie: ' + cookie + ' +++');
			return cookie;
		})[0];
	},
	verify: (req, newAuth = false) => {
		if(newAuth || ((cookieHelpers.read(req.headers.cookie) == req.session.id) && req.session.user)) {
			req.session.isAuth = true;
		} else {
			req.session.isAuth = false;
		}
		return req.session.isAuth;
	},
}

module.exports = cookieHelpers;
