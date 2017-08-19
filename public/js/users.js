
//store a session cookie in the browser.  also use to delete a cookie from a destroyed session by setting the value to null.
var createCookie = function(name, value, days) {
	var expires;
	if(days) {
		var date = new Date();
		date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
		expires = "; expires=" + date.toGMTString();
	} else {
		expires = "";
	}
	document.cookie = name + "=" + value + expires + "; path=/";
}


//retrieve a cookie from the browser to send to the server
var readCookie = function(cookieName) {
	var cookies = " " + document.cookie;
	var a = cookies.split(';');
	console.log(a);
	for(var i = 0; i < a.length; i++) {
		var b = a[i].split('=');
		console.log(b);
		if(b[0] == " " + cookieName) {
			console.log(b[1]);
			return b[1];
		}
	}
	return null;
}
