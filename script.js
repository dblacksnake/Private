var passwordText = document.querySelector('.passwordText');
var password = 'Reptiles'
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
    let text = passwordText.value 
    if(text === password){
     
        Swal.fire({
            icon: 'success',
            title: 'Get ready to PARTY',
            showConfirmButton:false,
            html: '<a href="https://www.google.com/maps/place/4584+Saint+Denis+St,+Montreal,+QC+H2J+2L3/@45.5244324,-73.5864767,17z/data=!3m1!4b1!4m5!3m4!1s0x4cc91bd117216047:0x9f42cb8d73a0e0a5!8m2!3d45.5244287!4d-73.5842827">4584 rue St-denis</a>',
            background:'rgba(255, 255, 255,0.65)'
          })
      }
      else{
        Swal.fire({
            icon: 'error',
            title: 'Hi ' + firstName.value + ' ' + lastName.value +  ' the address is :',
            showConfirmButton:false,
            background:'rgba(255, 255, 255,0.65)'
          })
  
      }
    
}


function BDConnnection (){

}