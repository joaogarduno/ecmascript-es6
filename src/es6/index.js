// ==========================================================


// #1 Clase
// ECMASScript es la especificación del lenguaje JavaScript propuesto por ECMA Internacional,
// Es la institucion encargada de los estandares, y JavaScript, es el lenguaje de programacion
// que utiliza las especificaciones propuestas, que van siendo añadidas cada año a partir del 2015 cuando fue lanzado ES6
// ==========================================================



// #2 Clase
// ¿Cuales fueron estas caracteristicas que se añadieron en ECMAScript 6?

// La primera de ellas fue, "parametros por defecto"
// Esto significa que podemos establecer ciertos valores que le pasamos a una funcion de forma "por defecto"
// Vamos a crear una funcion que nos permita a nosotros ver como se hacia antes de ECMAScript6

// PARTE N° 1 - Parametros por defecto

// Entonces... sera una funcion a la cual se le pasaran 3 valores (name, age y country)
// como se hacian las funciones
// function newFunction(name, age, country){
    // ¿Como la inicializamos?
//     var name = name || 'oscar';
//     var age = age || 32;
//     var country = country || 'MX';
//     console.log(name, age, country);
// }
// De esta forma nosotros estableciamos estos puntos


// Ahora en ECMAScript se añadio una forma en la cual nosotros podemos establecerlo desde la asignacion de los parametros
// con ES6 - ECMAScript 6
// desde la asignacion de los parametros
// function newFunction2(name = 'oscar', age = 32, country = "MX"){
//     console.log(name, age, country);
// }

// newFunction2();
// newFunction2('Ricardo', '23', 'CO');

// ==============================

// PARTE N° 2 - TEMPLATE LITERALS

// Esta es otra asignacion que ha sido interesante dentro de nuestro proyecto que son los "template literals"
// Los cuales nos van a permitir a nosotros separar lo que vendria siendo o unir segun sea el caso varios elementos

// antes en Javascript 
// let hello = "Hello";
// let world = "Word";
// se concatena en una frase "epica"
// let epicPhrase = hello + ' ' + world;
// console.log(epicPhrase);


// Ahora en ES6 (ECMAScript 6)
// En los template literals nos van a permitir a nosotros hacer esas uniones de forma mas amigable sin utilizar el valor de "+" (de mas), ya que era un poco tedioso entenderlo a veces cuando estabamos uniendo varios valores
// template leterals

// let epicPhrase2 = `${hello} ${world}`;
// console.log(epicPhrase2)
// ==========================================================



// #3 Clase - Multi Lineas, Destructuracion de elementos, Var, Let y Const

// PARTE N° 1 - MULTI LINEAS

// Otra de las caracteristicas de ES6 es la "milti linea" en los "string"

// ANTES COMO SE MANDABAN LAS CADENAS
// let lorem = "Lorem conquerteru. qriquito, prtlotensaxi \n" + "otra frase epica que necesitamos."
// De esta forma nosotros podiamos tener "multi lineas" eso significa que podiamos tener cierta estructura que necesitabamos de un "string"
// Pero normalmente no suele ser la mejor opcion

// ES6
// En ES6 ahora tenemos una nueva forma de utilizar "multi lineas"
// let lorem2 = `otra frase epica que necesitamos.
// ahora es otra frase epica.
// `;

// console.log(lorem);
// console.log(lorem2);

// ==============================

// PARTE N° 2 - Destructuracion de elementos

// La destructuracion de elementos siginifica
// estructuracion de elementos
// EN VERSIONES ANTERIORES

// Creamos un OBJETO y este OBJETO va a tener 3 elementos
// let person = {
//     'name': 'Joao',
//     'age': 32,
//     'country': 'MX'
// }
// console.log(person.name, person.age);


// CON ES6
// De esta forma puedo extraer los elementos que necesito
// let {name, age, country} = person;
// console.log(name, age, country);
// ==============================

// PARTE N° 3 - Operador de Propagacion (Spread Operator)

// OTRO EJEMPLO DE LA PARTE N°2 - Destructuracion de elementos en ES6

// operador de propagacion - nos permite expander de ciertas situaciones varios elementos
// let team1 = ['Oscar', 'Julian', 'Ricardo'];
// let team2 = ['Valeria', 'Yesica', 'Camila'];

// ANTERIOR JS
// let education = (team1 + ' ' + team2);
// // let education = team1 + team2;
// console.log(education);

