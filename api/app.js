var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var post = require('./routes/post');
// Let Question = require('./routes/question');

//connection to mongo db
mongoose.connect('mongodb://localhost/nodeKb');
let db = mongoose.connection;
//check connection
db.once('open',function(){
  console.log('Connected to db');
})
//error checking for mongo db connection
db.on('error', function(err){
  console.log(err);
});
//calling the routed models

//App initiation
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', indexRouter);
app.use('/api/users', usersRouter);
// app.use('/api/addpost', postRouter);

app.post('/addpost', function (req, res) {
  var question = req.body.question;
  var author = req.body.author;
  post.addQuestion(question, author ,function(result){
    res.send(result);
  });
})
// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

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
