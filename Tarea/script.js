function comprar(precio) {
    let descuento = 0;
    
    if (precio > 350000) {
        descuento = precio * 0.15;
    }
    if (precio >= 200000 && precio <= 300000) {
        descuento = precio * 0.10;
    }
    
    let total = precio - descuento;
    let resultado = "Precio del detergente: $" + precio + "<br>Descuento: $" + descuento + "<br>Total: $" + total;
    
    document.getElementById("total").innerHTML = resultado;
}

function comprar2(precio) {
    let descuento = 0;
    
    if (precio > 350000) {
        descuento = precio * 0.15;
    }
    if (precio >= 200000 && precio <= 300000) {
        descuento = precio * 0.10;
    }
    
    let total = precio - descuento;
    let resultado = "Precio del jabom: $" + precio + "<br>Descuento: $" + descuento + "<br>Total: $" + total;
    
    document.getElementById("total").innerHTML = resultado;
}

function comprar3(precio) {
    let descuento = 0;
    
    if (precio > 350000) {
        descuento = precio * 0.15;
    }
    if (precio >= 200000 && precio <= 300000) {
        descuento = precio * 0.10;
    }
    
    let total = precio - descuento;
    let resultado = "Precio del shampoo: $" + precio + "<br>Descuento: $" + descuento + "<br>Total: $" + total;
    
    document.getElementById("total").innerHTML = resultado;
}

function comprar4(precio) {
    let descuento = 0;
    
    if (precio > 350000) {
        descuento = precio * 0.15;
    }
    if (precio >= 200000 && precio <= 300000) {
        descuento = precio * 0.10;
    }
    
    let total = precio - descuento;
    let resultado = "Precio del colgate: $" + precio + "<br>Descuento: $" + descuento + "<br>Total: $" + total;
    
    document.getElementById("total").innerHTML = resultado;
}

