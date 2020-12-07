console.log('Hello World!!')

/*
exemplo de uma funcao que retorna numeros que sao multiplos de 3 e 5
enquanto for menor que 1000 e guarda em um array.
*/
const numero = 1000;
const multiplos = [];
for (let i = 3; i < numero; i++) {
  if ((i % 3 === 0) || (i % 5 === 0)) {
    multiplos.push(i);
  }
}

console.log(multiplos);
