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

//custom form validation

//regexs to prevent illegal chars that might mess up databases
var userNamePattern = /^(?!.*(?:@|\u0022|\u0027|\u201C|\u201D|\u2018|\u2019|\u0060|\u00B4).*)/;
var otherPattern = /^(?!.*(?:\u0022|\u0027|\u201C|\u201D|\u2018|\u2019|\u0060|\u00B4).*)/;

//rules for common fields
var namesRules = {
	validPattern: otherPattern,
	required: true,
	autocapitalize: false,
	autocorrect: false,
}
var passwordRules = {
	required: true,
	minlength: 8,
	validPattern: otherPattern
}
var userNameRules = {
	validPattern: userNamePattern,
	required: true,
	autocapitalize: false,
	autocorrect: false,
}
var emailRules = {
	email: true,
	required: true,
}

//error msgs for common fields
var firstNameMsgs = {
	required: "First name is required.",
	validPattern: "First name can't have the &#34; &#39; &#8220; &#8221; &#8216; &#8217; &#96; or &#180; symbols"
}
var lastNameMsgs = {
	required: "Last name is required.",
	validPattern: "Last name can't have the &#34; &#39; &#8220; &#8221; &#8216; &#8217; &#96; or &#180; symbols"
}
var passwordMsgs = {
	required: "Password is required.",
	validPattern: "Password can't have the &#34; &#39; &#8220; &#8221; &#8216; &#8217; &#96; or &#180; symbols",
	minlength: 'Password must be at least 8 characters.'
}
var userNameMsgs = {
	required: "Username is required.",
	validPattern: "Username can't have the @ &#34; &#39; &#8220; &#8221; &#8216; &#8217; &#96; or &#180; symbols"
}
var emailMsgs = {
	required: "Email is required.",
}


$(document).ready(function() {
	$.validator.addMethod("validPattern", function(value, element, validPattern) {
		return this.optional(element) || validPattern.test(value);
	});

	//validator instance for signup form
	$('#signup-form').validate({
		rules: {
			firstname: namesRules,
			lastname: namesRules,
			username: userNameRules,
			email: emailRules,
			mobile: {
				validPattern: otherPattern,
				autocapitalize: false,
				autocorrect: false,
			},
			password: passwordRules
		},
		messages: {
			firstname: firstNameMsgs,
			lastname: lastNameMsgs,
			username: userNameMsgs,
			email: emailMsgs,
			mobile: {
				validPattern: "Phone can't have the &#34; &#39; &#8220; &#8221; &#8216; &#8217; &#96; or &#180; symbols"
			},
			password: passwordMsgs
		}
	});

	//validator instance for settings form
	$('#change-form').validate({
		rules: {
			password: passwordRules,
			newFirstname: {
				validPattern: otherPattern,
				autocapitalize: false,
				autocorrect: false,
			},
			newLastname: {
				validPattern: otherPattern,
				autocapitalize: false,
				autocorrect: false,
			},
			newUsername: {
				validPattern: userNamePattern,
				autocapitalize: false,
				autocorrect: false,
			},
			newEmail: {
				email: true,
			},
			newPassword: {
				minlength: 8,
				validPattern: otherPattern
			}
		},
		messages: {
			password: passwordMsgs,
			newFirstname: {
				validPattern: "First name can't have the &#34; &#39; &#8220; &#8221; &#8216; &#8217; &#96; or &#180; symbols"
			},
			newLastname: {
				validPattern: "Last name can't have the &#34; &#39; &#8220; &#8221; &#8216; &#8217; &#96; or &#180; symbols"
			},
			newUsername: {
				validPattern: "Username name can't have the @ &#34; &#39; &#8220; &#8221; &#8216; &#8217; &#96; or &#180; symbols"
			},
			newPassword: {
				validPattern: "Password can't have the &#34; &#39; &#8220; &#8221; &#8216; &#8217; &#96; or &#180; symbols",
				minlength: 'Password must be at least 8 characters.'
			}
		}
	});

	//validator instance for login form
	$('#login-form').validate({
		rules: {
			credential: namesRules,
			password: passwordRules
		},
		messages: {
			credential: {
				required: 'This field is required.',
				validPattern: "This field can't have the @ &#34; &#39; &#8220; &#8221; &#8216; &#8217; &#96; or &#180; symbols"
			},
			password: passwordMsgs
		}
	});

	//validator instance for reset-request form
	$('#reset-request-form').validate({
		rules: {
			credential: namesRules
		},
		messages: {
			credential: {
				required: 'This field is required.',
				validPattern: "This field can't have the @ &#34; &#39; &#8220; &#8221; &#8216; &#8217; &#96; or &#180; symbols"
			}
		}
	});

	//validator instance for reset form
	$('#reset-form').validate({
		rules: {
			password: passwordRules
		},
		messages: {
			password: passwordMsgs
		}
	});





	$(document).off('click', '.hide-show span').on('click', '.hide-show span', hideShow);

	changeToPasswordFormat($('#login-form'));
	changeToPasswordFormat($('#signup-form'));

});
