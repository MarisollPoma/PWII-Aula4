
//import para executar 


import{Pessoa} from "./pessoa"

let resultado = new Pessoa()


resultado.peso = 68
resultado.altura = 1.74

console.log (resultado.imc())
console.log(resultado.classificar()) 