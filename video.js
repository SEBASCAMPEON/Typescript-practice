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
var Video = /** @class */ (function () {
    //es obligatorio usar el modificador cuando lo declaras dentro del contructor
    function Video(nombre, version) {
        this.nombre = nombre;
        this.version = version;
        this.nombre = nombre;
        this.version = version;
    }
    Video.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Video.prototype.getNombre = function () {
        return this.nombre;
    };
    Video.prototype.setVersion = function (version) {
        this.version = version;
    };
    Video.prototype.getVersion = function () {
        return this.version;
    };
    return Video;
}());
var EditorVideo = /** @class */ (function (_super) {
    __extends(EditorVideo, _super);
    function EditorVideo(nombre, version) {
        return _super.call(this, nombre, version) || this;
    }
    EditorVideo.prototype.showInfo = function () {
        return document.write(this.nombre + " " + this.version + " <br>");
    };
    EditorVideo.prototype.concat = function () {
        return "Software " + this.nombre + " Versi\u00F3n " + this.version;
    };
    return EditorVideo;
}(Video));
//Creamos el array donde guardaremos todo
var arrayProgramas = [];
//Función de guardado en array y asignación de variables, instanciando la clase Video
function Save() {
    //Capturar datos
    var nombre = document.getElementById("nombre").value.toString();
    var version = document.getElementById("version").value.toString();
    //Instanciar clase EditorVideo
    var program = new EditorVideo(nombre, version);
    //Guardar en Arreglo
    arrayProgramas.push(program.concat());
    console.log(program);
    //Ahora mostramos en la vista lo que guardamos, dentro del metodo Save... si
    console.log(arrayProgramas);
    //Recorremos el arrego para definir lo que vamos a mostrar asignandolo a la variable list
    var list = "";
    for (var i = 0; i < arrayProgramas.length; i++) {
        list = list + '<li>' + arrayProgramas[i] + '</li>';
    }
    //Mostramos en donde esta el identificador listado
    var listado = document.getElementById("listado");
    listado.innerHTML = list;
}
