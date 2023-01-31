// Creamos la variable que nos vincula con el div del html.
let divweb = document.getElementById('resultado');
//-se muestra en el div de la siguiente forma:

const sexDefault='H'
class Persona {
    constructor(dni, nombre=' ', edad=0, sexo=sexDefault, altura=0 ) {
        this.nombre = nombre;
        this.edad = edad;
        this.dni = dni;
        this.sexo = sexo;
        this.altura = altura;
    }
}
const Edu = new Persona('46723169-A', 'Eduard', 33, 'H' , 1.84);
const Desi = new Persona('47278194-S', 'Desi', 29, 'M');
const Mari = new Persona('46650756-V');
console.log(Edu);
console.log(Desi);
console.log(Mari);
divweb.innerHTML = Edu.dni;

