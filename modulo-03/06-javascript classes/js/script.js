/*
  Criando classe animal, lembrando que nao escrevemos a palavra function, pois
  classes nao tem funcoes, e sim metodos.
*/
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} cantando...`);
  }
}


/*
  Criando a classe e Dog com o atributo type, herdando de animal
*/
class Dog extends Animal {
  constructor(name, type) {
    super(name);

    this.type = type;
  }


  speak() {
    console.log(`${this.name} (${this.type}) latindo...`);
  }

}


/*
  Criando a classe e Dog com o atributo type, herdando de animal
*/
class Cat extends Animal {
  constructor(name, type) {
    super(name);

    this.type = type;
  }


  speak() {
    console.log(`${this.name} (${this.type}) Miando...`);
  }

}


//instanciando as classes 
const animal = new Animal('Zeus');
const dog = new Dog('Ragnar', 'Pitbull');
const cat = new Cat('Garfield', 'Frajola');


//testando as classes
animal.speak();
dog.speak();
cat.speak();