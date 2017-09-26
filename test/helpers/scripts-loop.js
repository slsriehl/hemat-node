
const scriptHelpers = {
	scriptReverse: function(scripts, hasScripts) {
		const scriptsRev = scripts.reverse();
		for(let i = 0; i < scriptsRev.length; i++) {
			if(hasScripts) {
				$('script')[$('script').length - (i + 1)].attribs.src.should.equal(scriptsRev[i]);
			} else {
				$('script')[$('script').length - (i + 1)].attribs.src.should.not.equal(scriptsRev[i]);
			}
		}
	},
	cssReverse: function(stylesheets, hasStylesheets) {
		const cssRev = stylesheets.reverse();
		for(let i = 0; i < cssRev.length; i++) {
			if(hasStylesheets) {
				$('link')[$('link').length - (i + 1)].attribs.href.should.equal(cssRev[i]);
			} else {
				$('link')[$('link').length - (i + 1)].attribs.href.should.not.equal(cssRev[i]);
			}
		}
	}
}

module.exports = scriptHelpers;
