//Boa pratica
window.addEventListener('load', () => {
  doMap();
  doFilter();
  doForEach();
  doReduce();
  doFind();
  doSome();
  doEvery();
  doSort();
});


/*
 exemplo utilizando metodo "map" para gerar um novo array apenas
 com os dados que voce quer extrair de um outro array
*/
function doMap() {
  const nameEmailArray = people.results.map(person => {
    return {
      name: person.name,
      email: person.email
    };
  });
  
  console.log('exemplo metodo map', nameEmailArray);

  return nameEmailArray;
}


/*
  exemplo utilizando o metodo "filter" gerando um novo array com 
  informacoes  de acordo com o que quero filtrar.
*/
function doFilter() {
  const olderThan50 = people.results.filter(person => {
    return person.dob.age > 50;
  });

  console.log('exemplo metodo filter', olderThan50);
}


/* 
  exemplo utilizando o "forEach" incluindo uma nova propriedade
  no objeto, nesse exemplo vamos utilizar  funcao doMap de cima, 
  e vamos inserir uma propriedade chamada nameSize onde vamos colocar
  a quantidade de letras do name, somando nome,sobrenome e lastname.
*/
function doForEach() {
  const mappedPeople = doMap();

  mappedPeople.forEach(person => {
    person.nameSize = 
    person.name.title.length + 
    person.name.first.length + 
    person.name.last.length;
  });

  console.log('exemplo metodo forEach', mappedPeople);
}



/*
 exemplo utilizando o metodo "reduce" este metodo retorna apenas 1 valor. 
 neste exemplo ele vai somar a idade de todas as pessoas desse array.
 */
function doReduce() {
  const totalAges = people.results.reduce((accumulator, current) => {
    return accumulator + current.dob.age;
  }, 0);

  console.log('exemplo metodo reduce', totalAges);

  
  
  //exemplo de um for que faz o mesmo calculo, porem fazmos com reduce usando menos codigo
  /*
  let sumAges = 0;

  for (let i = 0; i < people.results.length; i++) {
    var current =  people.results[i];
    sumAges += current.dob.age;
  }
  console.log(sumAges);
  */
}


/* 
 exemplo usando o metodo "find" retorna apenas o primeiro valor 
 que estamos procurando no array, de acordo com o parametro que vamos usar 
 para fazer essa busca, neste exemplo vamos procurar um usuario de MG.
*/
function doFind() {
  const found = people.results.find(person => {
    return person.location.state === 'Minas Gerais';
  });

  console.log('exemplo metodo find', found);
}

/*
  exemplo do metodo "some" ele faz uma verificacao dentro do array
  se existe uma uma propriedade com determinado valor e retorna true
  ou false para aquela verificacao, no exemplo abaixo vamos verficar
  se existe dentro do array se existe o estado Amazonas dentro da propriedade
  state.
*/
function doSome() {
  const found = people.results.some(person => {
    return person.location.state === 'Amazonas';
  })

  console.log('exemplo metodo some', found);
}



/*
  exemplo do metodo "every" ele faz uma verificacao se em uma 
  determinada propriedade do array esta igual para todos, e retorna
  true ou false, neste exemplo vamos verificar se o nat de todos os usuarios 
  sao US.
*/
function doEvery() {
  const every = people.results.every(person => {
    return person.nat === 'US';
  })

  console.log('exemplo metodo every', every);
}



/*
  exemplo do metodo "sort" ordenando os valores de uma propriedade do objeto,
  neste exemplo vamos utilizar o retorno da funcao map, e usar o sort para
  ordenador os nomes dos usuairos  em ordem alfabetica, usando junto o metodo 
  filter para pegar apenas quem comeca com a letra A.
*/
function doSort() {
  const mappedNames = people.results
  .map(person => {
    return {
      name: person.name.first
    };
  })
  .filter(person => person.name.startsWith('A'))
  .sort((a, b) => {
    return a.name.localeCompare(b.name);
  });

  console.log('exemplo metodo sort', mappedNames);
}





















