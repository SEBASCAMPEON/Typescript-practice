class Coche {
    public color: String;
    public modelu: String;

    public getColor() {
        return this.color;
    }
    public setColor(color: String) {
        this.color = color;
    }

    public getModelo() {
        return this.modelu;
    }
    public setModelo(modelu: String) {
        this.modelu = modelu;
    }
        showInfo(){
        return "";
    }



}

let coche = new Coche();
coche.setColor("zul");
coche.setModelo("BMW");


console.log(coche.getColor() + " " + coche.getModelo());

class CocheBot {
    constructor(public color: String, public modelo: String) {
        color = this.color;
        modelo = this.modelo;
    }

    public mostrarinfo() {
        console.log(`El auto de marca ${this.modelo} es ${this.color}`)
    }
}


let autoc = new CocheBot("Amarillo", "Mercedez");
let auto_2 = new CocheBot("Rojo", "Lamborgini");

autoc.mostrarinfo();
auto_2.mostrarinfo();



class Auto {
    protected color:String;
    protected marca:String;
    constructor(color: String, marca: String) {
        this.color = color;
        this.marca = marca;
    }
    public mostrar(){
        console.log(this.color+" "+this.marca);
    }
}

class AutoBot extends Auto {
    
    constructor(color:String, marca:string, public velocidad:number){
        super(color, marca);
        this.velocidad = velocidad;
    }

    operacion(){
        this.marca = "Arigato";
    }
}

var car = new AutoBot("Yellow", "Tesla", 56);
car.mostrar();

