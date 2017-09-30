const app = require('./app');

// ++++++ SERVER LISTEN ++++++
const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, function () {
  console.log('express server listening to your mom at port ' + PORT);
});
