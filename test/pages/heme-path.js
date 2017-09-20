const Nightmare = require('nightmare');
const jQuery = require('jquery');
const chai = require('chai');
const should = chai.should();
const chaiDOM = require('chai-dom');
const chaiHTTP = require('chai-http');
const server = require('../../server');
chai.use(chaiHTTP);
chai.use(chaiDOM);

const tests = {
	hemeDiffNoCookie: function(done) {
		chai.request(server)
    .get('/heme-path/heme-diff')
    .end(function(err, res) {
      console.log(res);
      res.should.have.status(200);
      res.should.be.html;
		});
		Nightmare()
		.goto('localhost:5000/heme-path/heme-diff')
		.evaluate(function() {
			$('#sign-up').should.have.text('&nbsp;Sign Up');
			$('#log-in').should.have.text('&nbsp;Log In');
			$('#you-should-sign-up').find('.message-item span').should.have.html('<a href="/user/signup">Sign up</a> to save, edit, and PDF your reports and access more resources.');
			//add that more elements on the page specific to heme diff should exist
		});
		done();
	}
}

module.exports = tests;
