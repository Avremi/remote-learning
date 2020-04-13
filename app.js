let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');
let courseRouter=require('./routes/courses-router')
let studentRouter=require('./routes/students-router')
let bodyParser = require('body-parser');

let mongoose = require('mongoose');
var multer = require('multer');
var upload = multer();

let app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


app.use(express.json());
app.use(upload.array());
app.use('/1', express.static(path.join(__dirname, 'client-side', 'build')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/courses',courseRouter)
app.use('/students',studentRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// Connect to Mongoose and set connection variable
mongoose.connect('mongodb://localhost/remote-leaning', { useNewUrlParser: true});
var db = mongoose.connection;

// Added check for DB connection
if(!db)
    console.log("Error connecting db")
else
    console.log("Db connected successfully")


module.exports = app;
