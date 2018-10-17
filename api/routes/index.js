var express = require('express');
var router = express.Router();
var questionController = require('../controllers/question');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/create', questionController.question_create);
router.get('/:id', questionController.question_details);
router.delete('/:id/delete', questionController.question_delete);

module.exports = router;
