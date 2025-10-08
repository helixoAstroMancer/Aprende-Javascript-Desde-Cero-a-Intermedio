var users = [
    {
        nameuser: "Juan",
        password: 1234,
    },
    {   
        nameuser: "Maria",
        password: 123,
    },
    {
        nameuser: "Pedro",
        password: 12345,
    },
    {
        nameuser: "Ana",
        password: 123456,
    }
];

var students = [
    {
        name: "Juan",
        note: 10,
    },
    {
        name: "Maria",
        note: 6,
    },
    {
        name: "Pedro",
        note: 8,
    },
    {
        name: "Ana",
        note: 9,
    }
];

var userprompt = prompt("Ingrese su nombre de usuario:");
var passwordprompt = Number(prompt("Ingrese su contraseña:"));

function userExists(user, pass) {
    for (var i = 0; i < users.length; i++) {
        if (user === users[0].nameuser && pass === users[0].password) {
            return true;
        } else if (user === users[1].nameuser && pass === users[1].password) {
            return true;
        } else if (user === users[2].nameuser && pass === users[2].password) {
            return true;
        } else if (user === users[3].nameuser && pass === users[3].password) {
            return true;
        }
    }       return false;
}

function longin(user, pass) {
    if (userExists(user, pass)) {
            alert(students);
        } else {
            alert("Usuario o contraseña incorrecta");
        }
}  

    
longin(userprompt, passwordprompt);
