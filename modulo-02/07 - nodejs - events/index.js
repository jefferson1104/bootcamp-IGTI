import ev from './event.js';

//colocando mais uma funcao no mesmo evento
ev.on("testEvent", () => {
  console.log("ouviu tambem");
})

//Executando o evento
ev.emit("testEvent", "bla bla bla...");