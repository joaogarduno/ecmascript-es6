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
let name = 'Joao';
let edad = 30;

//  Anteriormente como se creaban los objetos
obj = {
    name: name,
    edad: edad
};

// ES6
objt2 = { name, edad };
console.log(objt2);
// ==========================================================

// arrow function
const names = [
    {name: 'Joao', age: 32},
    {name: 'Manuel', age: 20}
]
let listOfNames = names.map(function(item) {
    console.log(item.name);
});

// las arrow function, son funciones anonimas
let listOfNames2 = names.map(item => console.log(item.name));

// otra forma
const listOfNames3 = (name, age, country) => {
    ...
}

// otra forma
const listOfNames4 = name => {
    ...
}

// otra forma
const square = num => num * num;
// ==========================================================

// asincronismo
// "promesas" en algun momento va a suceder algo.
const helloPromise = () => {
    return new Promise((resolve, reject) => {
        // establecer una validacion

        // la promesa tiene una espera de una logica que nosostros vamos a resolver si "aceptarla" o "rechazarla"
        if (true){
            resolve('Hey todo bien!!')
        } else{
            reject('Algo salio mal!!!!');
        }
        // Con  esto tenemos nuestra estructura de nuestra promesa
    });
}

// EJECUTAMOS
helloPromise()
    .then(response => console.log(response))
    .catch(error => console.log(error));
// ==========================================================
// ==========================================================
// ==========================================================
// ==========================================================
// ==========================================================