/*
  ###### setTimout
  Utilizamos quando queremos fazer algo momentaneo 
  utilizamos o setTimout.

  ###### setInterval
  Utilizamos quando queremos fazer algo repetitivo 
  utilizamos o setInterval.


  No exemplo abaixo vamos utilizar a programacao assincrona com
  essas duas funcoes e criar um contador que nele vamos utilizar 
  o setInterval para contar os segundos, e o setTimout para exibir 
  0,5 (meio segundo) segundos no numero que for multiplo de 5.

  tambem vamos utilizar a funcao clearInterval para criar uma interrupcao
  que vai parar o contador em determinado segundo, neste caso quando
  50 segundos vamos parar.
*/

window.addEventListener('load', function() {
  const timer = document.querySelector('.timer');
  let count = 0;

  //contador utilizando setInterval
  const interval = setInterval(() => {
    timer.textContent =  `${++count} Segundos` ;

    //utilizando o clearInterval para parar o contador em 20segundos
    if(count === 50) {
      this.clearInterval(interval);
      return;
    }

    //utilizando o setTimout para colocar meio segundo em todo multiplo de 5
    if(count % 5 === 0) {
      setTimeout(() => {
        timer.textContent = `${count},5 Segundos`;
      }, 500);
    }
  }, 1000);
});
















