import express from 'express';

//criando uma instancia do express, populando dentro da variavel chamada app
const app = express();

/*
  NOTA: Os exemplos de criacao/configuracao de rotas mostram que nas rotas
  de cada metodo como GET, POST e etc... utilizamos o primeiro parametro como 
  CAMINHO DA ROTA, e o segundo parametro uma CallBack com os nossos objetos
  req(request) e res(response)
*/

//configurando uma rota do tipo GET no projeto 
app.get("/",  (req, res) => {
  res.send("Metodo GET");
});

//configurando uma rota do tipo POST no projeto, e chamando uma funcao SOMA
app.post("/",  (req, res) => {
  const numero1 =  10;
  const numero2 =  15;
  const resultado = soma(numero1, numero2);
  res.send(`Metodo POST - Resultado soma: ${resultado}`);
});

function soma(a, b) {
  const resultado =  a + b;
  return resultado;
}

//iniciando o servidor web, neste exemplo acesse pelo navegador com "localhost:3000"
app.listen(3000, () => {
  console.log("API Started!");
});