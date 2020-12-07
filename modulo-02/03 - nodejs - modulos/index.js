//exemplo mostrando o novo formato de importacao ES Module
import div from "./operacoes3.js";
import {soma, subtracao} from "./operacoes4.js";



console.log(div(10, 2));
console.log(soma(5, 2));
console.log(subtracao(15, 5));



//importando o modulo criado com o formato commmonJS
/*
const operacoes = require('./operacoes');
const multiplicacao = require('./operacoes2');

console.log(operacoes.soma(2, 3));
console.log(operacoes.subtracao(8, 5));
console.log(multiplicacao(2, 5));
*/