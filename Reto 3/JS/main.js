// Creamos la variable que nos vincula con el div del html.
let divweb = document.getElementById('resultado');
//Creamos las constantes que darán los valores por defecto.
const defaultPrice = 100;
const defaultColor = 'Blanco';
const defaultEnergy = 'F';
const defaultweight = 5;
const defaultCharge = 5;
//Creamos la clase principal electrodomesticos
class electrodomesticos {
    //esta clase tendra los siguientes atributos con sus valores por defecto:
    constructor(precioBase = defaultPrice, color = defaultColor, consumoEnergetico = defaultEnergy, peso = defaultweight) {
        this.precioBase = precioBase;
        //para dar valor a color lo pasaremos por un método que comprobará si el valor es correcto o lo dejará por el valor por defecto.
        this.color = this.comprobarColor(color);
        //para el consumo energético lo pasaremos por otro método para comprobar que e valor es correcto o también lo dejará por el valor por defecto
        this.consumoEnergetico = this.comprobarConsumoEnergetico(consumoEnergetico);
        this.peso = peso;
    }
    //Añadimos los métodos GET
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
    //Creamos el método que comprueba si la letra añadida es correcta, para ello primero pasará la letra a mayúscula y luego la pasara por un if que comprobará si la letra está entre las aceptadas y en el caso contrario la cambiará por una 'F'
    comprobarConsumoEnergetico(letter) {
        letter = letter.toUpperCase();
        if (letter != 'A' && letter != 'B' && letter != 'C' && letter != 'D' && letter != 'E') {
            return 'F';
        } else {
            return letter;
        }
    }
    //Haremos otro método que haga lo mismo con el color añadido, en este caso primero pasaremos el valor en minúsculas y luego haremos la comprobación, para añadir un extra a la hora de devolver el valor lo devolveremos con la primera letra en mayúscula.
    comprobarColor(color) {
        color = color.toLowerCase();
        if (color != 'negro' && color != 'azul' && color != 'gris') {
            return 'Blanco'
        } else {
            return color[0].toUpperCase();
        }
    }
    // Haremos el método que nos dará el precio extra al producto referente al consumo que este genera, dependiendo de la letra añadida guardará el valor en una nueva variable "extra" para luego devolverla
    consumPrice() {
        let extra = 0;
        if (this.consumo == 'A') {
            extra = extra + 100;
        } else if (this.consumo == 'B') {
            extra = extra + 80;
        } else if (this.consumo == 'C') {
            extra = extra + 60;
        } else if (this.consumo == 'D') {
            extra = extra + 50;
        } else if (this.consumo == 'E') {
            extra = extra + 30;
        } else {
            extra = extra + 10;
        }
        return extra;
    }
    // El siguiente método calcula el precio extra al producto dependiendo del peso, en este caso se le añadirá un precio u otro dependiendo de entre que rango de valores está el peso.
    weightPrice() {
        let extra = 0;
        if (this.peso >= 0 && this.peso <= 19) {
            extra = extra + 10;
        } else if (this.peso >= 20 && this.peso <= 49) {
            extra = extra + 50;
        } else if (this.peso >= 50 && this.peso <= 79) {
            extra = extra + 80;
        } else if (this.peso >= 80) {
            extra = extra + 100;
        }
        return extra
    }
    // Por ultimo dentro de la clase, hacemos el método que nos dará el precio total, cogiendo el precio base del producto y añadiendo los valores extra por consumo y peso devolviendo el precio final del producto.
    precioFinal() {
        let extra
        extra = this.precio + this.consumPrice() + this.weightPrice();
        return extra
    }
}

//Crearemos la clase lavadora que es una extensión de electrodomesticos, con los mismos atributos y añadiendo el atributo carga que también afectará al precio final.
class lavadora extends electrodomesticos {
    constructor(precioBase, color, consumoEnergetico, peso, carga = defaultCharge) {
        super(precioBase, color, consumoEnergetico, peso)
        this.carga = carga;
    };
    // el método GET de carga.
    get charge() {
        return this.carga;
    }
    // este método comprueba si la carga es mayor a 30, en caso afirmativo se añade un extra de 50€ al precio del artículo.
    chargePrice() {
        let extra = 0;
        if (this.carga > 30) {
            extra = extra + 50;
        }
        return extra
    }
    // Modificamos el método precio final en esta clase para que añada el precio extra por la carga.
    precioFinal() {
        let finalPrice = 0;
        finalPrice = this.precio + this.consumPrice() + this.weightPrice() + this.chargePrice();
        return finalPrice;
    }
}
    //Hacemos lo mismo con una nueva clase para las televisiones, añadiendo resolución y 4k que afectarán al precio final.
