

const isAuthorized = require('../../controllers/cookie-helpers').verify;

const userWall = (req, res, next) => {
    if(isAuthorized(req)) {
        return next();
    } else {
        return res.render('index.hbs', {
            messages: [
                ...req.session.privacyMessage,
                {
                text: 'You need an account to access that resource.  <a href="/user/signup">Sign up</a>.',
                id: `access-denied`
            }]
        });
    }
}

module.exports = userWall;