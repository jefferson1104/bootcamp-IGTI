/* querySelector() 
  * Utilizamos o querySelector para selecionar
  * ELEMENTOS: h1, h2, p, span, e etc...
  * CLASSES: <div class="minha-classe">  e etc...
  * IDs: <div id="meu-id">  e etc...
*/
var title = document.querySelector('h1');
title.textContent = 'Javascript aprendendo sobre manipulacao de DOM';


/* 
  querySelectorAll()
  utilizamos para selecionar tudo dentro de um elemento, classe ou iD
  cria-se uma NodeList.
*/
var personalDataArray = document.querySelectorAll('.personal-data');
console.log(personalDataArray);


/* 
  Array.from()
  transforma tudo que foi selecionado pelo querySelectorAll() em um array
  em outras palavras transforma o NodeList em um array.
*/
personalDataArray =  Array.from(personalDataArray);
console.log(personalDataArray);


/* 
  exemplo de uso do querySelector, querySelectorall(), data.length,
  classList.add e classList.remove
*/
//modificando conteudo atraves de uma class
var data =  Array.from(document.querySelectorAll('.personal-data'));
for(var i = 0; i < data.length; i++) {
  var currentElement =  data[i];
  currentElement.classList.add('emphasis');
}

//selecionado via elemento e adicionando class
var data =  document.querySelector('p');
data.classList.add('emphasis2');

//selecionado via class e removendo class
var data =  document.querySelector('.emphasis3');
data.classList.remove('emphasis3');