"use strict";
exports.__esModule = true;
var Vehiculo = /** @class */ (function () {
    function Vehiculo(placa, color) {
        this.placa = placa;
        this.color = color;
        this.color = color;
        this.placa = placa;
    }
    Vehiculo.prototype.showInfo = function () {
        return "";
    };
    return Vehiculo;
}());
exports.Vehiculo = Vehiculo;
var vehi = new Vehiculo("ADC123456", "Azul");
