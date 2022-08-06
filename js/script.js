const form = document.getElementById("form");
const username = document.getElementById("username");
const date = document.getElementById("date");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password_check = document.getElementById("password-check");

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    checkInputs();
});

function checkInputs(){
    const usernameValue = username.value.trim() ; // trim() erase whitespace
    // const dateValue = date.value.trim();
    // const emailValue = email.value.trim();
    // const passwordValue = password.value.trim();
    // const password_checkValue = password_check.value.trim();


    if (usernameValue===''){
        setErrorFor(username,'Username cannot be blank');
    }
    else{
        setSuccessFor(username);
    }

}
function setErrorFor(input, message){
        const formControl = input.parentElement; // .form-control
        const small = formControl.querySelector('small');

        // add error message inside of small tag
        small.innerText = message;

        // formControl.className += " error"
        formControl.className = 'form-control error'
}


function setSuccessFor(input){
    const formControl = input.parentElement; // .form-control



    // formControl.className += " error"
    formControl.className = 'form-control success'
}
