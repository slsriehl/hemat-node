 
const matches = (password) => {
	if(password == process.env.PRACTICE_CAP_ACCESS || password == process.env.PRIVATE_CAP_ACCESS) {
		return true;
	} else {
		return false;
	}
}

const clear = (count, deletionPending) => {
	count = 0;
	deletionPending = false;
	console.log('capCount is now: ' + count);
	console.log('deletionPending is now: ' + deletionPending);

	return;
}

const middleware = (req, res, next) => {
	console.log(req.session);

	req.session.capCount = req.session.capCount ? req.session.capCount : 0;

	if(req.path === '/checklist' || req.session.capAuth) {
		return next();

	} else if(matches(req.body.password)) {

		req.session.capAuth = true;
		req.session.capCount = 0;
		return next();

	} else if(req.body.attempted) {
		req.session.capCount = parseInt(req.body.attempted) + 1;
	}
	
	if(req.query.user === 'internal' && req.session.capCount < 4) {

		console.log('capCount: ' + req.session.capCount);

		let capCount = req.session.capCount || 1;

		let remaining = 4 - capCount;

		let phrase = remaining > 1 ? `${remaining} attempts remain` : `${remaining} attempt remains`;

		let text = req.body.password ? `Credentials incorrect.  ${phrase}.` : "Please enter your internal credentials to access the cancer synoptic checklists.";

		return res.render('./login/cap-login.hbs', {
			messages: [{
				id: "cap-auth",
				text
			}],
			action: req.originalUrl,
			capCount,
			specificScripts: [
				"/js/login-settings.js"
			]
		});

	} else if(req.session.capCount) {
		req.session.capCount = 0;

	} 
		
	return res.render('./page-views/cap/closed.hbs');

}

module.exports = middleware;
