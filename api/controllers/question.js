const Question = require('../model/question');

exports.question_create = function (req, res, next){
  let question = new Question(
    {
      questions: req.body.questions,
      user: req.body.user
    }
  );

  question.save(function (err){
    if(err){
      return next(err);
    }
    res.send('Question has been asked');
  })
};
exports.question_details = function (req, res) {
    Product.findById(req.params.id, function (err, question) {
        if (err) return next(err);
        res.send(question);
    })
};
exports.question_update = function (req, res) {
    Product.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, question) {
        if (err) return next(err);
        res.send('Question updated.');
    });
};

exports.question_delete = function (req, res) {
    Product.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};
