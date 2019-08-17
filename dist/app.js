"use strict";
//import para executar 
exports.__esModule = true;
var pessoa_1 = require("./pessoa");
var resultado = new pessoa_1.Pessoa();
resultado.peso = 68;
resultado.altura = 1.74;
console.log(resultado.imc());
console.log(resultado.classificar());
