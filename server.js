// ++++++ dev tools ++++++
const util = require('util');

// ++++++ General Express config ++++++
const express         = require('express'),
      bodyParser      = require('body-parser'),
      logger          = require('morgan'),
			hbs							= require('express-handlebars'),
      cookieParser    = require('cookie-parser'),
      app             = express();

app.use(logger("dev"));
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(__dirname + '/public'));

//++++++ Handlebars config ++++++
app.engine('hbs', hbs({
  extname: '.hbs',
  defaultLayout: 'main',
  layoutsDir: __dirname + '/views/layouts/',
  partialsDir: __dirname + '/views/partials/'
}));
app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

//++++++ express sessions ++++++
const session 		= require('express-session'),
			database 		= require('./models').sequelize,
 			SequelStore	= require('connect-sequelize')(session),
			modelName		= 'user_session';

const setSecret = (secretEnvVar) => {
	if(secretEnvVar) {
		return secretEnvVar;
	} else {
		const secretKey = require('./config/secret');
		return secretKey;
	}
}

//set session secret with env var, process.env.___
app.use(session({
  secret: setSecret(null),
  store: new SequelStore(database, {}, modelName),
  resave: true,
  saveUninitialized: true
}));

// ++++++ Express routes ++++++
//const userRoutes		= require('./routes/user'),
const testRoutes = require('./routes/tests');
const capRoutes = require('./routes/cap');
const hemePathRoutes = require('./routes/heme-path');
const giPathRoutes = require('./routes/gi-path');
const clinPathRoutes = require('./routes/clin-path');
const surgPathRoutes = require('./routes/surg-path');
const autopsyRoutes = require('./routes/autopsy');
// 			contextRoutes = require('./routes/context'),
// 			itemRoutes		= require('./routes/item');

app.use(testRoutes);
app.use(capRoutes);
app.use(hemePathRoutes);
app.use(giPathRoutes);
app.use(clinPathRoutes);
app.use(surgPathRoutes);
app.use(autopsyRoutes);
//app.use(userRoutes);
// app.use(contextRoutes);
// app.use(itemRoutes);

// ++++++ SERVER LISTEN ++++++
const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, function () {
  console.log('express server listening to your mom at port ' + PORT);
});

module.exports = server;
