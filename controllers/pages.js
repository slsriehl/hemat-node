
const cookieHelpers = require('./cookie-helpers');

const controller = {
	userWall: (req, res, renderPath, scripts) => {
		console.log(req.session);
		if(cookieHelpers.verifyCookie(req, res)) {
			res.render(renderPath, {
				messages: req.session.systemMessages,
				isAuth: {
					check: req.session.isAuth,
					firstname: req.session.firstname
				},
				specificScripts: scripts
			});
		} else {
			res.render('index.hbs', {
				messages: [{
					text: 'You need an account to access that resource.  <a href="/user/signup">Sign up</a>.',
					id: `access-denied-${renderPath}`
				}]
			});
		}
	}
}

module.exports = controller;
