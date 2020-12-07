import express from "express";

const app = express();
app.use(express.json());

//definindo a pasta acesse "http://localhost:3000/logo.jpg"
app.use(express.static("public"));

//definindo um caminho virtual acesse "http://localhost:3000/images/logo.jpg"
app.use("/images", express.static("public"));


app.listen(3000, () => {
  console.log("API STARTED!")
})