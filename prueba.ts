
//let msj = "Hola Mundo";
//document.getElementById("container").innerHTML = holaMundo(msj);

var etiqueta = <HTMLElement>document.getElementById("container");

var nombre:string = "Sebastian";
var edad:number = 55;
var programador:boolean = true;
var langs:Array<string> = ["PHP", "Ecmascript", "Java"];
var anything:any;

etiqueta.innerHTML = nombre + " " + edad + " " + programador + " " + langs[0];

anything = "Sebastian";

var devuelveNumero = (num:any) => {
return "Hola " + num;
}

console.log(devuelveNumero(1));

