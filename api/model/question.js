var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var QuestionSchema = new Schema({
    questions: {type: String, required: true, max: 100},
    user: {type: String, required: true},
});


// Export the model
module.exports = mongoose.model('Question', QuestionSchema);
