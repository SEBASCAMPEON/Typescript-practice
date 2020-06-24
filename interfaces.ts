export interface CocheBase {
    showInfo(): String;
}

export class Vehiculo implements CocheBase{
    constructor(protected placa: String, protected color: String) {
        this.color = color;
        this.placa = placa;
    }
    showInfo(){
        return "";
    }


}

const vehi = new Vehiculo("ADC123456", "Azul");
