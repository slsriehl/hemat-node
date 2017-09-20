const Nightmare = require('nightmare');

module.exports = function(evaluate) {
  Nightmare()
    .goto('localhost:5000')
    .evaluate(evaluate);
}
