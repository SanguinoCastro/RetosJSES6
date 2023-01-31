
// Creamos la variable que nos vincula con el div del html.
let divweb = document.getElementById('resultado');
//-se muestra en el div de la siguiente forma:

  
class password {
    constructor (longitud=8){
        this.longitud = longitud;
        this.contrasenya = this.createPass();
    }
    createPass(){
        const characters = 
        "1234567890AaÀàÁáÂâÄäBbCcÇçDdEeÈèÉéÊêËëFfGgHhIÌìÍíÎîÏïJjKkLlMmNnÑñOoÒòÓóÔôÖöPpQqRrSsTtUuÙùÚúÛûÜüVvWwXxYyZz¡!?¿'·@#$€&%-_{}[]*><º\/+.:;|¬"
        let pass =''
        for (let i=0; i<this.longitud; i++){
            let random = Math.floor(Math.random()*characters.length);
            pass = pass + characters.charAt(random);
            
        }
        return pass;
    }
}

let Contrasenya1 = new password();
let Contrasenya2 = new password(20);
console.log(Contrasenya1.contrasenya);
console.log(Contrasenya2.contrasenya);
divweb.innerHTML = `La contraseña segura generada aleatoriamente es: ${Contrasenya1.contrasenya}`;