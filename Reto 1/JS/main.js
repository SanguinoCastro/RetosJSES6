// Creamos la variable que nos vincula con el div del html.
let divweb = document.getElementById('resultado');
//-se muestra en el div de la siguiente forma:

const sexDefault='H'
class Persona {
    constructor(dni) {
        this.nombre = ' ';
        this.edad = 0;
        this.dni = dni;
        this.sexo = sexDefault;
        this.altura = 0;
    }
}
const Edu = new Persona('46723169-A');
const Desi = new Persona('47278194-S');
const Mari = new Persona('46650756-V');
console.log(Edu);
console.log(Desi);
console.log(Mari);
divweb.innerHTML = Edu.dni;

