// Creamos la variable que nos vincula con el div del html.
let divweb = document.getElementById('resultado');

//Creamos la constante del sexo para indicar que de forma predeterminada sea H de Hombre.
const sexDefault='H'

//creamos la clase
class Persona {
    //en el constructo indicamos los pordefecto por si se dejan los valores sin definir, en caso de definirse estos valores seran sustituidos.
    constructor(dni, nombre=' ', edad=0, sexo=sexDefault, altura=0 ) {
        this.nombre = nombre;
        this.edad = edad;
        this.dni = dni;
        this.sexo = sexo;
        this.altura = altura;
    }
}
//Instanciamos los 3 objetos dando dista cantidad de información.
const Edu = new Persona('46723169-A', 'Eduard', 33, 'H' , 1.84);
const Desi = new Persona('47278194-S', 'Desi', 29, 'M');
const Mari = new Persona('46650756-V');
//los imprimimos por consola.
console.log(Edu);
console.log(Desi);
console.log(Mari);
//El DNI de la primera persona se muestra en el div de la siguiente forma:
divweb.innerHTML = Edu.dni;

