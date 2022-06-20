// ==========================================================
// #9 Clase - Operador de Reposo, 

// Principales caracteristiscas que se añadieron en la version 9, esta es lanzada en junio del 2018, vamos a entender estas nuevas caracteristicas
// ==============================


// PARTE N° 1 - OPERADOR DE REPOSO
// El cual puede extrar las propiedades de un objeto que aun no se ha construido:

// ejemplo:
const obj = {
    name: 'Pedro',
    age: 23,
    country: 'MX',
};
// Una vez que tengamos nuestro objeto lo que vamos hacer es utilizar el operador de reposo para separar los elementos.


// Aqui utilizamos el operador de reposo
// En este ejemplo extraemos el valor que buscamos o que nos interesa
// De esta forma podemos establecer lo que necesitamos de un objeto
// let { name, ...all } = obj;
// console.log(name, all);

// otra forma a la anterior, estableciendo lo que necesitamos de un objeto
// Es decir en este ejemplo solo necesitamos nuestro "nombre" "edad" y lo demas no lo necesito, pero no queremos destructurar todos los elementos, que podemos hacer en esos casos... veamos el siguiente ejemplo
let { country, ...all } = obj;
console.log(all);
// Sin necesidad de generar un nuevo objeto y volver a insertar estos valores a este mismo de esta forma somos mas agiles para preparar lo que necesitamos.
// ==============================


// PARTE N° 2 - Propiedades de Propagacion

// Utilizando las propiedades de propagacion vamos a poder unir uno o dos o 3 o cuantos elementos queramos de objetos a un nuevo objeto
 
// Vamos a crear un objeto
const obj = {
    name: 'Joao',
    age: 35,
}

const obj1 = {
    // Vamos a utilizar a este operador de propagacion, para poder anidar los 2 elementos anteriores del objeto que son "name" y "age"
    // con esta propiedad de ...obj nos va a permitir anidad los 2 elementos anteriores
    ...obj, 
    conuntry: 'MX',
}
console.log(obj1);
// Y con esto podemos ver que ya tenemos la estructuracion de este nuevo objeto, basado en la composicion de otro 2 elementos
// Y esta es una de las caracteristicas añadidas a ecmascript 9
// ==============================


// PARTE N° 3 - Promise Finally()

// Otro de los puntos interesantes y que la comunidad acepto bastante, es una nueva caracteristica, que es "promise.finally"
// Nosotros podemos saber cuando ha terminado el llamado y poder ejecutar alguna funcion o logica de codigo segun sea el caso.
// Vamos a ver como se constituye esta caracteristica.

// vamos a crear una funcion que va ser una promesa
const helloWord = () => {
    return new Promise((resolve, reject) => {
        (true)
        // ? resolve('Hello Word')
        ? setTimeout(() => resolve('Hello Word'), 3000)
        : reject(new Error('Error en la aplicacion'))
    });
    // Ya tenemos nuestra promesa construida que nos va a permitir probarla
};

// Y ahora lo que vamos hacer es llamarla y ver como vamos a desencadenar alguna logica que segun sea el caso, vamos a ejecutar al final de la ejecucion.
helloWord()
.then(response => console.log(response))
.catch(error => console.log(error))
.finally(() => console.log('Finalizado'))

// ==============================



// PARTE N° 4 - Regex Data

// Nos ayuda a entender mejor cuando estamos trabajando "regex".
// han añadido mejoras sobre este punto

// veamos algunos ejemplos para entenderlo mejor y sobre cuales mejoras fueron

// En este caso es, ¿Como podemos agrupar bloques del "regex"? y poder acceder a cada uno de ellos

// Para esto vamos a generar una constante que nos va a permitir a nosotros manejar el regex
// Esta va ser la constitucion de como vamos a manejar las fechas partiendo primero por el "año", despues, por el "mes" y al final por el "dia" 
// Debemos establecer esa regla
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
// con la linea de codigo "regexData" ya tenemos nuestro "regex" listo que nos va a permitir a nosotros trabajar correctamente

// Ahhora lo que vamos hacer es el "match", el cual nos va a permitir saber si estan bien los datos establecidos sobre este "regex"
const match = regexData.exec('2018-04-20');


// Ahora queremos entender como esta constituido cada elemento segun lo que queramos tener ahi.
// Entonces hemos hecho los grupos y queremos entrar a nuestros datos, muy particulares como el mes o al día

// Obteniendo el primer grupo de numeros
const year = match[1]
const month = match[2]
const day = match[3]

console.log(year, month, day);
// Con esto nos muestra de forma separada los datos



// ==============================
// ==============================
// ==============================


// ==========================================================
// ==========================================================
// ==========================================================