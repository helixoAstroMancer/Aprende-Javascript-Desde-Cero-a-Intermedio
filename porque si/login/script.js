function login() {
    let usuario = document.getElementById("user").value;
    let password = document.getElementById("pass").value;
    
    if (usuario === ""|| password ==="") {
        alert("no hay nada????")
        return;
    }
    if(usuario !== "admin" || password !== "1234") {
        alert("usuario o contraseña");
        return;
    }
    let contenedor = document.getElementById("star");
    contenedor.style.display = "none";

    let mensaje = document.createElement("div");
    mensaje.innerHTML = "bienvenido " + usuario + "!";
    document.body.appendChild(mensaje);
}
