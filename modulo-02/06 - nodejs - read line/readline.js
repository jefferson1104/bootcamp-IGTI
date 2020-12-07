/*
  O Modulo readline permite que o usuario tenha interacao com o programa
  digitando uma entrada no terminal ou no cli.
*/

import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

pergunta();

function pergunta() {
  rl.question("Digite um numero: ", numero => {
    //caso o usuario digite -1 fecha a interacao com o programa
    if (parseInt(numero) === -1) {
      rl.close();
    } else {
      //laco de repeticao que verifica os multiplos de 3 ou 5
      const multiplos = [];
      for (let i = 3; i < parseInt(numero); i++) {
        if ((i % 3 === 0) || (i % 5 === 0)) {
          multiplos.push(i);
        }
      }

      console.log(multiplos);
      pergunta();
    }
  });
}