// ES6
// para poder utilizar el operador mencionado, crearemos el siguiente elemento llamado "education"
// Este 3° tercer elemento me va ayudar a estructurar estos elementos
// let education = ['David', ...team1, ...team2];
// console.log(education);
// ==============================

// PARTE N° 4 - Let y Const
// ¿Que es let y que es const?

// Antes en JS
// Con var esta disponible de forma global
// Entonces si tratamos de entrar a ella o corremos este Script nos dara acceso a la variable eso quiere decir que si es accesible con el valor string "Global Var"
// {
//     var globalVar = "Global Var";
// }

// ES6
// Con "let" solo esta disponible en el "scope" esto sigfica que en el bloque de codigo en el cual va a ser llamado
// A diferencia de "var" si intentamos acceder a "let globlaLet" no podemos hacerlo.
// Porque esta esta en otro "Scope" es decir, en otro contexto y no es accesible por nosotros.
// Pero.. como puedo hacerla accesible, solo dentro de ese mismo bloque de codigo, entonces por eso tiene el la instruccion de "console.log(globalLet) dentro de ese bloque de codigo para que se pueda ejecutar"


// Ejemplo de LET
// {
//     let globalLet = 'Global Let';
//     console.log(globalLet);
// }

// console.log(globalVar);
// console.log(globalLet); // utilizamos este ejemplo en el scope global para ver si podiamos ejecutar la variable "globalLet" con "let"

// Entonces de esta forma nos podemos dar cuenta que "let" tiene esa asignacion, solo esta disponible en el bloque de codigo el cual ha sido definido
// Pero "var" puede ser una forma de asignarlo de forma global, es decir que no importa donde lo estemos asigando por eso es mas conveniente establecer "let" o empezar a trabajar con "let"
// ==============================

// Ejemplo de CONST
// otro de los elementos que tambien se añadio en ECMAScript6 es "const" y const lo que nos va a permitir a nosotros es establecer una varible...

// Pero si nosotros quisieramos pasarle otro valor, es decir, reasignarlo no nos va a dejar, ¿Por qué? porque es una constante que no cambia no va a cambiar su valor
// const a = 'b';
// a = 'a';
// console.log(a);
// Esto no lo va a permitir porque es una constante y las constantes no cambian y no se le puede asignar un nuevo valor a una constante


// Entonces... si lo hacemos de la siguiente manera
// Aqui si se aplica el cambiar el valor de esa variable, ya que esta declarada con la palabra reservada "var"
// var a = 'b';
// a = 'a';
// console.log(a);

// La importancia de "const" es de que si ese valor no va a moverse nunca podemos hacer uso de las constantes, pero si ese valor sera reasigando un nuevo valor tendriamos que utilizar "var"

// ==========================================================



// #4 Clase - ARROW FUNCTIONS, PROMESAS Y PARAMETROS EN OBJETOS

// Propiedad de Objetos mejorada

// PARTE N° 1 - Objetos
// Vamos a trabajar con OBJETOS y como pueden ser asignados
// la propiedad de objectos

// let name = 'Joao';
// let edad = 30;

// Anteriormente lo que haciamos para poder crear un nuevo objeto con estos elementos teniamos que hacerlo de esta forma
// obj = {
    // name: name,
    // edad: edad
// };

// ES6
// Ahora en ECMAScript 6 hay una nueva forma de hacerlo que es mas amigable y facil de hacer
// Entonces lo que hacemos es que, en ves de darle una asignacion completa, solamente decirle...

// objt2 = { name, edad };
// console.log(objt2);
// ==============================


// PARTE N° 2 - Arrow Function o funciones de tipo flecha
// Estas funciones vienen a solventar un problema particular o a trabajar con 2 elementos, es una sintaxis mas reducida y un "this" no vinculable.

// Vamos a entender como funciona generando codigo que nos va a permitir entender de las diferentes perspectivas

// arrow function
// generamos nuestro arreglo
// const names = [
//     {name: 'Joao', age: 32},
//     {name: 'Manuel', age: 20}
// ]
// let listOfNames = names.map(function(item) {
//     console.log(item.name);
// });

// las arrow function, son funciones anonimas, vamos a ver un ejemplo
// let listOfNames2 = names.map(item => console.log(item.name));
// Entonces estamos pasando un funcion la cual va presentar en consola "item" o el nombre de cada uno de estos items

