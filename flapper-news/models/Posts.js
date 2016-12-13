//var mongoose = require('mongoose');
var pg = require('pg');

//var PostSchema = new mongoose.Schema({
  var PostSchema = new pg.Schema({
  title: String,
  link: String,
  upvotes: {type: Number, default: 0},
  //comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}]
  comments: [{type: pg.Schema.Types.ObjectId, ref: 'Comment'}]
});

PostSchema.methods.upvote = function(cb)
{
  this.upvotes += 1;
  this.save(cb);
};
pg.model('Post', PostSchema);
//mongoose.model('Post', PostSchema);