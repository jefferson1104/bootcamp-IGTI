/*
  ##MODULO FILESYSTEM (FS)
  Este modulo serve para fazer escrita e leitura de arquivos utilizando nodeJS
*/

/*
  ## writeFile (ESCREVENDO / CRIANDO UM ARQUIVO)
  Utilizamos o "writeFile" para criar um novo arquivo e escrevemos o conteudo nele, note 
  que utilizamos 3 parametros sendo:
  1 - nome do arquivo e tipo.
  2 - conteudo a ser escrito
  3 - uma funcao callback para retornar um erro caso houver ou um  OK.

  ## readFile (LENDO O ARQUIVO)
  Utilizamos "readFile"  para ler arquivos note que nele utilizamos tambem 3 
  parametros sendo esses:
  1 - diretorio/nome do arquivo
  2 - tipo / formatacao do arquivo
  3 - callback funcao retornando erro ou dados do arquivo para printar

  ## appendFile (incluir dados no arquivo ja criado)
  Utilizamos o "appendFile" para incluir/concatenar um conteudo dentro do nosso
  arquivo existente, tambem utilizamos nessa funcao 3 parametros sendo eles:
  1 - diretorio/nome do arquivo
  2 - conteudo a ser incluido/concatenado (utilizei o \n para quebrar linha)
  3 - uma callback com uma funcao 

  ATENCAOOOOOOO
  Todo o modelo abaixo seria utilizando callbacks, utilizando as funcoes sync e
  nao precisamos da callback, recomendamos utilizar o metodo 01 pois ele 
  utilizando as callbacks fica assincrono, o metodo 02 e sincrono e nao 
  recomenda-se utilizar
*/


/*

import fs from 'fs';

//=========> UTILIZANDO DE FORMA ASSINCRONAS COM  CALLBACKS
//criando o arquivo
fs.writeFile("teste01.txt", "Bla bla bla...", function(err) {
  if (err) {
    console.log(err);
  } else {
    //incluindo novos dados no arquivo
    fs.appendFile("teste01.txt", "\nTeste append File", function(err) {
      if (err) {
        console.log(err);
      } else {
        //fazendo leitura do arquivo
        fs.readFile("teste01.txt", "utf-8", function(err, data){
          if (err) {
            console.log(err);
          } else {
            console.log(data);
          }
        });
      }
    });
  }
});

//=========> UTILIZANDO DE FORMA SINCRONA 
try {
  fs.writeFileSync("teste02.txt", "blu blu blu");
  const data =  fs.readFileSync("teste02.txt", "utf-8");
  console.log(data);
} catch(err) {
  console.log(err);
}

*/


/*
  Outros dois  metodos seria utilizando promises, este e o mais recomendados que temos
  principalmente se for pra utilizar em API`S.
*/
import {promises as fs} from "fs";

// UTILIZANDO DE MODO ASSINCRONO COM O .then
fs.writeFile("teste03.txt", "blablabla...").then(() => {
  fs.appendFile("teste03.txt", "\nTestando o append file").then(() => {
    fs.readFile("teste03.txt", "utf-8").then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    });
  }).catch(err => {
    console.log(err);
  });
}).catch(err => {
  console.log(err);
});


//UTILIZANDO DE MODO ASSINCRONO COM async/await **MELHOR METODO E MAIS MODERNO
init();

async function init() {
  try {
    await fs.writeFile("teste04.txt", "blablabla...");
    await fs.appendFile("teste04.txt", "\nTestando o append file");
    const data =  await fs.readFile("teste04.txt", "utf-8");
    console.log(data);
  } catch(err) {
    console.log(err);
  }
}
