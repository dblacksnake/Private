var mysql = require('mysql');

var connection = mysql.createConnection({host:"localhost",user:"root",password:"!Iluvyou",database:"privateapp"});

connection.connect(function(err){
  if(err) throw err;
  console.log("Connected!");
});