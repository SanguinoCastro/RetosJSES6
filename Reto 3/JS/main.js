// Creamos la variable que nos vincula con el div del html.
let divweb = document.getElementById('resultado');
//-se muestra en el div de la siguiente forma:
divweb.innerHTML = "Hola soy el div que muestra el resultado";
let defaultPrice = 100;
let defaultColor = 'Blanco';
let defaultEnergy = 'F';
let defaultweight = 5;
let defaultCharge = 5;

class electrodomesticos {
    constructor(precioBase = defaultPrice, color = defaultColor, consumoEnergetico = defaultEnergy, peso = defaultweight) {
        this.precioBase = precioBase;
        this.color = this.comprobarColor(color);
        this.consumoEnergetico = this.comprobarConsumoEnergetico(consumoEnergetico);
        this.peso = peso;
    }

    get precio() {
        return this.precioBase;
    }

    get colors() {
        return this.color;
    }
    get consumo() {
        return this.consumoEnergetico;
    }
    get weight() {
        return this.peso;
    }

    comprobarConsumoEnergetico(letter) {
        letter = letter.toUpperCase();
        if (letter != 'A' && letter != 'B' && letter != 'C' && letter != 'D' && letter != 'E') {
            return 'F';
        } else {
            return letter;
        }
    }
    comprobarColor(color) {
        color = color.toLowerCase();
        if (color != 'negro' && color != 'azul' && color != 'gris') {
            return 'Blanco'
        } else {
            return color[0].toUpperCase();
        }
    }

    consumPrice() {
        let extra = 0;
        if (this.consumo == 'A'){
            extra = extra + 100;
        }else if (this.consumo == 'B'){
            extra = extra + 80;
        }else if (this.consumo == 'C'){
            extra = extra + 60;
        }else if (this.consumo == 'D'){
            extra = extra + 50;
        }else if (this.consumo == 'E'){
            extra = extra + 30;
        }else{
            extra = extra + 10;  
        }
        return extra;
    }
    
    weightPrice() {
        let extra = 0;
        if (this.peso >=0 && this.peso <=19){
            extra = extra + 10;
        }else if (this.peso >= 20 && this.peso <= 49){
            extra = extra + 50;
        }else if (this.peso >= 50 && this.peso <=79){
            extra = extra + 80;
        }else if (this.peso >= 80){
            extra = extra + 100;
        }
        return extra
    }

    precioFinal() {
        let extra 
        extra = this.precio + this.consumPrice() + this.weightPrice();
        return extra
    }
}

class lavadora extends electrodomesticos{
    constructor( precioBase, color, consumoEnergetico, peso, carga = defaultCharge){
        super(precioBase, color, consumoEnergetico, peso)
        this.carga = carga;
    };

    get charge() {
        return this.carga;
    }

    chargePrice() {
        let extra = 0;
        if (this.carga > 30){
            extra = extra + 50;
        }
        return extra
    }

    precioFinal() {
        let finalPrice = 0;
        finalPrice = this.precio + this.consumPrice() + this.weightPrice() + this.chargePrice();
        return finalPrice;
    }
}

class television extends electrodomesticos{
    constructor( precioBase, color, consumoEnergetico, peso, resolucion = 20, ultraHighDefinition = false){
        super(precioBase, color, consumoEnergetico, peso)
        this.resolucion = resolucion;
        this.ultraHighDefinition = ultraHighDefinition;
    }

    get resolution() {
        return this.resolucion;
    }

    get ultraHD() {
        return this.ultraHighDefinition;
    }

    resolutionPrice() {
        let extra = 0;
        if (this.resolucion >40){
            extra = (this.precio*30)/100;
        }else{
            extra = 0;
        }
        return extra;
    }

    ultraHDPrice() {
        let extra = 0;
        if (this.ultraHighDefinition == true){
            extra = 50
        }else{
            extra = 0;
        }
        return extra;
    }

    precioFinal() {
        let finalPrice = 0;
        finalPrice = this.precio + this.consumPrice() + this.weightPrice() + this.resolutionPrice() + this.ultraHDPrice();
        return finalPrice
    }

}

let microondas = new electrodomesticos(200, 'negro', 'A', 90);
let Lavadora = new lavadora (200, 'negro', 'A', 100, 31);
let TV = new television (100, 'negro', 'E', 20, 50, true);
console.log (`${microondas.precioFinal()}€`);
console.log (`${Lavadora.precioFinal()}€`);
console.log (`${TV.precioFinal()}€`);