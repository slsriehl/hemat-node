
const cheerio = require('cheerio');

const resStatus = {
	getResponseStatus: function(res) {
		res.should.have.status(200);
		res.should.be.html;
		let resString = JSON.stringify(res.res.text)
		//console.log(resString);
		$ = cheerio.load(res.res.text);
		return $;
	},
	ajaxResponseStatus: function(res) {
		res.should.have.status(200);
		res.should.be.html;
		let resString = res.res.text;
		return resString;
	}
}

module.exports = resStatus;
