/* 
   ##PROMISES
  Sao construcoes de uma execusao que retorna algo no futuro, ou seja uma
  promessa de uma execusao, ela pode ser resolvida (OK) ou pode ser tambem
  rejeitada(Erro), a promise resolvida pode ser interceptada com o "then" e
  a promise rejeitada pode ser interceptada com o "catch".


  ##ASYNC/AWAIT
  Melhoram a legibilidade do codigo, entrega uma impressao de que o codigo fica 
  sincrono (mas e apenas uma impressao), deve-se decorar a funcao com "async" e
  toda a instrucao relacionada a promise deve ser precedida de await.


  ##EXEMPLO DE REQUISICAO DE UMA API
  Exemplo de como pegar os dados retornados em JSON de uma API.
  no exemplo abaixo pegamos os dados do meu usuario na api do github
  podemos ver que com o "fetch" fazemos a requisicao e temos no processo
  duas callbacks,no primeiro "then" retorna um binario, no segundo "then"
  retorna os dados json, a requisicao retorna uma promise e com ela resolvida
  usamos o then para interceptar e para mostrar um possivel erro caso ela seja
  rejeitada usamos o "catch"
*/


window.addEventListener('load', function() {
  //funcao para fazer a requisicao da api
  doFetch();
  doFetchAsyncAwait();

  /*
    Resolvendo o teste de criacao de promise para entender o funcionamento
    aplicando tambem o async/await diferenciando os codigos.
  */
  executeDivisionPromise();
  executeDivisionPromiseAsyncAwait();
});


//Fazendo a requisicao da api
function doFetch() {    
  fetch('https://api.github.com/users/jefferson1104').then(res => {
    res.json().then(data => {
      showData(data);
    });
  }).catch(error => {
    console.log('Erro na requisicao')
  });  
}

//Fazendo a requisicao da api com async/await
async function doFetchAsyncAwait () {
  const res = await fetch('https://api.github.com/users/jefferson1104');
  const json = await res.json();
  console.log(json);
}



//Mostrando os dados da api em uma div no navegador.
function showData(data) {
  const user = document.querySelector('#user');
  user.textContent = `${data.login} ${data.name}`;
}



/*
  Criando uma promise para dividir 2 numeros, exemplo para exercitar e entender
  como funciona as promises
*/
function divisionPromise(a, b) {
  return new Promise((resolve, reject) => {
    if (b === 0) {
      reject('Nao e possivel dividir por 0');
    }

    resolve(a / b);
  });
}



//exemplo retornando a promise.
function executeDivisionPromise() {
  divisionPromise(12, 6).then(result => {
    console.log(result);
  });

  divisionPromise(12, 0).then(result => {
    console.log(result);
  }).catch(errorMessage => {
    console.log('Falha na divisao' + ' ' + errorMessage)
  });
}

//exemplo retornando a promise usando async/await
async function executeDivisionPromiseAsyncAwait() {
  const division = await divisionPromise(12, 2);
  console.log(division);
}
