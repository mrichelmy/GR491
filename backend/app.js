var createError = require('http-errors');
var express = require('express');
var logger = require('morgan');
var path = require('path');
var mongoose = require('mongoose');
require('dotenv').config();

/** ROUTER */ 
var indexRouter = require('./routes/index');
var projectRouter = require('./routes/projectRouter');

/** DB */
const connect = mongoose.connect(process.env.DB_URL);
connect.then((db) => {
    console.log('Connected to the server');
  }, (err) => {
    console.log(err);
  })

/** MIDDLEWARE */
var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', indexRouter);
app.use('/projects',projectRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
  });
// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });
  
module.exports = app;