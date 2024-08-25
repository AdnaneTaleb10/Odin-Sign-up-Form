let password = document.querySelector('#password');
let confirmPassword = document.querySelector('#confirm-password');
let createAccountButton = document.querySelector('button');
let inputs = document.querySelectorAll('input');

inputs.forEach(input => {
    input.style.border = '2px solid black';

    input.addEventListener('input', () => {
        if (input.checkValidity()) {
            input.style.border = '2px solid green'; 
        } else {
            input.style.border = '2px solid red'; 
        }
    });
});

createAccountButton.addEventListener('click', (e) => {
    if(password.value !== '' && password.value !== confirmPassword.value){
        confirmPassword.style.border = '2px solid red';
        e.preventDefault();
    }
});