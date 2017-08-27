// ++++++ dev tools ++++++
const util		= require('util'),
			moment	= require('moment');

// ++++++ General Express config ++++++
const express         = require('express'),
      bodyParser      = require('body-parser'),
      logger          = require('morgan'),
			cookieParser		= require('cookie-parser'),
			hbs							= require('express-handlebars'),
			secretKey 			= require('./config/secret'),
      app             = express();

app.use(logger("dev"));
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.use(cookieParser(secretKey));
app.use(express.static(__dirname + '/public'));

//++++++ Handlebars config ++++++

app.engine('hbs', hbs({
  extname: '.hbs',
  defaultLayout: 'main',
  layoutsDir: __dirname + '/views/layouts/',
  partialsDir: __dirname + '/views/partials/',
	helpers: {
		stripeRows: require('./views/helpers/stripe-rows')
	}
}));
app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

//++++++ express sessions ++++++
const session 		= require('express-session'),
			database 		= require('./models').sequelize,
 			SequelStore	= require('connect-sequelize')(session),
			modelName		= 'UserSessions';

// const setSecret = (secretEnvVar) => {
// 	if(secretEnvVar) {
// 		return secretEnvVar;
// 	} else {
//
// 		return secretKey;
// 	}
// }

//set session secret with env var, process.env.___
app.use(session({
  secret: secretKey,
  store: new SequelStore(database, {}, modelName),
  resave: true,
  saveUninitialized: false,
	//secure in deployment
	// cookie: {
	// 	secure: true
	// }
}));

// ++++++ Express routes ++++++
const userRoutes = require('./routes/user');

const reportsRoutes = require('./routes/reports');

const capRoutes = require('./routes/pages/cap');
const hemePathRoutes = require('./routes/pages/heme-path');
const giPathRoutes = require('./routes/pages/gi-path');
const clinPathRoutes = require('./routes/pages/clin-path');
const surgPathRoutes = require('./routes/pages/surg-path');
//const autopsyRoutes = require('./routes/pages/autopsy');

app.use(userRoutes);

app.use(reportsRoutes);

app.use(capRoutes);
app.use(hemePathRoutes);
app.use(giPathRoutes);
app.use(clinPathRoutes);
app.use(surgPathRoutes);
// app.use(autopsyRoutes);


// ++++++ SERVER LISTEN ++++++
const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, function () {
  console.log('express server listening to your mom at port ' + PORT);
});

module.exports = server;
