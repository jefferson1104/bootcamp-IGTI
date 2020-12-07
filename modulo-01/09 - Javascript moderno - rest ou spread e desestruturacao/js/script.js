window.addEventListener('load', () => {
  doSpread();
  doRest();
  doDesestructuring();
})


/*
  exemplo de uso do operador "..." (spread), nesse exemplo abaixo vamos
  unir em um novo array apenas pessoas casadas, retirando de outro array.

  neste exemplo tambem usamos o metodo filter.
*/
function doSpread() {
  const marriedMen = people.results.filter(
    person => person.name.title === 'Mr'
  );

  const marriedWomen = people.results.filter(
    person => person.name.title === 'Ms'
  );

  //somando tudo utilizando o spreead.
  const marriedPeople = [...marriedMen, ...marriedWomen];

  console.log(marriedPeople);
}


/*
  exemplo utilizando o operador "..."(rest) agrupar valores em um array
  este exemplo ciramos uma funcao de soma/multiplicacao infinita
*/
function doRest() {
  console.log(infiniteSum(1, 2));
  console.log(infiniteSum(1, 2, 1000));
  console.log(infiniteSum(5, 10, 15, 20, 25));
}

function infiniteSum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0)
}


/* 
  abaixo vemos um exemplo de desestruturacao de um objeto/array, para pegar
  seusvalores de uma boa pratica deixar o codigo mais legivel.
*/
function doDesestructuring() {
  const first = people.results[0];

  //forma  ruim e repetitivar de pegar os valores das propriedades
  //const username = first.login.username;
  //const password = first.login.password;

  //usando desestruturacao
  const { username, password } = first.login;
  console.log(username, password);



}

