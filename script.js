const email = document.querySelector('#email')
const password = document.querySelector('#password');
const inValidEmail = document.querySelector('#inValidEmail');
const inValidPassword = document.querySelector('#inValidPassword');
const validEmailAndPassword = document.querySelector('#validEmailAndPassword');
const submitBtn = document.querySelector('#submitBtn');
const backBtn=document.querySelector('#backBtn');
const okayBtn= document.querySelector('#okayBtn');



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

    allGoodToGo();
    setModal();

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

    allGoodToGo()
    setModal();

})

backBtn.addEventListener('click',(e)=>{
    email.value="";
    password.value="";
    validEmail=false;
    validPassword=false;
    allGoodToGo();
    setModal();
})

okayBtn.addEventListener('click',(e)=>{
    alert('successful signup!');
})

function allGoodToGo() {
    if (validEmail && validPassword)
        validEmailAndPassword.style.display = 'block';
    else validEmailAndPassword.style.display = 'none';
}


function setModal() {
    if (validEmail && validPassword)
        submitBtn.setAttribute('data-bs-toggle', 'modal');
    else submitBtn.setAttribute('data-bs-toggle', '')
}

