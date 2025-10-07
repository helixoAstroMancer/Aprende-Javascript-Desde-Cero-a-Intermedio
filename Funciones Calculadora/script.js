function multiplicacion(a, b) {
    if (a>20 || b>50) {
        return "Error: la operacion es dificil";
    } else {
        return a * b;
    }   
}

alert (multiplicacion(10, 5));
