// --- VEGETALES --- cuando se usan dos variables con el mismo nombre, se toma la ultima declarada
//var listvegetables = document.getElementByClassName("listvegetables");
var listvegetables = document.getElementById("listvegetables");
//var item = document.getElementsByClassName("item vegetables");//

// ---FRUTAS---
//var listfruits = document.getElementByClassName("listfruits");
var listfruits = document.getElementById("listfruits");
//var item2 = document.getElementsByClassName("item fruits"); //

var listvegetables = document.getElementById("listvegetables");


//--- SELECTOES UNICOS Y MULTIPLES ---
var li = document.querySelector("li");
var li2 = document.querySelectorAll("li");

// --- ESTILOS DESDE JAVASCRIPT (CSS)---
listvegetables.style.background = "red";
listvegetables.style.color = "blue";
listvegetables.className = "margen";

listfruits.style.background = "yellow";
listfruits.style.color = "green";
listfruits.style.margin = "10px";
// nota importante: si se usa className, se sobreescribe cualquier otra clase que tenga el elemento
//asi que si lo que quieres es es modificar todo el estilo, usa className, pero si quieres agregar o quitar una clase sin afectar las demas, usa add o remove
// --- add class ---
/*listvegetables.classList.add("margen");
listfruits.classList.add("margen");*/

// --- remove class ---
/*listvegetables.classList.remove("margen");
listfruits.classList.remove("margen");*/

// --- li.innerHTML (recuerda no repetir modificadores de variables) ---
li.innerHTML= "<strong>Vegetales</strong>";
li2[3].innerHTML= "<strong>Apple</strong>"; // --- para seleccionar un elemento en especifico de una lista
li.innerHTML= "<h1>list the fruist</h1>"; // --- si se usa un asiento, el anterio no podra verse

// recomendado usar mejor ID que class solo para elementos unicos y no repetibles, ya que ID es unico y class puede repetirse
