var express =  require('express');
var path = require('path');

var app = express();

app.use(express.static(path.resolve(__dirname, 'public')));

app.listen(3000, function() {
  console.log('server is connected');
});