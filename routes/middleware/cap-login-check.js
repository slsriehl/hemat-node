 
const matches = (password) => {
	if(password == process.env.PRACTICE_CAP_ACCESS || password == process.env.PRIVATE_CAP_ACCESS) {
		return true;
	} else {
		return false;
	}
}

const middleware = (req, res, next) => {

	if(req.session.capAuth) {
		return next();

	} else if(req.query.user === 'internal') {

		return res.render('./login/cap-login.hbs', {
			messages: [{
				id: "cap-auth",
				text: "Please enter your internal credentials to access the cancer synoptic checklists."
			}],
			action: req.originalUrl.split('?')[0],
			specificScripts: [
				"/js/login-settings.js"
			]
		});

	} else if(!req.body.password) {

		return res.render('./page-views/cap/closed.hbs');

	} else if(matches(req.body.password)) {

		req.session.capAuth = true;
		return next();

	} else {
		return res.render('./login/cap-login.hbs', {
			messages: [{
				id: "cap-auth-incorrect",
				text: "Credentials incorrect.  Please try again or contact your administrator."
			}],
			action: req.originalUrl.split('?')[0],
			specificScripts: [
				"/js/login-settings.js"
			]
		});
	}
		

	
}

module.exports = middleware;
