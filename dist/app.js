var Aluno = /** @class */ (function () {
    //o public já escondeu o atributo nome: string CRIANDO CLASSE 
    function Aluno(nome) {
        this.nome = nome;
    }
    Aluno.prototype.exibir = function () {
        console.log("Nome:" + this.nome);
    };
    return Aluno;
}());
//Criando objetos
var ronqui = new Aluno("Rafael Ronqui");
ronqui.exibir();
