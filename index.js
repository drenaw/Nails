var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');
var morgan      = require('morgan');
var mongoose    = require('mongoose');
var passport	= require('passport');
var config      = require('./config/database');
var User        = require('./app/models/user');
var port        = process.env.PORT || 8080;
var jwt         = require('jwt-simple');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(passport.initialize());

mongoose.connect(config.database);
mongoose.connection.on('connected', function () {
  console.log('CONNECTED');
})
 
// Routes
app.get('/', function(req, res) {
  res.send('Hello World');
});
 
app.listen(port);