// ES7

// #6 Clase - ECMAScript version 7 y sus caracteristicas


// En esta version se han incoorporado 2 cambios muy particulares:
    // Valor de "Includes"
    // Operaciones en forma exponencial

// Se crea una nueva carpeta con el nombre ES7
// y se crea un archivo con el nombre index.js (dentro de esa carpeta creada)
// ==============================


// PARTE N° 1 - Metodo Includes

// METODO INCLUDES
// Este metodo llamado includes que trabaja sobre un arreglo o un string, nos va a permitir a nosotros saber si hay un elemento dentro de este valor.


// metodo "include"
// Este metodo "include" es para validar un valor dentro de un string o de un arreglo.
// anterior mente utilizabamos indexOff y un codigo mas complejo para asignarlo, pero en esta version los disponemos de forma mas amigable
let numbers = [1,2,3,4,5,6,7,8];

// vamos a validar si existe un numero en especifico
if (numbers.includes(8)){
    console.log('Si se encuentra el valor');
} else{
    console.log('Estas muy mal!');
}
// Entonces con este metodo podemos asignarle a este arreglo un valor por el cual queremos saber si hay una disponibilidad dentro de ese elemento (el array)

// Tambien de esta forma vamos a poder utilizar "includes" para saber si hay un valor dentro de un string o de un arreglo.
// Anteriormente se utilizaba "indexOf()" con un codigo mas complejo para asignarlo
// ==============================


// PARTE N° 2 - Elevar a la potencia


// Otro de los puntos incoorporados es como nosotros vamos a elevar a la potencia.
// Entonces.. nosotros vamos a utilizar una estructura que nosotros necesitamos.

let base = 4;
let exponent = 3;
let result = base ** exponent;

console.log(result);

// Estas son las 2 principales caracteristicas que se añadieron a la revision 7 de EcmaScript
// ==========================================================
