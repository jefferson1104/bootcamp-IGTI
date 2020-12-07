import express from "express";

const app = express();
app.use(express.json());


//## ERROS DE TRATAMENTO PADRAO DO EXPRESS
app.get("/errors", (req, res) => {
  throw new Error("Error message test");
});

//## ERROS COM use(), next() E COM MUDANCA DE STATUS HTTP
app.use((err, req, res, next) => {
  console.log("Error 1")
  next(err)
});

app.use((err, req, res, next) => {
  console.log("Error 2")
  res.status(500).send("Ocorreu um erro, tente mais tarde.")
});





//## ERROS EM FUNCOES ASSINCRONAS com try & catch
app.post("/errorsAsync", async (req, res, next) => {
  try{
    throw new Error("Error message async");
  } catch (err) {
    next(err);
  } 
});


app.listen(3000, () => {
  console.log("API STARTED!");
});