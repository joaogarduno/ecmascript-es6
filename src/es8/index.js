// ES8

// #7 Clase - ECMAScript 8 y sus caracteristicas "Object Entries", "Object Values" y "Padding"

// ==============================


// PARTE N° 1 - Object Entries

// "Object entries" nos va a permitir devolver la clave y los valores de una matris
// Lo que debemos tener es una constante la cual llamaremos "data".... y esto me permite tener un objeto este objecto va a tener varios valores...


// Caracteristica Object
// OBJECT ENTRIES
const data = {
    frontend: 'Joao',
    backend: 'Isabel',
    design: 'Jose',
}


// ya que tenemos estos elementos, lo que queremos hacer es como voy a transformar, este objeto a una "matris".
// Para eso utilizamos un nuevo valor que esta disponible en esta version.

// Entonces vamos a crear una constante que llamaremos "entries" y aplicamos este "Object.entries()"

const entries = Object.entries(data);
console.log(entries);
// hasta aqui con este codigo si lo corremos nos daremos cuenta que nos devuelve una "matris", que en este caso es un "arreglo" o nos lo devuelve en forma de "array", en donde podemos ver como esta estableciendo los elementos.

// Pero si nosotros queremos saber cuantos elementos contiene un objeto, era mas complicado transformarlo y luego saber con estos elementos.
// Obviamente al utilizar "Object.entries" disponemos del valor ".length"
// Y de esta forma podemos saber cuantos elementos contiene nuestro arreglo, en este caso ¿Cuantos elementos tiene este objeto aqui?

// Entonces con este codigo nos va a permitir saber cuantos elementos hay, con la que tambien me puede servir para poder realizar una validacion gracias a este dato o segun sea el caso.
console.log(entries.length);
// ==============================


// PARTE N° 2 - Object Values

// El cual nos devuelve los valores de un objeto a un arreglo.

// Volvemos a crear una constante la cual llamaremos "data" con sus elementos

// OBJECT VALUES
const persona = {
    nombre: 'Jose',
    apellido: 'Morelos',
    telefono: 16678225,
    estado: 'Jonalapa',
    ciudad: 'Maninita',
}

// Una vez que se tengas establecidos los elementos dentro del objeto.
// Entonces... ahora lo que necesitamos es saber como vamos a poder hacer la transformacion

// como hacemos la transformacion
const value = Object.values(persona);
console.log(value);


// Devuelve un arreglo
// Ahora podemos verlos como los ha podido transformar...
// Y ahora con esa transformacion podemos tener un arreglo de "string" con los valores de ese objecto

// De esta forma a nosotros nos va a servir bastante estas transformaciones, para cuando necesitemos o queramos hacer algunas converciones o entender cuantos elementos hay en un objeto.

// tambien podemos saber cuantos elementos tiene este objeto la siguiente line
console.log(value.length);
// ==============================


// PARTE N° 3 - Padding

// Otra de las caracteristas que se ha añadido es el "Padding"

// Como podemos anteponer o agregar una cadena vacia o elementos a este "string"

// PADDING
const string = 'hello';
// ¿Cuantos caracteres vamos a tener? queremos tener 7 para poder agregar 2 mas
console.log(string.padStart(7, 'hi'));
// ¿Cuantos caracteres vamos a tener? ¿Cual es el maximo? respuesta es 12 
console.log(string.padEnd(12, ' ----------'));

// ¿Para qué nos podria servir esto?
// Para cuando nosotros estemos trabajando con mas de una lado Frontend nosostros vamos a querer presentar una estructura de elementos imaginemos una lista de un menu o de los productos que vas a comprar y lo necesitamos presentar visualmente para la opcion de impresion pues es mas amigable de esta forma.
console.log('food'.padEnd(12, ' ----------'));
// ==============================


// PARTE N° 4 - Padding

// De lo que nos podemos dar cuenta tambien en todo el codigo que hemos hecho es que estamos ocupando el "tailing-comas"
// Eso que es? eso es cuando agregamos una coma "," al final dentro de nuestro objeto para pode entonces establecer una forma en la cual es mas amigable y simple para nosotros los desarrolladores empezar a añadir mas elementos sin caer en un error que es muy comun.

// Y que existe ahora, pues esta el llamado al "trailing-comas"

// TRAILING-COMAS
// Al crear el objecto no hay problema si las propiedades de este objeto a la hora de declarar el nombre y su valor al finalizar agregamos una "," (coma) para poder evitar errores, si es que se llegan a generar mas
const obj = {
    name: 'Joao',
}
// Esa coma puede establecer que puede continuar otro valor no descarta la idea.
// ==========================================================



// #8 Clase - ECMAScript 8 y sus caracteristicas "Async Await"

// Esta es una de la principales funcionalidades que se agrego en ES8, vamos a saber:
    // -Como funciona
    // -Cuales son sus caracteristicas principales que tiene
    // -Y porque ha sido una de las caracteristicas mas importantes


// Vamos a entender que es lo que necesitamos para entenderlas
    // 1. Vamos a crear una funcion
    // 2. Despues hacemos una promesa
    // 3. Y vamos a invocarla

    // Y vamos a enternder como realmente nos ayudan las promesas junto con Async Await a entender esta nueva caracteristica


    // con una Arrow Function
const helloWorld = () => {
    // Aqui esta la logica de nuestra promesa y lo primero que debe pasar, es que, debe de "resolver" y tambien "rechazar" por cualquier situacion que se de por nuestra promesa
    return new Promise((resolve, reject) =>{
        // Eso quiere decir que si no llega a suceder lo que nosotros esperamos, pues va a pasar por este estado
        // Por aqui es por donde le vamos a decir que pase y que resuelva de la siguiente manera creando un "TRUE", con una operacion de un if
        (false)
        // que nos va a permitir a nosotros, decirle que esta promesa va a ejecutarse.
        ? setTimeout(() => resolve('Hello World'), 3000)
        // Ya que es un operador ternario ?, : un "if" "else"
        // Else
        : reject(new Error('Valio todo!!!'))
    });
    // Con esto ya tenemos nuestra promesa con la cual nosotros vamos trabajar nuestras "async await", esas funciones que le agregan este valor para identificar que se va a comportar de forma distinta y que nos va a permitir a nosotros:
        // - Ser mas claros, a la hora de construir, este tipo de funciones.
        // - Va a trabajar de mejor forma con el asincronismo
};

// Vamos a empezar a ver como funciona y cual es la logica que implica utilizarlas.
// Vamos hacer una nueva constante
const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
};
helloAsync();

// NOTAS: Esta es una de las funciones que nos va ayudar bastante, pero existe otra forma interesante dentro de Async Await
// ==============================


// PARTE N° 2 - Como ejecutar correctamente el "async await"
// Otra pruesta generando una funcion
const anotherFunction = async () => {
    // Esto nos va a permitir a nosotros trabajar mejor con el "try catch"
    // Vamos a probar por sobre lo que se va ejecutar, en todo caso que esto tenga un error o un valor que no coincide con la logica que estamos haciendo obviamente va a caer en el "catch" y vamos a poder capturar ese error
    // Entonces esta es la forma propuesta para manejar correctamente los errores.
    // Lo primero que tenemos que hacer es encapsular dentro de "try" lo que vamos a ejecutar
    try{
        const hello = await helloWorld();
        console.log(hello);
    } catch (error){
        console.log(error);
    }
};

anotherFunction();
// ==========================================================











// ==========================================================
// ==========================================================
// ==========================================================
// ==========================================================
// ==========================================================







