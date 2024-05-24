document.write("<h2>ejercicio 1</h2>");
let n = prompt("ingrese un número");
if (!isNaN(n)){
    document.write("<table>");
    document.write("<tr><th>Número</th><th>Cuadrado</th><th>Cubo</th></tr>");
    for (let i = 1; i <= n; i++) {
        let i2 = i*i;
        let i3 = i*i*i;
        document.write("<tr><td>"+i+"</td><td>"+i2+"</td><td>"+i3+"</td></tr>");
    }
    document.write("</table>");
} else {
    alert("refrescar la página, ingrese un numero valido")
}


document.write("<br/><h2>ejercicio 2</h2>");
let numero1 = Math.floor(Math.random() * 100) + 1;
let numero2 = Math.floor(Math.random() * 100) + 1;
let inicio = Date.now(); 

let respuesta = prompt("¿Cuál es la suma de " + numero1 + " y " + numero2 + "?");
let tiempoEmpleado = (Date.now() - inicio) / 1000;
let sumaCorrecta = numero1 + numero2;

if (respuesta == sumaCorrecta) {
    document.write("<p>¡Respuesta correcta!</p>");
} else {
    document.write("<p>Respuesta incorrecta.</p>");
}
document.write("<p>Tiempo empleado: " + tiempoEmpleado + " segundos.</p>");



document.write("<br/><h2>ejercicio 3</h2>");
function contador(numeros) {
    let negativos = 0;
    let ceros = 0;
    let positivos = 0;
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] < 0) {
            negativos++;
        } else if (numeros[i] == 0) {
            ceros++;
        } else {
            positivos++;
        }
    }
    return {
        neg: negativos,
        cero: ceros,
        pos: positivos
    };
}
let tamanio = Math.floor(Math.random() * 32) + 16
const arreglo = [];
for (let i = 0; i < tamanio; i++) {
    arreglo.push(Math.floor(Math.random() * 201) - 100);
}
const resultado = contador(arreglo);
document.write("<p>contando el arreglo [" + arreglo + "]</p>");
document.write("<p>Cantidad de números negativos: " + resultado.neg + "</p>");
document.write("<p>Cantidad de ceros: " + resultado.cero + "</p>");
document.write("<p>Cantidad de números positivos: " + resultado.pos + "</p>");



document.write("<br/><h2>ejercicio 4</h2>");
function promedios(matriz) {
    let promedios = [];
    for (let fila of matriz) {
        let suma = 0;
        for (let elemento of fila) {
            suma += elemento;
        }
        let promedio = suma / fila.length;
        promedios.push(promedio);
    }
    return promedios;
}
const matriz = [
    [10, 23, 30],
    [5, 12, 25],
    [8, 15, 16]
];
const resultados = promedios(matriz);
document.write("<p>Promedios de cada fila de la matriz [[10, 23, 30],[5, 12, 25],[8, 15, 16]]:</p>")
document.write(resultados)



document.write("<br/><br/><h2>ejercicio 5</h2>");
function inverso(numero) {
    let cadenaNumero = numero.toString();
    let numeroInverso = parseInt(cadenaNumero.split('').reverse().join(''));
    return numeroInverso;
}
const numero = 193875743;
document.write("<p>Número original: " + numero + "</p>");
document.write("<p>Número invertido: " + inverso(numero) + "</p>");



document.write("<br/><h2>ejercicio 6</h2>");
document.write("<p>calcular el volumen y el area superficial de un prisma rectangular</p>");

class prisma_rectangular {
    constructor(largo, alto, ancho) {
        this.largo = largo;
        this.alto = alto;
        this.ancho = ancho;
    }
    volumen() {
        return this.largo*this.alto*this.ancho
    }
    area() {
        return 2*(this.largo*this.alto + this.alto*this.ancho + this.largo*this.ancho)
    }
}

let largo = Math.floor(Math.random() * 100) + 1;
let ancho = Math.floor(Math.random() * 100) + 1;
let alto = Math.floor(Math.random() * 100) + 1;
document.write("creado un prisma rectangular de largo: " + largo + ", ancho: " + ancho + ", altura: " + alto);
const prisma = new prisma_rectangular(largo, alto, ancho);
document.write("<p>su volumen es: " + prisma.volumen() + " unidades cubicas</p>")
document.write("<p>su area superficial es: " + prisma.area() + " unidades cuadradas</p>")


