// ++++++ dev tools ++++++
const util = require('util'),
    moment = require('moment');

const dotenv = process.env.NODE_ENV != "production" ? require('dotenv').config({BASIC: 'basic', path: `./.env`}) : undefined;

Promise = require('bluebird');

// ++++++ General Express config ++++++
const express = require('express'),
    bodyParser = require('body-parser'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    hbs = require('express-handlebars'),
    app = express();

const secretKey = process.env.SECRET || require('./config/secret');

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

//++++++ middleware to show cookie warning until dismissed ++++++
let showCookieWarning = require('./routes/middleware/show-cookie-warning');
app.use(showCookieWarning);

// ++++++ Express routes ++++++

const routes = {
    user: require('./routes/user'),
    talks: require('./routes/pages/talks'),
    reports: require('./routes/reports'),
    clinmedia: require('./routes/pages/clin-media'),
    surgmedia: require('./routes/pages/surg-media'),
    autopsy: require('./routes/pages/autopsy'),
    hemePath: require('./routes/pages/heme-path'),
    giPath: require('./routes/pages/gi-path'),
    clinPath: require('./routes/pages/clin-path'),
    surgPath: require('./routes/pages/surg-path'),
    placRef: require('./routes/pages/plac-ref'),
    cap: require('./routes/pages/cap'),
    capAuth: require('./routes/pages/cap-auth'),
}

//mounted with no prefix

app.use('/', routes.user);
app.use('/', routes.placRef);
app.use('/', routes.capAuth);
app.use('/', routes.reports);
app.use('/', routes.surgPath);
app.use('/', routes.surgmedia);
app.use('/', routes.talks);
app.use('/', routes.placRef);

//mounted with a prefix --> routes here will be prefixed with the '/...' passed as the first argument below

app.use('/cap', routes.cap);
app.use('/heme-path', routes.hemePath);
app.use('/gi-path', routes.giPath);
app.use('/clin-path', routes.clinPath);
app.use('/autopsy', routes.autopsy);
app.use('/clin-media', routes.clinmedia);


module.exports = app;
