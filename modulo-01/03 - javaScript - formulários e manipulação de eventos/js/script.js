//alterando valor de um input no formulario
var input1 = document.querySelector("#input1");
input1.value = 'Jefferson Soares';


/* MANIPULACAO DE EVENTOS */

/* 
  trabalhando com eventos no javascript
  usando um evento para contar todos os dados
  digitados em um campo input, e aprensentando
  em um span na tela.

  trabalhando tambem com preventDefault para controlar o 
  submit do formulario.
*/
window.addEventListener('load', start); //utilizamos como boa pratica para evitar problemas com eventos antes do total carregamento da pagina

function start() {
  console.log('Pagina totalmente carregada.');

  var nameInput = document.querySelector('#nameInput');
  nameInput.addEventListener('keyup', countName);

  var form = document.querySelector('form');
  form.addEventListener('submit', preventSubmit)
}


function countName(event) {
  var count = event.target.value;
  var span = document.querySelector('#nameLenght');
  span.textContent = count.length;
}


function preventSubmit(event) {
  event.preventDefault();

  var nameInput =  document.querySelector('#nameInput');
  alert(nameInput.value + ' cadastrado com sucesso!');
}
