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
// ==========================================================


// tambien se ha incorporado como elevar a la potencia
let base = 4;
let exponent = 3;
let result = base ** exponent;

console.log(result);

// Estas son las 2 principales caracteristicas que se añadieron a la revision 7 de EcmaScript
