var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Coche = /** @class */ (function () {
    function Coche() {
    }
    Coche.prototype.getColor = function () {
        return this.color;
    };
    Coche.prototype.setColor = function (color) {
        this.color = color;
    };
    Coche.prototype.getModelo = function () {
        return this.modelu;
    };
    Coche.prototype.setModelo = function (modelu) {
        this.modelu = modelu;
    };
    Coche.prototype.showInfo = function () {
        return "";
    };
    return Coche;
}());
var coche = new Coche();
coche.setColor("zul");
coche.setModelo("BMW");
console.log(coche.getColor() + " " + coche.getModelo());
var CocheBot = /** @class */ (function () {
    function CocheBot(color, modelo) {
        this.color = color;
        this.modelo = modelo;
        color = this.color;
        modelo = this.modelo;
    }
    CocheBot.prototype.mostrarinfo = function () {
        console.log("El auto de marca " + this.modelo + " es " + this.color);
    };
    return CocheBot;
}());
var autoc = new CocheBot("Amarillo", "Mercedez");
var auto_2 = new CocheBot("Rojo", "Lamborgini");
autoc.mostrarinfo();
auto_2.mostrarinfo();
var Auto = /** @class */ (function () {
    function Auto(color, marca) {
        this.color = color;
        this.marca = marca;
    }
    Auto.prototype.mostrar = function () {
        console.log(this.color + " " + this.marca);
    };
    return Auto;
}());
var AutoBot = /** @class */ (function (_super) {
    __extends(AutoBot, _super);
    function AutoBot(color, marca, velocidad) {
        var _this = _super.call(this, color, marca) || this;
        _this.velocidad = velocidad;
        _this.velocidad = velocidad;
        return _this;
    }
    AutoBot.prototype.operacion = function () {
        this.marca = "Arigato";
    };
    return AutoBot;
}(Auto));
var car = new AutoBot("Yellow", "Tesla", 56);
car.mostrar();
