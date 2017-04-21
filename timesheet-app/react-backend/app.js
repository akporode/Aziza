var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');
var debug = require('debug')('timesheet-server');

var index = require('./routes/index');
var users = require('./routes/users');

var mongoose = require('mongoose');

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
mongoose.connect('mongodb://localhost:27017/test');

var Mixed = mongoose.Schema.Types.Mixed;
var ObjectId = mongoose.Schema.Types.ObjectId;


//timesheet models
var timeSheetSchema = mongoose.Schema({
  id: { type: Number },
  nameOfWeek: { type: String },
  endOfWeek: { type: String },
  date: { type: String },
  inOut: { type: String },
  dayName: { type: String },
  hours: { type: Number }
}, { _id: false });

var weekSchema = mongoose.Schema({
  id: { type: String },
  firstName: { type: String },
  lastName: { type: String },
  email: { type: String },
  timeSheet: [timeSheetSchema]

});

mongoose.model("timesheets", weekSchema)
/*
* get all timesheets
*/
app.get('/timesheets', function (req, res) {
  debug('we got here timesheets request %s', "shemi");
  mongoose.model('timesheets').find(function (err, timesheets) {
    res.send(timesheets);
  });
});

/*
* save timesheet for a week
*/
app.post('/postTimesheets', function (req, res) {

  debug(req.body);

  var timesheet = req.body.timeSheet;

  mongoose.model('timesheets').update(
    {
      "email": req.body.email,
      "week": req.body.week
    },
    req.body
    ,
    { new: false }
    ,
    function (err, raw) {
      if (err) {
        console.log(err);
      }
      debug('timesheet update response from Mongo was ', raw);
    });

  res.status(200).send(req.body);
});

/*    
* get timesheet by email and week
*/
app.get('/timesheets/:email/:week', function (req, res) {
  mongoose.model('timesheets').find(
    { "week": req.params.week, "email": req.params.email }
    ,

    function (err, timesheets) {
      if (err) {
        console.log(err);
      }
      res.type('application/json');
      res.send(timesheets);
    });
});

/*
* get timesheet weeks 
*/
app.get('/weeks/:email', function (req, res) {
  mongoose.model('timesheets').find(
    { "email": req.params.email }, { week: 1 },
    function (err, timesheets) {
      if (err) {
        console.log(err);
      }
      res.type('application/json');
      res.send(timesheets);
    });
});


/*
* get timesheet by email
*/
app.get('/timesheets/:email', function (req, res) {
  mongoose.model('timesheets').aggregate([
    { $match: { "id": req.params.week, "email": req.params.email } }
  ],

    function (err, timesheets) {
      if (err) {
        console.log(err);
      }
      res.type('application/json');
      res.send(timesheets);
    });
});



app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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

module.exports = app;


