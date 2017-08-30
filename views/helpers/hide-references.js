//handlebars helper to template stuff if there is a cookie that matches the session id

module.exports = (hideRefs) => {
	if(hideRefs == true) {
		return 'style="display: none;"';
		return;
	} else {
		return;
	}
}
