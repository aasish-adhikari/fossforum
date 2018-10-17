var createError = require('http-errors');
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var question = require('./routes/index')

var post = require('./routes/index');
// Let Question = require('./routes/question');

//connection to mongo db
// mongoose.connect('mongodb://localhost/nodeKb');
// let db = mongoose.connection;
// //check connection
// db.once('open',function(){
//   console.log('Connected to db');
// })
// //error checking for mongo db connection
// db.on('error', function(err){
//   console.log(err);
// });
//calling the routed models

//mongoose deployments
// let dev_db_url = 'mongodb://aasishadk:abcd1234@ds133360.mlab.com:33360/question';
// let mongoDB = process.env.MONGODB_URI || dev_db_url;
// mongoose.connect(mongoDB);
mongoose.connect('mongodb://aasishadk:abcd1234@ds133360.mlab.com:33360/question', { useNewUrlParser: true });
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//App initiation
var app = express();
app.use(express.json());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.use('/api', indexRouter);
// app.use('/api/users', usersRouter);
app.use('/api/add', question);
// app.use('/api/addpost', postRouter);

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
app.set('port', process.env.PORT || 3030);
app.listen(app.get('port'));
module.exports = app;
