var express =  require('express');
var path = require('path');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Get_A_Life');

var eventSchema = mongoose.Schema({
  title: String,
  created_by: String,
  description: String,
  latitude: Number,
  longitude: Number,
  start_time: Date,
  posts: Array
});
var Event = mongoose.model('Event', eventSchema);

var userSchema = mongoose.Schema({
  username: String,
  password: String,
});
var User = mongoose.model('User', userSchema);

var app = express();

app.use(express.static(path.resolve(__dirname, 'public')));

app.listen(3000, function() {
  console.log('server is connected');
});