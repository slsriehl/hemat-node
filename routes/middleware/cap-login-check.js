 
let middleware = (req, res, next) => {
	if(req.session.capAuth) {
		return next();

	} else if(req.query.user === 'internal') {
		req.session.previousCap = req.originalUrl;
		return res.render('./login/cap-login.hbs', {
			messages: [{
				id: "cap-auth",
				text: "Please enter your internal credentials to access the cancer synoptic checklists."
			}],
			specificScripts: [
				"/js/login-settings.js"
			]
		});

	} else {
		// req.session.suspendCookieWarning = true;
		// res.redirect('/cap/closed');
		return res.render('./page-views/cap/closed.hbs');
	}
}

module.exports = middleware;
