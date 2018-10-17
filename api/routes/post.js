var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://localhost:27017';

module.exports = {
    addQuestion: function(question, author, callback){
        MongoClient.connect(url, function(err, db) {
            db.collection('post').insertOne( {
                "question": question,
                "author": author
            },function(err, result){
                assert.equal(err, null);
                console.log("Saved the blog post details.");
                if(err == null){
                    callback(true)
                }
                else{
                    callback(false)
                }
            });
        });
    }
}
