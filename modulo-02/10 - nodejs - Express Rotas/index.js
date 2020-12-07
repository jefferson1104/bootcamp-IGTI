/* 
  Aprendendo mais sobre rotas, abaixo vamos ver alguns exemplos de uso
  de rotas no express.

  1 - Metodo all
  2 - Caracteres especiais
  3 - Parametros na rota
  4 - Parametros via query (QueryParams)
  5 - Next
  6 - Route
*/

import express from "express";

//instanciando o express
const app = express();

//avisando ao express que queremos capturar json
app.use(express.json());


//## ROTAS COM METODO all();
//nesta rota vamos printar em tela, qual metodo HTTP foi utilizado
app.all("/testAll", (req, res) => {
  res.send(req.method);
});


//## CARACTERES ESPECIAIS
/*
  nesta rota mostra como exemplo o uso da "?" na rota, que serve para identificar
  a rota acessando mesmo com "localhost:3000/teste" ou "localhost:3000/test"
*/
app.get("/teste?", (req, res) => {
  res.send("/teste?")
});

/*
  nesta rota mostra como exemplo o uso do "+" na rota, que serve para acessar
  infinitamente com a ultima letra do nome da rota sendo digitatada varias 
  vezes exemplo "localhost:3000/buzzzzzzzzzzzz"
*/
app.get("/buzz+", (req, res) => {
  res.send("/buzz+");
});

/*
  nesta rota mostra como exemplo o uso do "*" na rota, que serve para acessar
  qualquer conteudo da rota no lugar do * exemplo voce acessa a rota baixo com 
  "localhost:3000/one123Blue", "localhost:3000/oneABCBlue" e etc...
*/
app.get("/one*Blue", (req, res) => {
  res.send(req.path);
});

/* 
  nesta rota mostra como exemplo o uso do "()" na rota, que serve para qualquer 
  string que voce colocar dentro do parenteses sera tratado como unidade
*/
app.post("/test(ing)?", (req, res) => {
  //exemplo de como pegar um json da requisicao
  console.log(req.body);
  res.send("/test(ing)?");
});

//exemplo passando expressos regular na rota
app.get(/.*Red$/, (req, res) => {
  res.send("/.*Red$/");
})



//## PARAMETROS NAS ROTAS
app.get("/testParam/:id", (req, res) => {
  res.send(req.params.id);
})



//## ROTAS COM QUERY PARAMS
/*
  Uma query string ela tem em sua url uma chave valor, um exemplo seria
  "localhost:3000/testQuery?nome=Jefferson&sobrenome=Soares&idade=26"

  A rota recebe todos essses dados como um objeto JSON.
*/
app.get("/testQuery", (req, res) => {
  res.send(req.query);
})



// ## PARAMETRO NEXT

/*
  Com o next conseguimos permitir com que mais de uma funcao seja executada, ou
  seja com ele conseguimos executar a primeira funcao, dai chamamos o next e em 
  seguida ele executa uma segunda funcao.

  importante encerrar a requisicao retornando algo com res.send() ou parando ela
  com res.end();

  veja o exemplo abaixo.
*/
app.get("/testMultipleHandlers", (req, res, next) => {
  console.log("Callback 1");
  next();
}, (req, res) => {
  console.log("Callback 2");
  res.end();
});


// next com array
const callback1 = (req, res, next) => {
  console.log("Callback 1");
  next();
};

function callback2(req, res, next) {
  console.log("Callback 2");
  next();
}

const callback3 = (req, res) => {
  console.log("Callback 3");
  res.end();
}

app.get("/testMultipleHandlersArray", [callback1, callback2, callback3]);




//## ROTAS COM METODO route();
app.route("/testRoute")
  .get((req, res) => {
    res.send("/testeRoute GET");
  })
  .post((req, res) => {
    res.send("/testeRoute POST");
  })
  .delete((req, res) => {
    res.send("/testeRoute DELETE");
  });







//## INICIANDO SERVIDOR WEB
app.listen(3000, () => {
  console.log("API Started!!!");
});