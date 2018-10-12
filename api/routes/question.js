let mongoose = require('mongoose');

let questionSchema = mongoose.Schema({
  question:{
    type: String,
    required: true
  },
  author:{
    type=String,
    required: true
  },
  liked:{
    type: boolean
  },
  totalLike:{
    type: int
  }
});


let question = module.exports = mongoose.mmodel('question', questionSchema);
