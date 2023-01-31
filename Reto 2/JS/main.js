
// Creamos la variable que nos vincula con el div del html.
let divweb = document.getElementById('resultado');

//Creamos la clase Password, dando por defecto a longitud el valor 8.
class password {
    constructor (longitud=8){
        this.longitud = longitud;
        //en el atributo de contrasenya le referenciamos la función que describimos mas adelante
        this.contrasenya = this.createPass();
    }
    //Creamos la función que generará una contraseña segura
    createPass(){
        // crearemos una constante que contendrá todos los carácteres que usará la función para generar la contraseña.
        const characters = 
        "1234567890AaÀàÁáÂâÄäBbCcÇçDdEeÈèÉéÊêËëFfGgHhIÌìÍíÎîÏïJjKkLlMmNnÑñOoÒòÓóÔôÖöPpQqRrSsTtUuÙùÚúÛûÜüVvWwXxYyZz¡!?¿'·@#$€&%-_{}[]*><º+.:;|¬"
        //Creamos la varable pass dónde se guardaran los carácteres aleatorios que irá generando el bucle for.
        let pass =''
        //Creamos el bucle for, mientas el contador i sea menor a la longitud marcada por la clase o el objeto instanciado (por defecto 8), se generará un número aleatorio que estará entre 0 y la longitud de la string "characters" y luego añadira a la variable pass el cáracter que corresponda a la posición del número generado usando el método .charAt
        for (let i=0; i<this.longitud; i++){
            let random = Math.floor(Math.random()*characters.length);
            pass = pass + characters.charAt(random);
            
        }
        //Devolvemos la variable pass que contendrá la contraseña generada de forma aleatoria
        return pass;
    }
}
//Creamos 2 contraseñas una con la longitud por defecto y la 2ª le pedimos una longitud de 20 carácters.
let Contrasenya1 = new password();
let Contrasenya2 = new password(20);
console.log(Contrasenya1.contrasenya);
console.log(Contrasenya2.contrasenya);
//Lo mostraremos por consola de la siguiente forma:
divweb.innerHTML = `La contraseña segura generada aleatoriamente es: ${Contrasenya1.contrasenya}`;