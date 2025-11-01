const email = document.querySelector('#email')
const password = document.querySelector('#password');
const inValidEmail = document.querySelector('#inValidEmail');
const inValidPassword = document.querySelector('#inValidPassword');
const validEmailAndPassword=document.querySelector('#validEmailAndPassword');

let validEmail = false;
let validPassword = false;

email.addEventListener('input', (e) => {
    let value = email.value.trim().toLowerCase();
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(value)) {
        validEmail = false;
        inValidEmail.style.display = "block";
    }

    else {
        validEmail = true;
        inValidEmail.style.display = 'none';
    }
    if(validEmail&&validPassword)
    validEmailAndPassword.style.display='block';
    else validEmailAndPassword.style.display='none';

})

password.addEventListener('input', (e) => {
    let value = password.value;
    if (value.length <= 8) {
        validPassword = false;
        inValidPassword.style.display = 'block';
    }
    else {
        validPassword = true;
        inValidPassword.style.display = 'none';
    }

    if(validEmail&&validPassword)
    validEmailAndPassword.style.display='block';
    else validEmailAndPassword.style.display='none';

})