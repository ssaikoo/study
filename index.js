/*
var express = require('express');
var app = express();

app.set('view engine','ejs'); // 1
app.use(express.static(__dirname + '/public'));

app.get('/hello', function(req,res){ // 2
  res.render('hello', {name:req.query.nameQuery});
});

app.get('/hello/:nameParam', function(req,res){ // 3
  res.render('hello', {name:req.params.nameParam});
});

var port = 3000;
app.listen(port, function(){
  console.log('server on! http://localhost:'+port);
});
*/
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'hangil',
  password : 'hangil',
  port     : 3306,
  database : 'test_1'
});

connection.connect();

connection.query('SELECT * from Persons', function(err, rows, fields) {
  if (!err)
    console.log('The solution is: ', rows);
  else
    console.log('Error while performing Query.', err);
});

connection.end();
