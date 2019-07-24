 

const models = require('../../models');

const helpers = require('../../controllers/general-helpers');

let middleware = (req, res, next) => {
  
  console.log('+++ Cookie Warning: ' + req.session.showCookieWarning + ' +++');

  if(req.session.privacyAcknowledged === undefined) req.session.privacyAcknowledged = false;

  if(req.session.privacyAcknowledged) {
    req.session.privacyMessage = [];
    return next();
  }

  if(req.session.privacyMessage && req.session.privacyMessage.length) return next();

  req.session.privacyMessage = [{
    id: 'privacyMessage',
    clickId: 'acknowledgePrivacy',
    text: 'This site uses cookies to offer you a better browsing experience. By continuing to access the web site, you agree that we will store personal data in a cookie as outlined in our <a href="https://app.termly.io/document/privacy-policy/b3e36054-05aa-43b4-b7ab-0cc0697fa6ba" target="_blank">Privacy Policy</a>, which is also accessible from the sidebar.'
  }];

  return next();

	
}

module.exports = middleware;
