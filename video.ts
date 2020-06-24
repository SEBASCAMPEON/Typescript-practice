class Video {

    //es obligatorio usar el modificador cuando lo declaras dentro del contructor
    constructor(protected nombre: String, protected version: String) {
        this.nombre = nombre;
        this.version = version;
    }

    setNombre(nombre) {
        this.nombre = nombre;
    }
    getNombre() {
        return this.nombre;
    }

    setVersion(version) {
        this.version = version
    }
    getVersion() {
        return this.version;
    }
}


class EditorVideo extends Video {
    constructor(nombre: String, version: String) {
        super(nombre, version);
    }

    showInfo() {
        return document.write(`${this.nombre} ${this.version} <br>`);
    }
    concat() {
        return `Software ${this.nombre} Versión ${this.version}`;
    }

}

//Creamos el array donde guardaremos todo

let arrayProgramas: Array<String> = [];

//Función de guardado en array y asignación de variables, instanciando la clase Video
function Save() {
    //Capturar datos
    let nombre = (<HTMLInputElement>document.getElementById("nombre")).value.toString();
    let version = (<HTMLInputElement>document.getElementById("version")).value.toString();
    //Instanciar clase EditorVideo
    let program = new EditorVideo(nombre, version);
    //Guardar en Arreglo
    arrayProgramas.push(program.concat());
    console.log(program);
    //Ahora mostramos en la vista lo que guardamos, dentro del metodo Save... si
    console.log(arrayProgramas);
    //Recorremos el arrego para definir lo que vamos a mostrar asignandolo a la variable list
    let list = "";
    for (var i = 0; i < arrayProgramas.length; i++) {
        list = list + '<li>' + arrayProgramas[i] + '</li>';
    }
    //Mostramos en donde esta el identificador listado
    var listado = <HTMLAnchorElement>document.getElementById("listado");
    listado.innerHTML = list;


}


