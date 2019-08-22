"use strict";
//import para executar 
exports.__esModule = true;
//import{Pessoa} from "./pessoa"
//let resultado = new Pessoa()
//resultado.peso = 100
//resultado.altura = 1.53
//console.log (resultado.imc())
//console.log(resultado.classificar()) 
var viagem_1 = require("./viagem");
var mari = new viagem_1.Viagem();
mari.tempoGasto = 2;
mari.velocidadeMedia = 100;
mari.rendimentoVeiculo = 10;
console.log(mari.distancia());
console.log(mari.consumo());