class television extends electrodomesticos {
    constructor(precioBase, color, consumoEnergetico, peso, resolucion = 20, ultraHighDefinition = false) {
        super(precioBase, color, consumoEnergetico, peso)
        this.resolucion = resolucion;
        this.ultraHighDefinition = ultraHighDefinition;
    }
    //Los métodos GET.
    get resolution() {
        return this.resolucion;
    }
    get ultraHD() {
        return this.ultraHighDefinition;
    }
    //Creamos el método que comprobará si las pulgadas de la televisión son mayores a 40" y en caso afirmativo sacará el 30% del precio de la televisión para añadirlo al precio final
    resolutionPrice() {
        let extra = 0;
        if (this.resolucion > 40) {
            extra = (this.precio * 30) / 100;
        }
        return extra;
    }
    //En el caso del 4K (Ultra High Definition), en caso de que el valor booleano sea true añadira un sobrecoste de 50€
    ultraHDPrice() {
        let extra = 0;
        if (this.ultraHighDefinition == true) {
            extra = 50
        }
        return extra;
    }
    // y modificamos el método que saca el precio final para añadir los extra de la resolución y del 4k
    precioFinal() {
        let finalPrice = 0;
        finalPrice = this.precio + this.consumPrice() + this.weightPrice() + this.resolutionPrice() + this.ultraHDPrice();
        return finalPrice
    }

}

//Para finalizar, creamos la clase mainApp que almacena un array de 10 electrodomésticos varios (entre ellos lavadoras y televisores), calculará el precio de cada elemento y luego separara el precio de todas las lavadoras, de todos los televisores y por último nos dará el valor total de todos los electrodomésticos.
class mainApp {
    constructor() {
        //Aqui se crea el array con los 10 elementos
        this.Electrodomesticos = [
            new electrodomesticos(70, 'Gris', 'D', 5),
            new television(1200, 'Negro', 'B', 10, 65, true),
            new lavadora(750, 'Gris', 'B', 87, 60),
            new electrodomesticos(45, 'Azul', 'D', 1),
            new lavadora(300, undefined, 'E', 90, undefined),
            new television(325, 'Negro', 'C', undefined, 45, true),
            new television(595, 'Negro', 'A', undefined, 75, true),
            new lavadora(450, 'Gris', 'C', 78, 45),
            new electrodomesticos(20, undefined, undefined, 1),
            new television(1510, 'Negro', 'A', 20, 65, true)
        ];
    }

    //creamos el método que recorre el array y le calcula el precio final.
    priceCalculator() {
        let priceElectrodomesticos = 0;
        for (let i = 0; i < this.Electrodomesticos.length; i++) {
            let priceElectrodomestico = this.Electrodomesticos[i].precioFinal();
            priceElectrodomesticos = priceElectrodomesticos + priceElectrodomestico;
        }
        return priceElectrodomesticos;
    }
    // Y para finalizar creamos el método que recorrerá el array comprobará si el elemento es una lavadora, un televisor o un electrodoméstico aparte y sumará el precio de todas las televisiones en un nuevo atributo, lo mismo con las lavadoras y finalmente sumará tanto lavadoras, como televisiones y el resto de electrodomésticos que hay en el array con los modificadores correspondientes de cada clase y todo esto lo imprimirá por consola y en el div del html.
    Precios() {
        let totalLavadoras = 0
        let totalTelevisiones = 0
        let totalElectrodomesticos = 0

        for (let electrodomestico of this.Electrodomesticos) {
            switch (electrodomestico.constructor.name) {
                case 'lavadora':
                    totalLavadoras = totalLavadoras + electrodomestico.precioFinal();
                    totalElectrodomesticos = totalElectrodomesticos + electrodomestico.precioFinal();
                    break;
                case 'television':
                    totalTelevisiones = totalTelevisiones + electrodomestico.precioFinal();
                    totalElectrodomesticos = totalElectrodomesticos + electrodomestico.precioFinal();
                    break;
                case 'electrodomesticos':
                    totalElectrodomesticos = totalElectrodomesticos + electrodomestico.precioFinal();
                    break;
            }
        }
        console.log(`
        El precio total de las lavadoras es: ${totalLavadoras}€,
        el de todas las televisiones es: ${totalTelevisiones}€
        y el de todos los electrodomésticos en general es: ${totalElectrodomesticos}€`)
        //-se muestra en el div de la siguiente forma:
        divweb.innerHTML = `
        El precio total de las lavadoras es: ${totalLavadoras}€,
        el de todas las televisiones es: ${totalTelevisiones}€
        y el de todos los electrodomésticos en general es: ${totalElectrodomesticos}€`;
    }

}

//finalmente crearemos una variable que contendrá la clase mainApp y llamaremos a las funciones de está para que por un lado recorra el array y haciendole el precioFinal, y por otro lado para que saque el precio de todos los elementos agrupados por clase y el precio del conjunto por consola y html.
let appPrices = new mainApp()
appPrices.priceCalculator();
appPrices.Precios();

