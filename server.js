var express     = require('express');
var app         = express();

var cors        = require('cors');
var bodyParser  = require('body-parser');
var morgan      = require('morgan');
var path        = require('path');


var port        = 3000;

var routes      = require('./routes/routes');

// CORS Middleware
app.use(cors());



// Body Pars Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// log to console
app.use(morgan('dev'));

// Route (GET http://localhost:3000)
app.use(express.static(path.join(__dirname, 'public')));


// connect the api routes under /api/*
app.use('/', routes);

//Start the server
app.listen(port, function () {
    console.log('App listening on port: ', port)
});
