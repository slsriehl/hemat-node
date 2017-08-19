//show/hide passwords
var hideShow = function (event) {
	console.log('hide show fired');
	if ($(this).hasClass('show')) {
		$('.hide-show span').text('Hide');
		$('[name="password"]').attr('type', 'text');
		$('[name="newPassword"]').attr('type', 'text');
		$('.hide-show span').removeClass('show');
	} else {
		$('.hide-show span').text('Show');
		$('[name="password"]').attr('type', 'password');
		$('[name="newPassword"]').attr('type', 'password');
		$('.hide-show span').addClass('show');
	}
}

//change the password fields back to password input type on submit
var hideShowSubmit = function() {
	$('.hide-show span').text('Show').addClass('show');
	$('.hide-show').parent().find('[name="password"]').attr('type','password');
}

var changeToPasswordFormat = function(formName) {
	formName.on('submit', hideShowSubmit);
}


$(document).ready(function() {
	$(document).off('click', '.hide-show span').on('click', '.hide-show span', hideShow);

	changeToPasswordFormat($('#login-form'));
	changeToPasswordFormat($('#signup-form'));

});
