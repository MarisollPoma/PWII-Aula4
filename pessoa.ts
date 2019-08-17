

export class Pessoa {
        peso: number 
        altura: number 

    imc () {
    return this.peso /(this.altura * this.altura)
    }

    classificar() {
        if (this.imc() < 18.5) {
        return "Abaixo do peso"
        } else if (this.imc() <= 24.9) {
        return "Peso normal"
        } else if (this.imc() <= 29.9) {
            return "Pré-obesidade"
        } else if (this.imc() <= 34.9) {
            return "Obesidade Grau I"
        }else if (this.imc() <= 39.9 ) {
            return "Obesidade Grau II"
        } else if (this.imc() > 40.0 ) {
            return "Obesidade Grau III"
        }
    }

}

//export {Pessoa as Pes,}


