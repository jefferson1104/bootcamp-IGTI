//exemplo de como exportar um modulo utilizando o formato antigo CommonJS

function soma(a, b){
  return a + b;
}

function subtracao(a, b) {
  return a - b;
}

module.exports = {soma, subtracao};