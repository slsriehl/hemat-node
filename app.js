// ++++++ dev tools ++++++
const util = require('util'),
    moment = require('moment');

// ++++++ General Express config ++++++
const express = require('express'),
    bodyParser = require('body-parser'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    hbs = require('express-handlebars'),
    app = express();

let secretKey;
if (process.env.SECRET) {
    secretKey = process.env.SECRET;
} else {
    secretKey = require('./config/secret');
}

app.use(express.static(__dirname + '/public'));
app.use(logger("dev"));
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use(cookieParser(secretKey));

//++++++ Handlebars config ++++++

app.engine('hbs', hbs({
    extname: '.hbs',
    defaultLayout: 'main',
    layoutsDir: __dirname + '/views/layouts/',
    partialsDir: __dirname + '/views/partials/',
    helpers: {
        stripeRows: require('./views/helpers/stripe-rows'),
        hideReferences: require('./views/helpers/hide-references')
    }
}));
app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

//++++++ express sessions ++++++
const session = require('express-session'),
    database = require('./models').sequelize,
    SequelStore = require('connect-session-sequelize')(session.Store),
    modelName = 'UserSessions';

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
    store: new SequelStore({
        db: database,
        table: modelName
    }),
    resave: true,
    saveUninitialized: false,
    //secure in deployment
    cookie: {
        secure: false,
        maxAge: 1000 * 60 * 60 * 24 * 3,
        expires: false
    }
}));

//++++++ middleware for unauth system messages ++++++
let unAuthMsg = require('./routes/middleware/logged-out-messages');
app.use(unAuthMsg);

// ++++++ Express routes ++++++
const userRoutes = require('./routes/user');

const reportsRoutes = require('./routes/reports');

const capRoutes = require('./routes/pages/cap');
const hemePathRoutes = require('./routes/pages/heme-path');
const giPathRoutes = require('./routes/pages/gi-path');
const clinPathRoutes = require('./routes/pages/clin-path');
const surgPathRoutes = require('./routes/pages/surg-path');
const autopsyRoutes = require('./routes/pages/autopsy');

app.use(userRoutes);

app.use(reportsRoutes);

app.use(capRoutes);
app.use(hemePathRoutes);
app.use(giPathRoutes);
app.use(clinPathRoutes);
app.use(surgPathRoutes);
app.use(autopsyRoutes);

module.exports = app;
