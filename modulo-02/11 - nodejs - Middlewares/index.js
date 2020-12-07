/*
  Funcoes middlewares sao funcoes que tem acesso ao seguinte:
  - Objeto de solicitacao (req)
  - Objeto de resposta (res)
  - proxima funcao de middleware no ciclo da requisicao e resposta do app (next)

  Elas podem executar codigo, fazer mudancas nos objetos de solicitacao,
  encerrar o cliclo e chamar a proxima funcao de middleware na pilha.

  Ela pode ser utilizada para interceptar chamadas em especifico ou qualquer 
  chamada

  Ela sao as funcoes que sao executadas quando determinada rota e atingida.


  ##### app.get ("/", function(req, res, next)) {}
  (get) - O metodo HTTP para qual a funcao de middleware e aplicada

  ("/") - Caminho da rota para qual a funcao de middleware e aplicada
  
  (function) - A funcao de middleware

  (req) - Argumento de solicitacao HTTP para a funcao de middleware, chamado de
  "req" por convencao
  
  (res) - Argumento de resposta HTTP para a funcao middlware, chamado de "res"
  por convencao
  
  (next) - Argumento de 


  FONTE: ExpressJS.com
*/

//## USANDO MIDDLEWARES A NIVEL DE APLICACAO
import express  from "express";

const app = express();
app.use(express.json());

app.use((req, res, next) => {
  console.log(new Date());
  next();
})

app.get("/teste", (req, res) => {
  res.send();
});




//## USANDO MIDDLEWARES A NIVEL DE ROTEADORES
import carrosRouter from "./carrosRouter.js";

//tudo que for /carros sera direcionado a este carrosRouter
app.use("/carros", carrosRouter);




app.listen(3000, () => {
  console.log("API STARTED!")
});







