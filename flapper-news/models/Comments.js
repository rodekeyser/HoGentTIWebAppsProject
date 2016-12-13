//var mongoose = require('mongoose');
var pg = require('pg');

//var CommentSchema = new mongoose.Schema({
var CommentSchema = new pg.Schema({ 
  body: String,
  author: String,
  upvotes: {type: Number, default: 0},
  //post: {type: mongoose.Schema.Types.ObjectId, ref: 'Post'}
  post: {type: pg.Schema.Types.ObjectId, ref: 'Post'}
});

CommentSchema.methods.upvote = function(cb)
{
  this.upvotes += 1;
  this.save(cb);
};
pg.model('Comment', CommentSchema);
//mongoose.model('Comment', CommentSchema);