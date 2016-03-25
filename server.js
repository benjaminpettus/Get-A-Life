var express =  require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static(path.resolve(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended:false}));
//CHECK: need bodyParser.json also?

app.get('/maps', function(req, res) {
  console.log('Im getting');
  res.send('I\'m getting');
});

app.post('/events', function(req, res) {
  console.log('req.body', req.body);
  res.send('I\'m posting');
});

app.listen(3000, function() {
  console.log('server is connected');
});