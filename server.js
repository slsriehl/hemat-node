const app = require('./app');

// ++++++ SERVER LISTEN ++++++
const PORT = process.env.PORT || 5000;

const ENV = process.env.NODE_ENV ? process.env.NODE_ENV.toUpperCase() : undefined;


if(ENV) {
  const server = app.listen(PORT, () => console.log(`${ENV} express server listening to your mom at port ${PORT}`));

} else {
  console.log(`The server didn't start because you've got problems: no NODE_ENV is set.  Things will get wonky.`);

}
