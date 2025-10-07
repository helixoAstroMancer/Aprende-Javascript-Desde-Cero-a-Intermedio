var bnt = document.getElementById("btn");
var input = document.getElementById("input");

bnt.addEventListener("click", function(){
    alert("Hola Mundo");
});
//shear key codes js
bnt.addEventListener("mouseenter", function(){
    bnt.style.background = "red"; 
});

bnt.addEventListener("mouseleave", function(){
    bnt.style.background = "blue";
});
bnt.style.background = "blue";
input.addEventListener("keypress", function(evento){
    if(evento.keyCode === 13){
        console.log("Haz presionado la tecla enter");
    }
});
