//handlebars helper to template stuff if there is a cookie that matches the session id

module.exports = (index, document) => {
	if(index%2 != 0) {
		return 'style="background-color: rgba(100, 176, 228, 0.2);"';
		return;
	} else {
		return;
	}
}
