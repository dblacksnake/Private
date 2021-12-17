// Include the server in your file
const express = require('express');

const app = express();
 
//Port to listen too
app.listen(3000, (err, res) => {
  console.log("Listening to port 3000");
});


//Add the html to the serve !
app.use(express.static('public'))

//Receive Json 
app.use(express.json({limit:'100mb'}));


//Post to the server
app.post('/api', (req, res) => {
  console.log(req.body);
  res.json({
    status: 'success',
    password: req.body.password,
    firstName: req.body.firstName,
    lastName: req.body.lastName
  });
});