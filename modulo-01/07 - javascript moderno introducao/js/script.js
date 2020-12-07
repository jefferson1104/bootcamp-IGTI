/* 
 como boa pratica colocar no inicio do arquivo js
 o uso do "use strict" acuse mais erros no Javascript;
*/
'use strict';

//DIFERENCAS ENTRE VAR, LET E CONST

//exemplo usando "var"
function withVar() {
  for (var i = 0; i < 10; i++) {
    console.log('var' +i);
  }

  i = 20;
  console.log(i);
}

//exemplo usando "let" onde o escopo e reduzido 
function withLet() {
  for (let i = 0; i < 10; i++) {
    console.log('let' +i);
  }

  i = 20;
  console.log(i);
}

//executando as funcoes criadas acima
withVar();
//withLet();



/*
  exemplo utilizando "const" onde nao podemos reatribuir 
  valores, torna a variavel imutavel porem nao vale para
  vetores e objetos, "const" e o modelo de declaracao
   mais recomendado a ser utilizado, na duvida declare
   sempre com "const"
*/
const c = 10;
//c = 20; // vai dar erro pois nao aceita reatribuir valor


/* 
  exemplo mostrando que para array e objetos 
  nao vale a regra e podemos reatribuir valores
*/
const d = ['1'];
console.log(d);

d.push('2');
console.log(d);





/// ARROW FUNCTIONS

//exemplo de uma  funcao
function sum(a, b) {
  return a + b;
}
console.log(sum(2, 3));

//exemplo de uma funcao reduzida
const sum2 = function(a, b) {
  return a + b;
}
console.log(sum2(5, 5));

//exemplo de Arrow Function
const sum3 = (a, b) => {
  return a + b;
};
console.log(sum3(10, 5));

/*
  exemplo de uma arrow function reduzida, 
  porem apenas quando se tem 1 unico comando,
  neste exemplo o return
*/
const sum4 = (a, b) => a + b;
console.log(sum4(10, 10));





//TEMPLATE LITERALS

const name = 'Jefferson';
const surName = 'Soares';

//forma antiga de concatenar variaveis
const text1 =  'Meu nome e ' + name + ' ' + surName;
console.log(text1);

//utilizando template literals
const text2 = `Meu nome e ${name} ${surName}`;
console.log(text2);


//DEFAULT PARAMETERS FUNCTION
const sum5 = (a, b = 10) => a + b;
console.log(sum5(2));
console.log(sum5(2, 2));