// otra forma que vamos a encontrar los arrow function seria de esta forma...
// const listOfNames3 = (name, age, country) => {
//     ...
// }

// otra forma, cuando yo este pasando un solo elemento o un solo parametro
// const listOfNames4 = name => {
//     ...
// }

// otra forma de hacer lo mismo que la anterior opcion, la cual seria de la siguiente forma
// const square = num => num * num;
// ya no tenemos un "return", ya no tenemos que generar bloques de llaves y lo que se esta haciendo es asignarlo directamente
// ==============================

// PARTE N° 3 - PROMESAS


// Cuando hablamos de promesas nos referimos a que vamos a trabajar con el asincronismo.
// ¿y esto que significa? JavaScript no es un lenguaje que es sincronico que pueda ejecutar muchos elementos al mismo tiempo, si no que va ejecutando elementos por elementos, teniendo en cuenta de que JavaScript no es un lenguaje sinconico, nosotros para manejar el asincronismo es que 2 eventos no van a suceder al mismo tiempo, si no que en una serie de situaciones segun dado el caso, en este caso llamar alguna API, se ha incorporando lo que son las promesas que vienen a reparar un problema de los callbacks
// Que era el "callback hell", en cual nosotros necesitamos ejecutar ciertos llamados en cascada y que obviamente tenian un problema que eran no escalables y que podiamos anidar hasta 20 elementos y por eso era un poco complicado.

// Pero ahora existen las "promesas" y como su nombre lo dice es algo que va a pasar, esto significa que en algun momento o tiempo va a suceder algo, que nosotros estamos estableciendo.

// asincronismo
// "promesas" en algun momento va a suceder algo.
// Se genera un "Arrow Function"
// const helloPromise = () => {
    // va a tener 2 elementos que son "resolve" y "reject"
//     return new Promise((resolve, reject) => {
//         // establecer una validacion

//         // la promesa tiene una espera de una logica que nosostros vamos a resolver si "aceptarla" o "rechazarla"
//         if (true){
//             resolve('Hey todo bien!!')
//         } else{
//             reject('Algo salio mal!!!!');
//         }
//         // Con  esto tenemos nuestra estructura de nuestra promesa
//     });
// }

// EJECUTAMOS
// helloPromise()
//     .then(response => console.log(response))
//     .catch(error => console.log(error));
// ==========================================================



// #5 Clase - CLASES, MODULOS Y GENERADORES 

// PARTE N° 1 - Clases

// Con las clases van a ser una forma de poder manejar, una sintaxis mas clara para manejar objetos y tambien la herencia de JavaScript.

// Y esto nos permite a nosotros como desarrolladores, aplicar la "programacion orientada a objectos" dentro de este lenguaje

// CLASES MODULOS Y GENERADORES

// class calculator{
    // Entonces dentro del bloque de codigo de la clase "calculator".
    // en este boloque de codigo se le asigna un constructor, que es el metodo para inicializar nuestra clase
    // Entonces tenemos a nuestro constructor y un bloque de codigo.
    // Y es ahi donde se van asignar las variables, que van a estar disponibles en un "scope global"
    // constructor(){
    //     this.valueA = 0;
    //     this.valueB = 0;
    // }

    // Vamos a utilizar un metodo
    // metodo -> sumar
    // utilizamos el metodo de sumar
    // Este metodo va a tener 2 valores "valueA" y "valueB"
    // sum(valueA, valueB){
    //     this.valueA = valueA;
    //     this.valueB = valueB;
    //     return this.valueA + this.valueB;
    // }
    // Entonces... en resumen tenemos:
    // Es una clase que tiene un constructor el cual esta asignando dentro del "scope Global" 2 variables.
    // Despues tenemos un metodo (sum) al cual se le pasaran los 2 elementos, que en este caso seria los dos valores que quiero sumar, y estamos asignando estas variables que se construyeron dentro de la clase a esos valores que recibo, y al final lo que hago es hacer la suma retornando este elemento.
// }

// const calc = new calculator();
// console.log(calc.sum(2, 2));
// ==============================


// PARTE N° 2 - Import y Export

// Esto es trabajar con modulos

// INSTRUCCIONES: Creamos un archivo dentro de nuestra carpeta es6, con el nombre de module.js para este caso de ejemplo
// y de esta forma a este archivo, yo voy a poder tener logica se parada de mi "hilo" principal o de nuestra aplicacion principal e iniciamos creandola con una constante

