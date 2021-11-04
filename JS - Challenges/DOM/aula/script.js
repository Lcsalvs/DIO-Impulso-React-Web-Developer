const h1 = document.getElementById('title');
h1.textContent = 'Hello World!'
document.body.style.background = 'orange'

/* document.createElement(element) --- Cria um novo elemento HTML
document.removeChild(element) --- Remove um elemento
document.appendChild(element) --- Add um elemento
document.replaceChild(new, old) --- Substitui um elemento */

//Event Listener
const button = document.getElementsByClassName('btn');
btn.addEventListener('click', clickIt());

function clickIt() {
  alert('You did it!')
}