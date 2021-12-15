var mysql = require('mysql');

var connection = mysql.createConnection({host:"localhost",user:"root",password:"1Iluvyou",database:"private_user"});

var query = "insert into users (firstName,lastName,password) value?";
var values = [
  ["Wylcharles","Pierre","123"],
  ["Steven","Uno","456"],
  ["George","Peltier","789"],
  ["Tina","Turner","159"],
  ["Beyonce","Queen","1"],
  ["Rihanna","Brown","753"]
]


connection.connect(function(err){
  if(err) throw err;
  console.log("Connected!");
//console.log(connection)
  // Write to the database
  // connection.query(query,[values] ,function(err,answer,field){
  //   if(err) throw err;
  //   console.log(answer);
  // })
});

GetData();
async function GetData(){ 
  const response = await fetch(connection.query("select * from users",(err,answer) => {
    if(err) throw err;
    console.log(answer);
  }));
}