// Este ejemplo con la funcion creada a continuacion deberia de estar en el archivo llamado "module"

// ejemplo
const hello = () => {
    // Y aqui lo unico que se haria seria retornar un valor en este caso seria un "hello"
    return 'hello';
}

// y ahora lo que yo voy hacer es exportar, y le vamos a decir que pueda ser exportado de la siguiente manera
export default hello;
// Y de esta forma yo estoy exportando este modulo que puedo entonces llamar donde yo lo necesite.


// Entonces de esta forma yo ahora voy a poder utilizar un valor llamado "import "
// En este caso quiero traerme a "hello" la funcion que tengo en un modulo.

// esta linea de abajo tendria que escribirse en archivo index.js no en el archivo module.js
import {hello} from './module';

// Entonces de esta forma nosotros nos podemos traer esa logica que acabamos de separar a mi documento y poderla utilizar haciendo el llamado de "hello", en este caso seria ya una funcion disponible dentro de este mismo documento (el principal o vista).
hello();

// Y asi nosotros vamos a poder separar en modulos cuantos elementos son necesario, eso significa que nosotros vamos a poder separar nuestra logica, y solamente trabajar con una logica que se encarge de una peticion a una API
// Una logica para hacer un calculo matematico, en diferentes modulos y llamarlos segun sea el caso dentro de nuestro documento principal que en este caso seria nuestro index.js

// Entonces de esta forma nosotros vamos a poder trabajar con los modulos


// ============ OTRAS NOTAS ================
// El "import" y el "export" es trabajar con modulos
// En los modulos tenemos la logica principal.
// en lo modulos podemos tener logica separada de mi hilo principal o de nuestra aplicacion principal
// 


// Tambien nosotros asi podemos separar en modulos cuantos elementos sean necesarios
// Entonces esto significa que podemos serpara nuestra logica y poder solamente trabajar en una logica que se encarge de alguna peticion a una API, una logica para hacer un calculo matemetico, en diferentes modulos y llamarlos segun sea el caso, dentro de nuestro documento principal, que en ese caso seria el "index.js"
// ==============================


// PARTE N° 3 - Generators

// Otro punto interesante que se añadio en ECMAScript 6 es "Generators"
// Y vamos a entenderlos un poco mas

// Generators es una funcion especial que retorna una serie de valores, segun el algoritmo definido, veremos el codigo para poder entenderlo.

// Lo que tenemos que hacer es una funcion especial y su sintaxis va asi...


// GENERATOR
// Es una funcion especial que retorna una serie de valores segun el algoritmo definido.

// FUNCION ESPECIAL
function*helloWord(){
    // entonces segun el algoritmo retornara los valores
    // Entonces en este caso creamos nuestro algoritmo
    if (true){
        yield 'Hello, ';
        // "yield" guarda este estado de forma interna, enseguida veremos porque
    }
    // Luego tambien podemos tener otro "if" donde podemos tener tambien una validacion de "true"
    if(true){
        yield 'World';
        // de esta forma tenemos el segundo elemento que va a ser llamado cuando sea ejecutado el siguiente valor
    }
    
};

// ¿COMO LA EJECUTAMOS?
// Ya que tenemos la estructura o el algoritmo como lo ejecutamos
const generatorHello = helloWord();

// vamos a poder utilizar el valor "next" que nos va a permitir, obviamente ejecutar la primera logica y obtener ese valor segun sea el caso, y cuando yo vuelva ejecutar el siguiente valor "next" va a recordar donde estaba, en este caso en la asignacion logica que acabamos de crear, para mostrar el segundo valor y asi por cada unos de estos pasos vamos a llegar a tener esta logica dentro de tu generator
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);

// Esto es muy importante cuando estemos trabajando con logicas o una serie de algoritmos que queramos establecer desde nuestro lado y ver como lo podemos ir ejecutandolos
// ==========================================================



// ¿QUE SE IMPLEMENTO EN ES7?
// Se crea una carpeta llamada "es7" y dentro un archivo index.js y dentro se mencionan 2 caracteristicas que se agregaron a ES7



// ==========================================================



// ¿QUE SE IMPLEMENTO EN ES8?
// Se crea una carpeta llamada "es8" y dentro un archivo index.js y dentro se mencionan 4 caracteristicas que se agregaron a ES8



// ==========================================================






// ==========================================================
// ==========================================================
// ==========================================================
// ==========================================================
// ==========================================================
// ==========================================================
// ==========================================================