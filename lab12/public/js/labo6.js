const contra = document.getElementById("contra");
const veri = document.getElementById("vericontra");

const minusculas = "qwertyuiopasdfghjklñzxcvbnm"
const mayusculas = "QWERTYUIOPASDFGHJKLÑZXCVBNM"
const numeros = "1234567890 "

function leer(caracter) {
    for (let x of contra.value) {
        if (caracter.includes(x)) {
            return true;
        }
    } 
    return false;
}

function especial() {
    for (let x of contra.value) {
        if (!( minusculas.includes(x) || mayusculas.includes(x) || numeros.includes(x) )) {
            return true;    
        }
    }   
    return false;
}

function seguridad() {
    let safe = 0;
    if (contra.value.length > 5) {safe ++;}
    if (contra.value.length > 7) {safe ++;}
    if (leer(minusculas)) {safe ++;}
    if (leer(mayusculas)) {safe ++;}
    if (leer(numeros)) {safe ++;}
    if (especial()) {safe ++;} 
    return safe;
}

function validar() {
    if (contra.value == "" || veri.value == "") {
        alert("porfavor llene todos los campos");
    } else if (contra.value != veri.value) {
        alert("la contraseña no coincide")
    } else if (contra.value.length < 7) {
        alert("la contraseña debe ser más larga");
    } else if (seguridad() < 7) {
        alert("la contraseña debe contener mayúsculas, minúsculas, número y caracteres especiales");
    } else {
        alert("contraseña validada");
    }     
}

contra.oninput = function retro() {
    if (seguridad() == 0) {
        document.getElementById("demo").innerHTML = ""
    } else if (seguridad() < 3) {
        document.getElementById("demo").innerHTML = "<div class='debil'> la contraseña es débil </div>";
    } else if (seguridad() < 5) {
        document.getElementById("demo").innerHTML = "<div class='regular'> la contraseña es regular </div>";
    } else if (seguridad() < 6) {
        document.getElementById("demo").innerHTML = "<div class='fuerte'> la contraseña es fuerte </div>";
    } else if (seguridad() < 7) {
        document.getElementById("demo").innerHTML = "<div class='segura'> la contraseña es segura </div>";
    }
}

function mostrarpreguntas() {
    p = document.getElementById("preguntas");
    p.hidden = !p.hidden;
}