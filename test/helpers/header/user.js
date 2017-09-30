

const header = {
	notSignedIn: function() {
		$('#sign-up').should.exist;
		$('#log-in').should.exist;
		$('#toggleLoginNav').should.not.exist;
		$('.message-center').should.exist;
	},
	signedIn: function(firstname) {
		$('#sign-up').should.not.exist;
		$('#log-in').should.not.exist;
		$('#toggleLoginNav').should.exist;
		$('#toggleLoginNav').find('#loginDropdown').should.exist;
		$('#toggleLoginNav > :first-child').should.have.data('toggle', 'dropdown');
		$('#toggleLoginNav > :first-child > :nth-child(2)').should.contain('Hi, ' + firstname);
		$('#toggleLoginNav > :nth-child(2) > :first-child').find('.dropdown-link').should.have.attr('href', '/user');
		$('#toggleLoginNav > :nth-child(2) > :nth-child(2)').find('.dropdown-link').should.have.attr('href', '/reports/history');
		$('#toggleLoginNav > :nth-child(2) > :nth-child(3)').find('.dropdown-link').should.have.attr('href', '/user/logout');
		$('.message-center').should.exist;
		//$('.message-box').should.have.length(1);
	}
}

module.exports = header;
