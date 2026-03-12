
const contact = document.querySelector('.contact-form') ;

let name = document.getElementById('name')
let email = document.getElementById('email')

document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

   
    const errorElements = document.querySelectorAll('.error-message');
    errorElements.forEach(el => el.style.display = 'none');

    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

   
    let isValid = true;

    // Name validation
    if (name === '') {
        document.getElementById('nameError').textContent = 'Name is required';
        document.getElementById('nameError').style.display = 'block';
        isValid = false;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '' || !emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Email is required';
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    }

    

    // age validation
    if (message === '') {
        document.getElementById('messageError').textContent = 'Age is required';
        document.getElementById('messageError').style.display = 'block';
        isValid = false;
    }
 
    // If form is it says this
    if (isValid) {
        alert('Form submitted successfully!');

    }
});
let age = document.getElementById('age')

contact.addEventListener('submit', (e)=>{
    e.preventDefault();
    
    let formData = {
        name: name.value, 
        email: email.value,
        age: age.value
    }    

    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/');
    xhr.setRequestHeader('content-type', 'application/json')
  xhr.onload = function() {
    console.log(xhr.responseText)
    if(xhr.responseText == 'success'){
        alert('Email Sent')
        name.value = ''
        email.value = ''
        age.value = ''
    } else{
        alert('ERROR')
    }
  }

xhr.send(JSON.stringify(formData))

}) 


  
