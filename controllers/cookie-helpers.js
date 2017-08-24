

const helpers = {
	readCookie: (req, cookieName) => {
		const cookies = ` ${req.headers.cookie}`;
		let a;
		if(cookies.includes(';')) {
			a = cookies.split(';');
		} else {
			a = [];
			a.push(cookies);
		}
		//console.log(a);
		for (let i = 0; i < a.length; i++) {
			let b = a[i].split('=');
			// console.log(b);
			if (b[0] == ` connect.sid`) {
				// console.log(b[1]);
				let c = b[1];
				let d = c.slice(4, (c.length - 1));
				// console.log(d);
				let e = d.split('.');
				// console.log(e);
				console.log(e[0] + 'retrieved cookie');
				return e[0];
			}
		}
		return false;
	},
	verifyCookie: (req, res, newAuth) => {
		// console.log(req.headers.cookie);
		// console.log(cookieFromBrowser);
		// console.log(req.session.id);
		console.log(req.session.message + ' reqsessmsg before cookie function');
		console.log(newAuth);
		console.log(req.session.id);
		console.log(req.session.user);
		if ((helpers.readCookie(req) == req.session.id && req.session.user) || newAuth) {
			console.log(req.session.message + ' true reqsessmsg');
			req.session.isAuth = true;
			return true;
		} else {
			console.log(req.session.message + ' false reqsessmsg');
			req.session.isAuth = false;
			return false;
		}
	},
}

module.exports = helpers;
