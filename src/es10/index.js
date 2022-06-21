// ==========================================================
// #10 Clase - Caracteristicas de esta version ES10, version que salio en junio del 2019
// ==============================


// PARTE N° 1 - Flat()
// 
let array = [1,2,3, [1,2,3, [1,2,3]]];

// devolver una matriz con cualquier submatris aplanada
// Tambien vamos a poder entender como esta estructurada cada uno de estos elementos
// console.log(array.flat());
// Si nosotros ejecutamos solamente "flat()" de esta forma va a tener la profundidad o la primer profundidad, en este caso seria "solo un nivel"
// Entonces si lo ejecutamos notaremos que solo un nivel esta haciendose llamar.

// En dado caso de que yo quisiera un segundo nivel o el nivel completo que en este caso tiene este arreglo pues pasariamos este valor como argumento
console.log(array.flat(2));
// De esta forma podemos ver como ha aplanado nuestro arreglo, generando esta matris de esta forma
// Nosotros podemos pasarle cuantos valores sea el caso de la matris o de los elementos que va a tener, entonces para que lo tengas presente, de que ese es el valor de la profundidad (en este caso es el numero 2), sobre la cual quieres trabajar el metodo ".flat()"
// ==============================


// PARTE N° 2 - Flat Map

// Ahora que ya entendemos sobre este metodo vamos a trabajar sobre otro valor que es "Flat Map"
// El cual nos va a permitir mapear cada elemento, despues, pasarlo a una funcion y aplanarlo segun el resultado

let array = [1,2,3,4,5,6,7,8,9];
console.log(array.flatMap(value => [value, value * 2]));
// Va a mapear cada uno de los elementos
// ==============================


// PARTE N° 3 - Print Start

let hello = '                 hello world';
console.log(hello);
console.log(hello.trimStart())



let hello = 'hello World       ';
console.log(hello);
console.log(hello.trimEnd());
// De esta forma nos va a permitir setear mejor y trabajar con los "strings cuando sea el caso"
// ==============================


// PARTE N° 4 - Optional Catch Binding

// Eso significa que podemos pasar de forma opcional el parametro de error al valor de "catch"

// Para manejar correctamente los errores cuando estemos trabajando con las funciones de tipo "async" pues teniamos nuestro "try".
// Normalmente lo encontramos asi:
try{

} catch (error){
    // aqui va la funcionalidad con este elemento 
    error
}

// Pero.... podemos aplicarlo de la siguiente manera
// Podemos no utilizar o no implementar este valor (error) y directamente ya va estar disponible dentro del bloque de codigo del "catch"
try{

} catch {
    error
}
// Esta forma nos va a permitir a nosotros no pasar ese valor y poder trabajar mas facil con lo que vendria siendo "Try - Catch"
// ==============================


// PARTE N°5  - From entries

// El cual va a transformar "clave" y "valor" en un objeto.
// Esto es my interesante cuando estes trabajando con arreglos y quieras transformarlos a objetos
let entries = [["name", "oscar"], ["age", 32]];
// de esta forma estamos estructurando lo que seria un arreglo que tiene 2 elementos y queremos convertirlos a un objeto

// Para poder hacer eso, debemos utilizar lo que seria..
console.log(Object.fromEntries(entries));
// Esto nos devuelve un objeto construido con la clave valor de cada uno de estos elementos que esta dentro de este arreglo.
// Esto es muy importante cuando estemos trabajando con arreglos, porque ahora si podemos transforma de "arreglo" a "objeto" o de "objetos" a "arreglos" segun sea el caso necesites a la hora de estar trabajando con el codigo
// ==============================


// PARTE N°6  - Objeto de tipo simbolo

// Objeto de tipo simbolo, el cual nos va a permitir acceder a una descripcion

let mySymbol = `My symbol`;
let symbol = Symbol(mySymbol);

console.log(symbol.description);
// Esto solo ha sido añadido dentro de esta version para poder encontrar o acceder a la descripcion de un objeto de tipo simbolo

// Entonces... con esto podemos ver que elementos se encuentran dentro de este tipo de elementos que estan disponibles en este lenguaje



// ==============================
// ==============================


// ==========================================================
// ==========================================================
// ==========================================================