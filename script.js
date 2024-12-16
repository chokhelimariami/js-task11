document.getElementById('signup').addEventListener('submit' , function (event){
    event.preventDefault();


let isValid =true;
const email = document.getElementById('email').value;
const emailPattern = /^[\w-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/;
const emailError = document.getElementById('email-error');
const emailInput =document.getElementById( 'email');



if (!emailPattern.test(email)) {
     emailError.textContent ="please enter valid email";
     emailError.style.color = "red"
     emailInput.style.border= "1px solid red"
     isValid= false;
 } else {
     emailError.textContent="";
     emailInput.style.border=""
    
 }

const password = document.getElementById ( 'password').value;
const passwordPattern = /^[a-zA-Z0-9]{8,}$/ ;
const errorPass = document.getElementById ("password-error")
const passwordInput = document.getElementById('password')



if (!passwordPattern.test(password)) {
    errorPass.textContent = "enter valid password"
    passwordInput.style.border = "1px solid red "
    errorPass.style.color = "red"
    isValid = false;
} else {
    errorPass.textContent ="";
    passwordInput.style.border =""

}


const name1 = document.getElementById('name').value;
const namePattern = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
const nameError = document.getElementById('name-error')
const nameInput = document.getElementById('name')

if (!namePattern.test(name1)) {
    nameError.textContent =" enter valid name";
    nameInput.style.border= "1px solid red"
    nameError.style.color="red"
    isValid= false;

    
} else {
    nameError.textContent="";
    nameInput.style.border=""
    
}

const lastName = document.getElementById ('lastname').value;
const lastnPattern = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
const lastnameError = document.getElementById('lastname-error');
const lastnameInput = document.getElementById ('lastname')

if (!lastnPattern.test(lastName)) {
    lastnameError.textContent = 'enter valid lastname'
    lastnameError.style.color ="red"
    lastnameInput.style.border=" 1px solid red"

    isValid=false;
} else {
lastnameError.textContent="";
lastnameInput.style.border=""
    
}

if (isValid) {
    alert('submited')
    
}
 

});



