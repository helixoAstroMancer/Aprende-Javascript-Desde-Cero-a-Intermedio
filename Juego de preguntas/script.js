//quien escribio la Odisea?
var questionuno = document.getElementById("uno"); 

var homero = document.getElementById("homero");
var dante = document.getElementById("dante");
var cervantes = document.getElementById("cervantes");
var shakespeare = document.getElementById("shakespeare");

var correct = document.getElementById("correct");
var incorrect = document.getElementById("incorrect");


homero.addEventListener("click", function(e) {
    e.preventDefault();
    homero.style.backgroundColor = "green";
    correct.style.display = "block";
    score++;
    setTimeout(function() {
        questionuno.style.display = "none";
        questiondos.style.display = "block";
    }, 2000);


})

dante.addEventListener("click", function(e) {
    e.preventDefault();
    dante.style.backgroundColor = "red";
    incorrect.style.display = "block";
    setTimeout(function() {
        questionuno.style.display = "none";
        questiondos.style.display = "block";
    }, 2000);
})

cervantes.addEventListener("click", function(e) {
    e.preventDefault();
    cervantes.style.backgroundColor = "red";
    incorrect.style.display = "block";
    setTimeout(function() {
        questionuno.style.display = "none";
        questiondos.style.display = "block";
    }, 2000);
})

shakespeare.addEventListener("click", function(e) {
    e.preventDefault();
    shakespeare.style.backgroundColor = "red";
    incorrect.style.display = "block";
    setTimeout(function() {
        questionuno.style.display = "none";
        questiondos.style.display = "block";
    }, 2000);
})  

//Cuál es el río más largo del mundo
var questiondos = document.getElementById("dos");

var nilo = document.getElementById("nilo");
var amazonas = document.getElementById("amazonas");
var yangtse = document.getElementById("yangtse");
var misisipi = document.getElementById("misisipi");

var correct2 = document.getElementById("correct2");
var incorrect2 = document.getElementById("incorrect2");

nilo.addEventListener("click", function(e) {
    e.preventDefault();
    nilo.style.backgroundColor = "green";
    correct2.style.display = "block";
    score++;
    setTimeout(function() {
        questiondos.style.display = "none";
        questiontres.style.display = "block";
    }, 2000);
})

amazonas.addEventListener("click", function(e) {
    e.preventDefault();
    amazonas.style.backgroundColor = "red";
    incorrect2.style.display = "block";
    setTimeout(function() {
        questiondos.style.display = "none";
        questiontres.style.display = "block";
    }, 2000);
})

yangtse.addEventListener("click", function(e) {
    e.preventDefault();
    yangtse.style.backgroundColor = "red";
    incorrect2.style.display = "block";
    setTimeout(function() {
        questiondos.style.display = "none";
        questiontres.style.display = "block";
    }, 2000);
})

misisipi.addEventListener("click", function(e) {
    e.preventDefault();
    misisipi.style.backgroundColor = "red";
    incorrect2.style.display = "block";
    setTimeout(function() {
        questiondos.style.display = "none";
        questiontres.style.display = "block";
    }, 2000);
})

//En qué año llegó Cristóbal Colón a América
var questiontres = document.getElementById("tres");

var noventaydos = document.getElementById("noventaydos");
var quinientos = document.getElementById("quinientos");
var ochentaycinco = document.getElementById("ochentaycinco");
var diez = document.getElementById("diez");

var correct3 = document.getElementById("correct3");
var incorrect3 = document.getElementById("incorrect3");

noventaydos.addEventListener("click", function(e) {
    e.preventDefault();
    noventaydos.style.backgroundColor = "green";
    correct3.style.display = "block";
    score++;
    setTimeout(function() {
        questiontres.style.display = "none";
        questioncuatro.style.display = "block";
    }, 2000);
})

quinientos.addEventListener("click", function(e) {
    e.preventDefault();
    quinientos.style.backgroundColor = "red";
    incorrect3.style.display = "block";
    setTimeout(function() {
        questiontres.style.display = "none";
        questioncuatro.style.display = "block";
    }, 2000);
})

ochentaycinco.addEventListener("click", function(e) {
    e.preventDefault();
    ochentaycinco.style.backgroundColor = "red";
    incorrect3.style.display = "block";
    setTimeout(function() {
        questiontres.style.display = "none";
        questioncuatro.style.display = "block";
    }, 2000);
})

diez.addEventListener("click", function(e) {
    e.preventDefault();
    diez.style.backgroundColor = "red";
    incorrect3.style.display = "block";
    setTimeout(function() {
        questiontres.style.display = "none";
        questioncuatro.style.display = "block";
    }, 2000);
})

//Cuál es el planeta más grande del sistema
var questioncuatro = document.getElementById("cuatro");

var jupiter = document.getElementById("jupiter");
var saturno = document.getElementById("saturno");
var neptuno = document.getElementById("neptuno");
var tierra  = document.getElementById("tierra");

var correct4 = document.getElementById("correct4");
var incorrect4 = document.getElementById("incorrect4");

jupiter.addEventListener("click", function(e) {
    e.preventDefault();
    jupiter.style.backgroundColor = "green";
    correct4.style.display = "block";
    score++;
    setTimeout(function() {
        questioncuatro.style.display = "none";
        questioncinco.style.display = "block";
    }, 2000);
})

saturno.addEventListener("click", function(e) {
    e.preventDefault();
    saturno.style.backgroundColor = "red";
    incorrect4.style.display = "block";
    setTimeout(function() {
        questioncuatro.style.display = "none";
        questioncinco.style.display = "block";
    }, 2000);
})

neptuno.addEventListener("click", function(e) {
    e.preventDefault();
    neptuno.style.backgroundColor = "red";
    incorrect4.style.display = "block";
    setTimeout(function() {
        questioncuatro.style.display = "none";
        questioncinco.style.display = "block";
    }, 2000);
})  

tierra.addEventListener("click", function(e) {
    e.preventDefault();
    tierra.style.backgroundColor = "red";
    incorrect4.style.display = "block";
    setTimeout(function() {
        questioncuatro.style.display = "none";
        questioncinco.style.display = "block";
    }, 2000);
})

//quien pinto la Mona Lisa
var questioncinco = document.getElementById("cinco");

var leonardo = document.getElementById("leonardo");
var vicent = document.getElementById("vicent");
var pablo = document.getElementById("pablo");
var claude = document.getElementById("claude");

var correct5 = document.getElementById("correct5");
var incorrect5 = document.getElementById("incorrect5");

leonardo.addEventListener("click", function(e) {
    e.preventDefault();
    leonardo.style.backgroundColor = "green";
    correct5.style.display = "block";
    score++;
    setTimeout(function() {
        document.write("<h1>Tu puntaje es: " + score + "/5</h1>");
    }, 1000);
})

vicent.addEventListener("click", function(e) {
    e.preventDefault();
    vicent.style.backgroundColor = "red";
    incorrect5.style.display = "block";
    setTimeout(function() {
        document.write("<h1>Tu puntaje es: " + score + "/5</h1>");
    }, 1000);
})

pablo.addEventListener("click", function(e) {
    e.preventDefault();
    pablo.style.backgroundColor = "red";
    incorrect5.style.display = "block";
    setTimeout(function() {
        document.write("<h1>Tu puntaje es: " + score + "/5</h1>");
    }, 1000);
})

claude.addEventListener("click", function(e) {
    e.preventDefault();
    claude.style.backgroundColor = "red";
    incorrect5.style.display = "block";
    setTimeout(function() {
        document.write("<h1>Tu puntaje es: " + score +"</h1>");
    }, 1000);
})

var score = 0;
