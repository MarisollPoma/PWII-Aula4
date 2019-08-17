"use strict";
exports.__esModule = true;
var Viagem = /** @class */ (function () {
    function Viagem() {
    }
    Viagem.prototype.distancia = function () {
        return this.tempoGasto * this.velocidadeMedia;
    };
    Viagem.prototype.consumo = function () {
        return this.distancia() / this.rendimentoVeiculo;
    };
    return Viagem;
}());
exports.Viagem = Viagem;
