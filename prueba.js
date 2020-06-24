//let msj = "Hola Mundo";
//document.getElementById("container").innerHTML = holaMundo(msj);
var etiqueta = document.getElementById("container");
var nombre = "Sebastian";
var edad = 55;
var programador = true;
var langs = ["PHP", "Ecmascript", "Java"];
var anything;
etiqueta.innerHTML = nombre + " " + edad + " " + programador + " " + langs[0];
anything = "Sebastian";
var devuelveNumero = function (num) {
    return "Hola " + num;
};
console.log(devuelveNumero(1));
