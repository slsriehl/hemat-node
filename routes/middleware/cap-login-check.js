 
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

	} else if(matches(req.body.password)) {

		req.session.capAuth = true;
		return next();

	} else if(req.query.user === 'internal') {

		let text = req.body.password ? "Credentials incorrect.  Please try again or contact your administrator." : "Please enter your internal credentials to access the cancer synoptic checklists.";

		return res.render('./login/cap-login.hbs', {
			messages: [{
				id: "cap-auth",
				text
			}],
			action: req.originalUrl,
			specificScripts: [
				"/js/login-settings.js"
			]
		});

	} else {

		return res.render('./page-views/cap/closed.hbs');
	}
	
}

module.exports = middleware;
