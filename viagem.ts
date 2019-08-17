export class Viagem {
    tempoGasto: number 
    velocidadeMedia: number 
    rendimentoVeiculo: number

    distancia(){
    return this.tempoGasto * this.velocidadeMedia
   
    }


    consumo() {
    return this.distancia() / this.rendimentoVeiculo
    }
}
