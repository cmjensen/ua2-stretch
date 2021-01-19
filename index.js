const formBtn = document.getElementById('close-form')

const form = document.getElementsByClassName('form')

function toggler() {
    form.classList.toggle('hide');
    if(formBtn.innerText === 'X') {
        formBtn.innerText = '+'
    } else formBtn = 'X'
}

const nameInput = document.getElementsByName('name')
const emailInput = document.getElementsByName('email')

const emailList = []

function validateForm() {
    if(nameInput.value && emailInput.value === false) {
        nameInput.style.border = "2px solid red";
        emailInput.style.border = "2px solid red";
        alert("You must enter a name and an email address to subscribe!");
    } else if(nameInput === false) {
        nameInput.style.border = "2px solid red";
        alert("Please enter a name to subscribe!");
    } else if(emailInput === false) {
        emailInput.style.border = "2px solid red";
        alert("Please enter an email to subscribe!");
    } else emailList.push(nameInput.name, emailInput.name)
    displayThankYou()
}

form.addEventListener('submit', function(event){event.preventDefault()}, validateForm())

const formContainer = document.getElementsByClassName('form-container');

function displayThankYou() {
    formContainer.innerText = 'Thank you for subscribing!';
    
}

function removeMessage(){
    setTimeout(function(){formContainer.remove()}, 3000);
}

nameInput.addEventListener('change', function(event){nameInput.style.border='none'})

emailInput.addEventListener('change', function(event){emailInput.style.border='none'})

const cart = document.createElement('div')

const main = document.getElementsByName('main')

const cartItems = 0;

// function addToCart() {
//     if(cartItems === 0;) {
//         cartItems = 1;
//         cart.setAttribute('class', 'cart-display')
//         cart.innerText = 'Your Cart: 1 item'
//         main.appendChild(cart)
//     } else cartItems +=1
//     cart.innerText = `Your Cart: ${cartItems} items`
// }