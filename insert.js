var mysql = require('mysql');

var connection = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"!23Iluvyou"
});

connection.connect(function(err){
  if(err) throw err;
  console.log("Connected!");
});