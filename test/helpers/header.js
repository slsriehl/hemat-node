

const header = {
	notSignedIn: function() {
		$('#sign-up').should.exist;
		$('#log-in').should.exist;
		$('#toggleLoginNav').should.not.exist;
		$('.message-box').should.have.length(1);
	},
	signedIn: function() {
		$('#sign-up').should.not.exist;
		$('#log-in').should.not.exist;
		$('#toggleLoginNav').should.exist;
		$('#toggleLoginNav').find('#loginDropdown').should.exist;
		$('#toggleLoginNav > :nth-child(2) > :first-child').find('.dropdown-link').should.have.attr('href', '/user');
		$('#toggleLoginNav > :nth-child(2) > :nth-child(2)').find('.dropdown-link').should.have.attr('href', '/reports/history');
		$('#toggleLoginNav > :nth-child(2) > :nth-child(3)').find('.dropdown-link').should.have.attr('href', '/user/logout');
	}
}

module.exports = header;
