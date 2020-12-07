/*
  O modulo HTTP do nodejs serve para criar-se um servidor web, que possa
  receber requisicoes.

  //para testar utilizamos o comando no terminal: node index.js

  NOTA: toda modificacao feita no arquivo para funcionar e necessario restartar
  o servidor, ou seja parar e rodar denovo o comando "node index.js" para que
  isso fique automatico instalamos o pacote "nodemon"

  voce pode instalar apenas no projeto executando: npm install nodemon
  ou voce pode instalar de forma global no computador: npm install nodemon -g

  PARA EXECUTAR COM NODEMON USE O COMANDO: nodemon index.js
*/

import http from "http";

http.createServer((req, res) => {
  //verificando se o metodo da conexao e GET na url localhost:8080/teste
  if ((req.method === "GET") && (req.url === "/teste")) {
    res.write("GET /teste executado !");
  } else {
    res.write("Hello World!");
  }

  res.statusCode = 200;
  res.end();
}).listen(9090);