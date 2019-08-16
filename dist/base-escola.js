"use strict";
exports.__esModule = true;
var Aluno = /** @class */ (function () {
    //o public já escondeu o atributo nome: string CRIANDO CLASSE 
    //EXPORT , se não por ele não entende 
    function Aluno(nome) {
        this.nome = nome;
    }
    Aluno.prototype.exibir = function () {
        console.log("Nome:" + this.nome);
    };
    return Aluno;
}());
exports.Aluno = Aluno;
exports.Alu = Aluno;
