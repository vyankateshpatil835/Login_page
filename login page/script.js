
const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const age = document.getElementById('age');
const number = document.getElementById('number');
const password = document.getElementById('password');
const confirms = document.getElementById('confirms');

form.addEventListener('submit', e => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    // trim to remove the whitespaces
    const nameValue = name.value.trim();
    const emailValue = email.value.trim();
    const ageValue = age.value.trim();
    const numberValue = number.value.trim();
    const passwordValue = password.value.trim();
    const confirmsValue = confirms.value.trim();

    if (nameValue === '') {
        setErrorFor(name, 'Please enter your name');
    } else {
        setSuccessFor(name);
    }

    if (emailValue === '') {
        setErrorFor(email, 'Please enter your email');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Email not valid');
    } else {
        setSuccessFor(email);
    }
    if (ageValue === '') {
        setErrorFor(age, 'Please enter your age');
    // } else if (!isAge(ageValue)) {
    //     setErrorFor(age, 'Email not valid');
    } else {
        setSuccessFor(age);
    }
    if (numberValue === '') {
        setErrorFor(number, 'Please enter your email');
    // } else if (!isNumber(numberValue)) {
    //     setErrorFor(number, 'number not valid');
    } else {
        setSuccessFor(number);
    }

    if (passwordValue === '') {
        setErrorFor(password, 'Please enter password');
    } else if (!isPassword(passwordValue)) {
        setErrorFor(password, 'atleast one number, one uppercase, lowercase letter, and atleast 8 character');
    }else {
        setSuccessFor(password);
    }

    if (confirmsValue === '') {
        setErrorFor(confirms, 'Please re-enter password');
    } else if (!isConfirms(confirmsValue)) {
        setErrorFor(confirms, 'Invalid password');
    }else if (passwordValue !== confirmsValue) {
        setErrorFor(confirms, 'Passwords does not match');
    } else {
        setSuccessFor(confirms);
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isPassword(password){  
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);
}

function isConfirms(confirms){  
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(confirms);
}

