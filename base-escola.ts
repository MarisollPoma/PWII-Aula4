 export class Aluno {
    //o public já escondeu o atributo nome: string CRIANDO CLASSE 
    //EXPORT , se não por ele não entende 
       constructor(public nome: string){}
       exibir() {
           console.log("Nome:" + this.nome)
       }
   }

   export {Aluno as Alu,}