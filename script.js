var passwordText = document.querySelector('.passwordText');
var password = '123'
var submitButton = document.querySelector('.submitButton')
var firstName = document.querySelector('.firstName');
var lastName = document.querySelector('.lastName');


function PasswordSubmit(){

   ButtonClick()
}



passwordText.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
     event.preventDefault();
    PasswordSubmit()
    }
  });

function ButtonClick(){
    let pwordText = passwordText.value.toLowerCase();
    let firstNameText = firstName.value.toLowerCase();
    let lastNameText = lastName.value.toLowerCase();

    if(pwordText === password && firstNameText === "wylcharles" && lastNameText === "pierre"){
     
        Swal.fire({
            position:'top',
            icon: 'success',
            iconColor:'green',
            title: 'Get ready to PARTY ' + firstNameText + '!',
            titleColor:'red',
            showConfirmButton:false,
            html: '<a href="https://www.google.com/maps/place/4584+Saint+Denis+St,+Montreal,+QC+H2J+2L3/@45.5244324,-73.5864767,17z/data=!3m1!4b1!4m5!3m4!1s0x4cc91bd117216047:0x9f42cb8d73a0e0a5!8m2!3d45.5244287!4d-73.5842827">4584 rue St-denis</a>',
            background:'rgba(255, 255, 255,0)'
          })
      }
      else{
        Swal.fire({
            icon: 'error',
            title: 'Hi ' + firstName.value + ' ' + lastName.value +  ' Something was not right try again!',
            showConfirmButton:false,
            background:'rgba(255, 255, 255,0.8)'
          })
  
      }
    
}

GetData();
function GetData(){ 
  // const response = await fetch(database.connection.query("select * from users",(err,answer) => {
  //   if(err) throw err;
  //   console.log(answer);
  // }));
  console.log("all");
}
