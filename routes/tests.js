const express = require('express');

const router = new express.Router;

router.get('/', (req, res) => {
	res.render('index.hbs', {
		login: {
			cookie: true,
			firstname: 'Alvin'
		}
	});
});




module.exports = router;
