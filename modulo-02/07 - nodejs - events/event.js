/*
  Este modulo do nodejs permite voce emitir/escutar eventos no programa
*/

import { EventEmitter } from "events";

//instanciando
const eventEmitter = new EventEmitter();


/*
  Criando um evento com o nome de testEvent, e passando um objeto na callback
*/
eventEmitter.on("testEvent", obj => {
  console.log(obj);
});


export default eventEmitter;