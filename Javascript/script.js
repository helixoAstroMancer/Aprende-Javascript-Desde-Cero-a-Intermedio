
// Template Strings - Strings Literales
// Permite crear cadenas de texto de forma mas facil y legible

let alumno;
/*const nombre = "Juan";
const apellido = "Perez";
const edad = 30;*/

let nombre = "Juan";
let apellido = "Perez";
let edad = 30;

console.log("Tu nombre es" + nombre + "tu apellido es" + apellido + "Y tienes" + edad);
console.log(`Tu nombre es ${nombre}, tu apellido es ${apellido} y tienes ${edad}`);

//arrow functions
/*function sumar(a, b) {
    return a + b;
}*/

//const suma = (a, b) => { return a + b; };
const suma = (a, b) => a + b;
