##Retos de JavaScript ES6 de la Geek'sHubs academy

***

###Los retos a cumplir són los siguientes:

####Reto 1.-  
  
Haz una clase llamada <b>Persona</b> que siga las siguientes condiciones:  

- Sus atributos son: <b>nombre, edad, DNI, sexo</b> (H hombre, M mujer)<b>, peso</b> y <b>altura</b>.
- Por defecto, todos los atributos menos el DNI serán valores por defecto según su tipo (0 números, cadena vacía para String, etc.). Sexo será hombre por defecto, usa una constante para ello.
- Instancia al menos tres objetos. 
<br>  

####Reto 2.- 
Haz una clase llamada <b>Password</b> que siga las siguientes condiciones:  

- Que tenga los atributos <b>longitud</b> y <b>contraseña</b>. Por defecto, la longitud será de 8.
- Los constructores serán los siguientes:
Incluye el método que genere una contraseña aleatoria con esa longitud. 
<br>  

####Reto 3.-

Crearemos una superclase llamada <b>Electrodoméstico</b> con las siguientes características:  

- Sus atributos son: <b>precio base, color, consumo energético</b> (letras entre A y F) y <b>peso</b>. Indica que se podrán heredar.
- Por defecto, el color será blanco, el consumo energético será F, el precio Base es de 100€ y el peso de 5kg. Usa constante para ello.
- Los colores disponibles son: blanco, negro, azul y gris. No importa si el nombre esta en mayúsculas o en minúsculas.

Los métodos que implementara serán:
- Métodos get de todos los atributos.
- <b>comprobarConsumoEnergetico(char letra)</b>: comprueba que la letra es correcta, sino es correcta usará la letra por defecto. Se invocará al crear el objeto y no será visible.
- <b>comprobarColor(String color)</b>: comprueba que el color es correcto, sino lo es usa el color por defecto. Se invocara al crear el objeto y no será visible.
- <b>precioFinal()</b>: según el consumo energético y su tamaño, aumentará su precio.

Esta es la lista de precios:
<img src= "/Img/listaPrecios.png" width="600"> 
<br> 

Crearemos una subclase llamada <b>Lavadora</b> con las siguientes características:
- Su atributo es <b>carga</b>, además de los atributos heredados.
- Por defecto, la carga es de 5kg. Usa una constante para ello.

Recuerda que debes llamar al constructor de la clase padre.
Los métodos que se implementarán serán:

- Método get de carga.
- <b>precioFinal()</b>: si tiene una carga mayor de 30kg, aumentará el precio 50€, sino es así no se incrementará el precio. Llama al método padre y añade el código necesario. Recuerda que las condiciones que hemos visto en la clase Electrodoméstico también deben afectar al precio.

Crearemos una subclase llamada <b>Televisión</b> con las siguientes características:
- Sus atributos son <b>resolución</b> (en pulgadas) y <b>4K</b> (booleano), además de los atributos heredados.
- Por defecto, la resolución será de 20 pulgadas y el 4K será false.

Recuerda que debes llamar al constructor de la clase padre.

Los métodos que se implementarán serán:

- Método get de resolución y atributo de 4K.
- <b>precioFinal()</b>: si tiene una resolución mayor de 40 pulgadas, se incrementará el precio un 30% y si tiene 4K incorporado, aumentará 50€. Recuerda que las condiciones que hemos visto en la clase Electrodoméstico también deben afectar al precio

Ahora crea una clase mainApp que realice lo siguiente:

- Crea un array de Electrodomésticos de 10 posiciones.
- Asigna a cada posición un objeto de las clases anteriores con los valores que desees.
- Ahora, recorre este array y ejecuta el método precioFinal().
- Deberás mostrar el precio de cada clase, es decir, el precio de todas las televisiones por un lado, el de las lavadoras por otro y la suma de los Electrodomésticos(puedes crear objetos Electrodomésticos, pero recuerda que Televisión y Lavadora también son electrodomésticos). Por ejemplo, si tenemos un Electrodoméstico con un precio final de 300€,, una lavadora de 200€ y una televisión de 500€, el resultado final será de 1000€ (300+200+500) para electrodomésticos, 200€ para lavadoras y 500 para televisiones.


***



###Actualizaciones:

30/01/2023.- Se ha Creado la estructura principal de los 3 proyectos, se ha creado el README, se ha hecho el repositorio de GitHub y se ha realizado el primer Reto.

31/01/2023.- Se ha modificado el 1r Reto, se ha finalizado el 2º Reto y se ha iniciado el 3r Reto.

01/02/2023.- Se ha realizado, comprobado y comentado el 3r Reto, se ha actualizado el README y se ha dado por finalizado los retos.
