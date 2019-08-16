class Aluno {
 //o public já escondeu o atributo nome: string CRIANDO CLASSE 
    constructor(public nome: string){}
    exibir() {
        console.log("Nome:" + this.nome)
    }
}




//Criando objetos

let ronqui = new Aluno("Rafael Ronqui")


ronqui.exibir()