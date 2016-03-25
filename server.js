var express =  require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static(path.resolve(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended:false}));
//CHECK: need bodyParser.json also?

// app.set('views', 'views');
app.set('view engine', 'html');

app.get('/login', function (req, res){
  res.redirect('/templates/login.html');
});

app.post('/events', function(req, res){
  console.log(req.body);
  res.redirect('/templates/create-event.html');
});

app.listen(3000, function() {
  console.log('server is connected');
});