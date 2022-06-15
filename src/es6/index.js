// como se hacian las funciones
// function newFunction(name, age, country){
//     var name = name || 'oscar';
//     var age = age || 32;
//     var country = country || 'MX';
//     console.log(name, age, country);
// }

// con ES6 - ECMAScript 6
// desde la asignacion de los parametros
// function newFunction2(name = 'oscar', age = 32, country = "MX"){
//     console.log(name, age, country);
// }
// ==========================================================

// newFunction2();
// newFunction2('Ricardo', '23', 'CO');


// 
// let hello = "Hello";
// let world = "Word";
// let epicPhrase = hello + ' ' + world;
// console.log(epicPhrase);


// otraforma
// template leterals
// let epicPhrase2 = `${hello} ${world}`;
// console.log(epicPhrase2)
// ==========================================================

// ANTES COMO SE MANDABAN LAS CADENAS
// let lorem = "Lorem conquerteru. qriquito, prtlotensaxi \n"+"otra frase epica que necesitamos."

// ES6
// let lorem2 = `otra frase epica que necesitamos.
// ahora es otra frase epica.
// `;

// console.log(lorem);
// console.log(lorem2);

// ==========================================================

// estructuracion de elementos
// EN VERSIONES ANTERIORES

// OBJETO
// let person = {
//     'name': 'Joao',
//     'age': 32,
//     'country': 'MX'
// }
// console.log(person.name, person.age);


// CON ES6
// let {name, age, country} = person;
// console.log(name, age, country);
// ==========================================================

// ANTERIOR JS
// operador de propagacion - nos permite expander de ciertas situaciones varios elementos
// let team1 = ['Oscar', 'Julian', 'Ricardo'];
// let team2 = ['Valeria', 'Yesica', 'Camila'];

// let education = (team1 + ' ' + team2);
// // let education = team1 + team2;
// console.log(education);

// ES6
// para poder utilizar el operador mencionado, crearemos el siguiente elemento llamado "education"
// Este 3° tercer elemento me va ayudar a estructurar estos elementos
// let education = ['David', ...team1, ...team2];
// console.log(education);
// ==========================================================

// {
//     var globalVar = "Global Var";
// }

// {
//     let globalLet = 'Global Let';
//     console.log(globalLet);
// }
// console.log(globalVar);
// console.log(globalLet);
// ==========================================================

// Esto no lo va a permitir porque es una constante y las constantes no cambian
// const a = 'b';
// a = 'a';
// console.log(a);

// Aqui si se aplica el cambiar el valor de esa variable, ya que esta declarada con la palabra reservado "var"
// var a = 'b';
// a = 'a';
// console.log(a);

// ==========================================================

// la propiedad de objectos
// let name = 'Joao';
// let edad = 30;

//  Anteriormente como se creaban los objetos
// obj = {
    // name: name,
    // edad: edad
// };

// ES6
// objt2 = { name, edad };
// console.log(objt2);
// ==========================================================

// arrow function
// const names = [
//     {name: 'Joao', age: 32},
//     {name: 'Manuel', age: 20}
// ]
// let listOfNames = names.map(function(item) {
//     console.log(item.name);
// });

// las arrow function, son funciones anonimas
// let listOfNames2 = names.map(item => console.log(item.name));

// otra forma
// const listOfNames3 = (name, age, country) => {
//     ...
// }

// otra forma
// const listOfNames4 = name => {
//     ...
// }

// otra forma
// const square = num => num * num;
// ==========================================================

// ARROW FUNCTIONS, PROMESAS Y PARAMETROS EN OBJETOS

// asincronismo
// "promesas" en algun momento va a suceder algo.
// const helloPromise = () => {
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

// CLASES MODULOS Y GENERADORES

class calculator{
    // Entonces dentro del bloque de codigo de la clase "calculator".
    // en este boloque de codigo se asigna un constructor, que es el metodo para inicializar nuestra clase    
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }
    // metodo sumar
    // utilizamos el metodo de sumar
    sum(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
    // Entonces... en resumen tenemos:
    // Es una clase que tiene un constructor el cual esta asignando dentro del "scope Global" 2 variables.
    // Despues tenemos un metodo al cual se le pasaran los 2 elementos, que en este caso seria los dos valores que quiero sumar, y estamos asignando estas variables que se construyeron dentro de la clase a esos valores que recibo, y al final lo que hago es hacer la suma retornando este elemento
}

const calc = new calculator();
console.log(calc.sum(2, 2));
// ==========================================================


// OTRO TEMA "MODULOS"
// El "import" y el "export" es trabajar con modulos
// En los modulos tenemos la logica principal.
// en lo modulos podemos tener logica separada de mi hilo principal o de nuestra aplicacion principal
// 


// Tambien nosotros asi podemos separar en modulos cuantos elementos sean necesarios
// Entonces esto significa que podemos serpara nuestra logica y poder solamente trabajar en una logica que se encarge de alguna peticion a una API, una logica para hacer un calculo matemetico, en diferentes modulos y llamarlos segun sea el caso, dentro de nuestro documento principal, que en ese caso seria el "index.js"



// ==========================================================

// HAsta aqui vimos las Caracteristicas que tienen añadidas en EcmaScript6

// GENERATOR
// Es una funcion especial que retorna una serie de valores segun el algoritmo definido.

// FUNCION ESPECIAL
function*helloWord(){
    // entonces segun el algoritmo retornara los valores
    // Entonces en este caso creamos nuestro algoritmo
    if (true){
        yield 'Hello, ';
    }
    // de esta forma tenemos el segundo elemento que va a ser llamado cuando sea ejecutado el siguiente valor
    if(true){
        yield 'Wordl';
    }
};

// ¿COMO LA EJECUTAMOS?
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







// ==========================================================
// ==========================================================
// ==========================================================
// ==========================================================