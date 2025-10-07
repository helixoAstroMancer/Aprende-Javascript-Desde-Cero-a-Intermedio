//variables
var numero1 = Number(prompt("tu primer numero"));
var numero2 = Number(prompt("pon tu segundo numero"));

var selecciona = prompt("seleciona la operacion",suma,resta,multiplicacion,divicion);

var suma = numero1 + numero2;
var resta = numero1 - numero2;
var divicion = numero1 / numero2;
var multiplicacion = numero1 * numero2;

/*condicionales parte 1
if (selecciona === "suma") {
    alert (suma);
}
        
if (selecciona === "resta") {
    alert (resta);
}

if (selecciona === "divicion") {
   alert (divicion);
}

if (selecciona === "multiplicacion") {
    alert (multiplicacion);
}
*/

//var, prompt, alert, if, Number.
//condicional compartido && 
// condicional opcional ||

//condicionales part 2 

if (selecciona === "suma") {
        alert (suma);
}   else if (selecciona === "resta") {
        alert (resta);
}   else if (selecciona === "multiplicacion") {
        alert (multiplicacion);
}   else if (selecciona === "divicion") {
        alert (divicion)
}

//tuve dicifultades con el uso de === y el uso de las comillas
//tambien con el uso de else if
