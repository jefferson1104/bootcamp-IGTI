/* 
  COntinuando os estudos do modulo de file system porem dessa vez entendendo
  como criar e ler JSON.

  trabalhamos com json, utilizando o JSON.stringfy() para escrever o conteudo
  JSON.parse() para ler o conteudo.
  
  Nao utilzamos o append file com JSON pois ele replica o conteudo, entao dessa
  forma nos arquivo JSON utilizamos o writeFile para sobrescrever o arquivo com
  o conteudo modificado.
*/

import {promises as fs} from "fs";

//UTILIZANDO DE MODO ASSINCRONO COM async/await
writeReadJson();

async function writeReadJson() {
  try {
   
    //Escrevendo com os valores iniciais
    const arrayCarros = [ "Gol", "Palio", "Sandero"];
    const objeto = {
      carros: arrayCarros
    };
    await fs.writeFile("teste.json", JSON.stringify(objeto));


    //Fazendo a leitura do conteudo atual
    const data  = JSON.parse(await fs.readFile("teste.json"));


    //modificando o conteudo
    data.carros.push("HB20"); 
    

    //Sobrescrevendo o arquivo com o conteudo modificado
    await fs.writeFile("teste.json", JSON.stringify(data));

  } catch(err) {
    console.log(err);
  }
}