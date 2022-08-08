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
    const dateValue = date.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password_checkValue = password_check.value.trim();


    if (usernameValue===''){
        setErrorFor(username,'Username cannot be blank');
    }
    else{
        setSuccessFor(username);
    }
    if (dateValue===''){
        setErrorFor(date,'Date of birth cannot be blank');
    }
    else{
        setSuccessFor(date);
    }

    if (emailValue===''){
        setErrorFor(email,'Email cannot be blank');
    }
    else if(!emailValue.match(/^[A-z0-9\-_]{1,}@[A-z0-9\-_]{1,}\.[A-z0-9\-_]{1,}$/)){
        setErrorFor(email, 'Email format is not correct')
    }
    else{
        setSuccessFor(email);
    }

    if (passwordValue===''){
        setErrorFor(password,'Password cannot be blank');
    }

    else if(!isStrong(passwordValue)){
        setErrorFor(password, 'Password is not strong')

    }
    else{
        setSuccessFor(password);
    }


    if (password_checkValue===''){
        setErrorFor(password_check,'Please, confirm password');
    }
    else if(passwordValue!=password_checkValue){
        setErrorFor(password_check, 'Passwords don\'t match')
    }
    else{
        setSuccessFor(password_check);
    }

}
function isStrong(pass){
    var isStrong = false;

    if(pass.length >5 && 
        pass.match(/[A-Z]{1,}/) &&
        pass.match(/[a-z]{1,}/) &&
        pass.match(/[0-9]{1,}/) &&
        pass.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{1,}/))
    {
        isStrong=true;
        return isStrong;
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
