// ES11 - 2020
// 

// #11 Clase - ECMAScript version 11 y sus caracteristicas


// En esta version se incoorporaron diferentes caracteristicas como:
    // - Dinamic Import
    // - Big Number
    // - All setup
    //  - Global this
    // - Otros
// ==============================


// PARTE N° 1 - Dinamic Import

// Vamos a poder realizar con "Dinamic Import" una importacion de algun elemento de forma dinamica si asi nosotros lo necesitamos para poder llamar piezas de codigo, que van hacer que optimicemos mucho mejor nuestro proyecto.

// Vamos a crear una pequeña aplicacion en la cual nos va a permitir ver como podemos llamar algun archivo dentro de otra pieza de codigo cuando se desencadene un llamado, en este caso un click.

// Vamos a crear una logica que nosotros necesitamos

// Vamos a llamar a ese ID que nosotros establecimos que era "btn"
const button = document.getElementById("btn");
// Entonces con esto, ya tenemos al boton escuchando o viendo que evento va a pasar ahi

// Creamos el archivo "file.js" dentro de la carpeta es11

// Una ves que tengamos el archivo separado, ahora lo que vamos hacer es.. ¿Como se va a mandar a llamar?
// ¿Como voy hacer este dinamic import que nos esta dando obviamente esta caracteristica en esta version?

// Por lo tanto lo que vamos hacer aca es mandar a llamar a nuestro boton que previamente asignamos a "getElementById" del boton que tenemos en el DOM.
// Y aqui vamos a utilizar un metodo que se va a llamar addEvent el cual me va permitir escuchar algun cambio o alguna accion que va hacerse sobre este boton

// Vamos a pasarle los 2 parametros principales, primero... que es lo que va a querer hacer, es un "click"
// Para que cuando le demos click, va a desencadenar esta funcion anonima que vamos a pasarle, para esto vamos a utilizar la opcion de "async y await", porque vamos hacerlo para el llamado de este archivo y vamos a esperar a que esto pase.
//  y creamos nuestra funcion anonima, que nos va a permitir establecer la logica que va a tener esta accion cuando se de click


button.addEventListener("click", async function () {
    // Una ves que ya tenemos este elemento vamos a generar una constante que la vamos a llamar module
    const module = await import("./file.js");
    // El import ya no esta en la parte superior del documento, si no que ahora es dentro del llamado que en este caso esta desencadenando al hacerle click a ese boton

    // Ahora lo que podemos utilizar
    module.hello();
});
// ==============================


// PARTE N° 2 - bigInt()

// Esto nos va a permitir trabajar con numeros enteros mayores a 2 a la 53 esto es bigInt, el cual es un numero mas grander que puede tener Javascript, en este caso 2 a la 53, y ahora podemos representar de manera fiable, mas alla de este mismo valor.
// Entonces... para esto es que podemos trabajar con este llamado que seria "Big Int"

// Tenemos 2 formas de trabajar, uno seria agregando una "n" al final de nuestro numero o utilizando el metodo que vamos a tener disponible "bigInt()"

// generamos una constante que la vamos a llamar "aBigNumber" y le asignamos un valor numerico que es el mayor permitido que tenia javascript hasta ahora.
// Los numero son la posicion mas grande que teniamos actualmente, y para poderlo activar, para poder utilizar este valor lo que hacemos al final es agregarle una "n"
// Con esto ya estamos activando la opcion que tenemos para trabajar con "bigInt"
const aBigNumber = 9007199254740991n;

// 
const anotherBigNumber = BigInt(9007199254740991);
// Estas son las 2 formas con las que puedes trabajar estos 2 numeros que van a estar disponibles obviamente para cualquier elemento que necesites a este nivel de alcance para la parte numerica, ahora lo que podemos hacer es presentarlos

// 
console.log(aBigNumber);
console.log(anotherBigNumber);
// Ya tenemos la representacion de estos elementos sin ningun problema JavaScript obviamente va a poderlos entender, trabajar con ellos como sea el caso necesario para las opciones que tu tengas
// ==============================


