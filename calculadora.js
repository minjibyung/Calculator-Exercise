document.getElementById("display").value = 0;

function mostrar_numeros(numero) {
    document.getElementById("display").value = numero;
}
var cantidad = "";
var sumatoria = 0;
var multiplicar = false;
var sumar = false;
var restar = false;
var dividir = false;
var borrado = false;
var taje = false;
var raiz = false;


function mostrar_numeros(numero) {
    document.getElementById("display").value = cantidad + numero;
    cantidad = document.getElementById("display").value;
}

function suma() {
    sumatoria = sumatoria + parseInt(cantidad);
    document.getElementById("display").value = sumatoria;
    cantidad = "";
    sumar = true;

}

function resta() {
    sumatoria = sumatoria + parseInt(cantidad);
    document.getElementById("display").value = sumatoria;
    cantidad = "";
    restar = true;

}

function multiplicacion() {
    sumatoria = sumatoria + parseInt(cantidad);
    document.getElementById("display").value = sumatoria;
    cantidad = "";
    multiplicar = true;

}

function division() {
    sumatoria = sumatoria + parseInt(cantidad);
    document.getElementById("display").value = sumatoria;
    cantidad = "";
    dividir = true;
}

function porcentaje() {
    sumatoria = sumatoria + parseInt(cantidad);
    document.getElementById("display").value = sumatoria;
    cantidad = "";
    taje = true;
}


function raizcuadrada() {
    sumatoria = sumatoria + parseInt(cantidad);
    document.getElementById("display").value = sumatoria;
    cantidad = "";
    raiz = true;

}

function borrar() {
    sumatoria = parseInt(cantidad) * (0);
    document.getElementById("display").value = sumatoria;
    cantidad = "";
    borrado = true;
}


function igual() {
    if (sumar) {
        document.getElementById("display").value = sumatoria + parseInt(cantidad);
    }
    if (restar) {
        document.getElementById("display").value = sumatoria - parseInt(cantidad);
    }
    if (multiplicar) {
        document.getElementById("display").value = sumatoria * parseInt(cantidad);
    }
    if (dividir) {
        document.getElementById("display").value = sumatoria / parseInt(cantidad);
    }
    if (taje) {
        document.getElementById("display").value = sumatoria * parseInt(cantidad) / 100;
    }
    if (raiz) {
        document.getElementById("display").value = sumatoria / parseInt(cantidad);
    }
    if (borrado) {
        document.getElementById("display").value = "C" + parseInt(cantidad);

    }
}