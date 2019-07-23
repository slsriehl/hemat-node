const express = require('express');

const router = new express.Router;


router.get('/cap/closed', (req, res) => {
	return res.render('./page-views/cap/closed.hbs');
})

router.post('/cap/login', (req, res) => {
    if(req.body.password === process.env.PRACTICE_CAP_ACCESS || req.body.password === process.env.PRIVATE_CAP_ACCESS) {
        req.session.capAuth = true;
        let advance = req.session.previousCap;
        req.session.previousCap = null;
        return res.redirect(advance);
        
    } else {
        return res.render('./login/cap-login.hbs', {
			messages: [{
				id: "cap-auth-incorrect",
				text: "Credentials incorrect.  Please try again or contact your administrator."
			}],
			specificScripts: [
				"/js/login-settings.js"
			]
		});
    }
    
})

module.exports = router;