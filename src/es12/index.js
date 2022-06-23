// # 13 Clase - ES12 2021

// Metodos nuevos que vienen ayudarnos a diferentes particularidades:
    // Replace All
    // Metodos privados para clases y tambien para geter seters
    // Nuevo metodo para "Promise" el cual es "promise.any"
    // Operadores de asignacion logica que vamos a poder trabajar segun sea el caso con lo que vendria siendo Truly o Falsy
    // Nueva referencia width reff, la cual hace una referencia debil a otro objeto
// ==============================


// PARTE 1 - Replace All

// Generaremos un string que nos va permitir a nosotros tener obviamente este texto que vamos a buscar una informacion y reemplazarla
const string = "Javascript es lo mejor, con Javascript puedo aprender a programar!!";
const replacedString = string.replace("Javascript", "Python");

console.log(replacedString);
// Cuando vemos el resultado de esta impresion en consola vemos que el metodo ".replace" solo encuentra el primer valor o elemento y lo reemplaza
// Lo que no hace es buscar en todos los elementos dentro de ese string


// EJEMPLO con la nueva forma ES12 - ECMAScript 12
const replacedString2 = string.replaceAll("Javascript", "Python");
console.log(replacedString2);
// Ahora con este nuevo metodo nos dice que hara lo siguiente...
// Que todas las coincidencias dentro del string que coincidan con la palabra "Javascript" van a ser reemplazadas por "Python" a diferencia del metodo anterior el ".replace"
// ==============================


// PARTE 2 - METODOS PRIVADOS

// Estos metodos vamos a poderlos utilizar dentro de las clases.
// Con esto vamos a poder añadir un prefijo que nos va a permitir decir, "este metodo es privado y no puede ser accedido de forma, como obviamente podriamos acceder algun metodo interno de una clase"

class Message {
    show(val){
        console.log(val);
    };
}

// Ahora vamos hacer la instancia de esta clase y llamar a este metodo
const message = new Message();
message.show('Hola a todos!');
// Esta es la simplificacion de lo que queremos lograr para ver una clase con un metodo interno que vamos a poder acceder

// Ahora ¿Como podemos volver de forma privada este recurso?
// Lo unico que debemos hacer es colocar el "simbolo de gato" o "almoadilla" "#" para poder dar la representacion de que este metodo es ahora privado y solo va ser accedido dentro de la clase.

// Volver de forma privada este recurso
class Message {
    #show(val){
        console.log(val);
    };
}
// Asi que al momento de querer ejecutar este codigo, nos va a decir que no es una funcion que no esta disponible porque lo estamos volviendo privado
// De esta forma vamos a poder manejar estos recursos.


// A su vez podemos tener "get it" y "set it" segun sea el caso para nuestra aplicacion y lo unico que vamos a tener diferente es tener el "get", agregamos la almohadilla o simbolo de gato tenemos nuestra logica
class Message {
    #show(val){
        console.log(val);
    };
    get #add(value){
        ...
    }
}

// Y de esta forma vamos a poder manejar una estructura que es privada dentro de nuestras clases para este tipo de recursos

const message = new Message();
message.show('Hola!');
// ==============================


// PARTE 3 - PROMIS ANY

// En esta version del 2021, vamos a trabajar con "promis any"
// "promise any" es un objeto global de "promis" cuyo argumento va hacer la forma de un array de promesas que vamos a pasarle gestionando y capturando la respuesta de la primera que sea resuelta de forma satisfactoria.
// Ese va ser la logica que nos va a dar...

const promise1 = new Promise((resolve, reject) => reject("1"));
const promise2 = new Promise((resolve, reject) => resolve("2"));
const promise3 = new Promise((resolve, reject) => resolve("3"));

Promise.any([promise1, promise2, promise3])
.then(response => console.log(response));
// El primer valor que nos retorna, es como lo dice, "el valor que se resuelva primero", en este caso el primero que se resuelve es "resolve" de la promesa 2 por lo tanto tenemos como valor el 2.

// Ignora los demas porque los que estamos buscando "any" el primero que resuelva de todos estos "retornamelo"
// Asi que va haber casos de uso donde necesitemos esta estructuracion de nuestro codigo
// ==============================


// PARTE 4 -  WeakRef

// Un objeto que le permite mantener una referencia debil a otro objeto sin evitar que este objeto sea pasado o recogido por el "garbage colector" que obviamente javascript incoorpora

// Asi que lo que podemos hacer es esta referencia de forma debil a un objeto.

class anyClass {
    constructor(element){
        this.ref = new WeakRef(element)
    }
    {...}
}
// De esta forma ya estariamos teniendo lo que viene siendo una referencia debil para este recurso.
// De esta forma podemos trabajar mejor con los elementos que vamos a tener

// Entonces podemos utilizar este llamado para asi evitar que este objeto obviamente recogido por el manejador de la basura, que lo que hace es liberar elementos de lo que viene siendo la memoria

// Asi que con esto vamos a garantizar que no sea recogido por esta estructura interna de nuestro lenguaje de programacion y poderlo utilizar segun sea las necesidades.
// ==============================


// PARTE 5 -  Expresiones y Operadores


// Para que nosostros podamos trabajar con elementos de expresiones y operadores 

// En esta version se han agregado 3 nuevas expresiones y operadores tales como:
    // Asignacion AND logico -> x &&= y
    // Asignacion OR logico -> x||= y
    // Asignacion de anulacion logica -> x ??= y

// AND
let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse);

// con el "OR"
let isTrue = true;
let isFalse = false;
console.log(isTrue ||= isFalse);

// valores nulos
let isTrue = undefined;
let isFalse = false;
console.log(isTrue ??= isFalse);
// Con esto ya tenemos la estructura para estas asignaciones que nosotros vamos a poder trabajar, sin ningun problema

// De esta forma vamos a tener mas opciones que nos va a permitir trabajar con nuestro lenguaje de programacion hacer comparaciones y asignaciones segun sea el caso para los elementos que vamos a estar trabajando







// ==========================================================
// ==========================================================
// ==========================================================