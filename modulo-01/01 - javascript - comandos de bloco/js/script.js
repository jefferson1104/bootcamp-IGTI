/* ESTRUTURAS DE DECISAO */
//estrutura de decisao IF ELSE
var a = 7;
var b = 6;
if (a > b) {
  console.log(a + ' e maior que ' + b);
} else {
  if( a < b ) {
    console.log(a + ' e menor que ' + b);
  } else {
    console.log(a + ' e igual a ' + b);
  }
}

//estrutura de decisao IF ELSE resumido
if (a < b) console.log(a + ' e maior que ' + b);
else if (a < b) console.log(a + ' e menor que ' + b);
else console.log(a + ' e igual a ' + b);

//operador ternario
a = 8;
b = 9
var resposta = a > b ? 'Maior' : a < b ? 'Menor' : 'Igual';
console.log(resposta);

//estrutura de decisaoswitch case
var dia = 1;
var number = '';
switch (dia) {
  case 1: number = 'Domingo'; break;
  case 2: number = 'Segunda'; break;
  case 3: number = 'Terca'; break;
  case 4: number = 'Quarta'; break;
  case 5: number = 'Quinta'; break;
  case 6: number = 'Sexta'; break;
  case 7: number = 'Sabado'; break;
  default: number = 'Dia invalido';
}
console.log(number);

//operador ternario
var diaSemana = 
  dia === 1 
    ? 'Domingo' 
    : dia === 2 ? 'Segunda' 
    : dia === 3 ? 'Terca'
    : dia === 4 ? 'Quarta'
    : dia === 5 ? 'Quinta'
    : dia === 6 ? 'Sexta'
    : dia === 7 ? 'Sabado'
    : 'Dia invalido';
console.log(diaSemana);


/* ESTRUTURAS DE REPETICAO */
//estrutura de repeticao WHILE
var numeroAtual = 0;

while (numeroAtual < 10) {
  numeroAtual++;
  console.log(numeroAtual);
}


//estrutura de repeticao com DO WHILE
var numeroAtual = 1;
var soma = 0;
do {  
  soma =  soma + numeroAtual;
  //tambem podemos utilizar: soma += numeroAtual;
  numeroAtual++;
} while (numeroAtual <= 10);
console.log('A soma e ' + soma);


//estrutura de repeticao com FOR
var soma = 0;
for(numeroAtual = 1; numeroAtual <= 10; numeroAtual++) {
  soma += numeroAtual;
  //soma = soma + numeroAtual;
}
console.log('A soma e ' + soma);









