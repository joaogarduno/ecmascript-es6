// Caracteristica Object
// OBJECT ENTRIES
const data = {
    frontend: 'Joao',
    backend: 'Isabel',
    design: 'Jose',
}

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);
// ==========================================================


// OBJECT VALUES
const persona = {
    nombre: 'Jose',
    apellido: 'Morelos',
    telefono: 16678225,
    estado: 'Jonalapa',
    ciudad: 'Maninita',
}

// como hacemos la transformacion
const value = Object.values(persona);
console.log(value);
console.log(value.length);

// Devuelve un arreglo

// ==========================================================


// PADDING
const string = 'hello';
// ¿Cuantos caracteres vamos a tener? queremos tener 7 para poder agregar 2 mas
console.log(string.padStart(7, 'hi'));
// ¿Cuantos caracteres vamos a tener? ¿Cual es el maximo? respuesta es 12 
console.log(string.padEnd(12, ' ----------'));

// ¿Para qué nos podria servir esto?
// Para cuando nosotros estemos trabajando con mas de una lado Frontend nosostros vamos a querer presentar una estructura de elementos imaginemos una lista de un menu o de los productos que vas a comprar y lo necesitamos presentar visualmente para la opcion de impresion pues es mas amigable de esta forma.
console.log('food'.padEnd(12, ' ----------'));
// ==========================================================

// TRAILING-COMAS
// Al crear el objecto no hay problema si las propiedades de este objeto a la hora de declarar el nombre y su valor al finalizar agregamos una "," (coma) para poder evitar errores, si es que se llegan a generar mas
const obj = {
    name: 'Joao',
}







