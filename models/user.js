var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
  username: String,
  email: String,
  fullname: String,
  age: Number,
  location: String,
  gender: String
});

module.exports = mongoose.model('User', User);