// PARTE N° 3 - Promise all setall 

// La cual nos va a devolver una promesa que se resuelve despues de que todas las promesas dadas, se hayan cumplido o rechazado, en una serie de objetos que se describe el resultado de cada promesa

// tenemos nuestra primer promesa a continuacion
const promise1 = new Promise((resolve, reject) => reject("reject"));

const promise2 = new Promise((resolve, reject) => resolve("resolve"));
const promise3 = new Promise((resolve, reject) => resolve("resolve 1"));
// Asi ya tenemos las 3 promesas que vamos a utilizar

// Y con esto vamos a poder utilizar este nuevo elemento que esta disponible para trabajar con nuestras promesas
// vamos a pasarle en un arreglo las promesas que vamos a utilizar
Promise.allSettled([promise1, promise2, promise3])

// una vez que estas corriendo o que van a correr vamos a disponer de un "then" para poder regresar lo que viene siendo "response"
.then(response => console.log(response));
// Para poder ver la forma en la que nos va a representar el elemento

// NOTA:
    // Promise.all -> esta es rechazada en el momento en el que se rechace una de estas promesas osea que ahi es donde acaba
    // Promise.allSettled -> No importa el estado de las promesas solo esperara hasta que todas sean resueltas, entonces va a terminar pero nos va a regresar la informacion
    // Entonces esta es rechazada hasta el momento en el que se rechace alguna de estas.

    // Son muy similares o se puede llegar a confundir, pero existe una diferencia entre estos 2, y esas son las diferencias que existen entre uno y otro
// ==============================


// PARTE N° 4 - Global This

// La piedad de "global" tiene el valor global de "this" que es similar al objeto global, esto significa que si nosotros vemos dentro de nuestro navegador diferentes elementos como:
    // * window
    // * self
    // * frames
    // * this 
// vamos a obtener un resultado

// Ahora si pegamos este codigo en la consola del navegador y lo ejecutamos tenemos acceso a ese elemento de forma "global"

// console.log(window);
// console.log(self);
// console.log(frames);
// console.log(this);

// este es uno de los elementos que podemos hacer o que teniamos disponibles para que nosostros pudieramos trabajar.
// ahora la propiedad "globalThis" proporciona una forma estandar de acceder al valor global, ¿esto que significa?
// Esto significa que no nada mas del navegador si no tambien desde nuestras aplicaciones creadas con "Node"

// Asi que por esto vamos a poder trabajar  de mejor forma con lo que vendria siendo, "globalThis".

// Ahora podemos acceder a este codigo que teniamos

console.log(window);
console.log(globalThis);
// ==============================


// PARTE N° 5 - Operador Nulo (Null)

// Este elemento nos va a poder ayudar a trabajar con los elementos nulos (null).
// Este es el operador de "nulo"
// Que es un operador logico que nos devuelve su operando del lado derecho cuando el operador del lado izquierdo es nulo o indefinido y de lo contrario devuelve su operador del lado izquierdo

// El nuevo operador logico "nulo" esta representado con "??"
const fooo = null ?? 'default string';
console.log(fooo);
// De esta forma vamos a poder hacer diferentes preguntas segun sea el caso.

// este seria el ejemplo para el operador "nulo"
// ==============================


// PARTE N° 6 - Optional shining

// Esta caracteristica nos va ayudar a trabajar con los arreglos y los objetos y acceder a cada uno de estos elementos, viene siendo el "optional shining"
// Con el cual vamos a poder trabajar con diferentes niveles de estos recursos

const user = {};

// console.log(user.profile.email);

console.log(user?.profile?.email);

if(user?.profile?.email){
    console.log('email')
} else{
    console.log('Fail')
}







// ==============================
// ==============================
// ==============================



// ==========================================================
// ==========================================================
// ==========================================================