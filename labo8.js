function promedio(arreglo) {
    let sum = 0;
    const len = arreglo.length
    for (let i = 0; i < len; i++){
        sum += arreglo[i];
    }
    return sum/len;
}
let tamanio = Math.floor(Math.random() * 16) + 8
const arreglo = [];
for (let i = 0; i < tamanio; i++) {
    arreglo.push(Math.floor(Math.random() * 101));
}
console.log("promedio del arreglo [" + arreglo + "] es: " + promedio(arreglo));


function crear_archivo(str) {
    const filesystem = require('fs');
    filesystem.writeFileSync('labo8.txt', str);
    console.log("archivo creado");
}
crear_archivo("segunda función, recibí este string y lo escribí en este archivo ");


function ordenaInsercion(lista) {
    let i, j, aux, n;
    n = lista.length
    for (i = n-2; i > -1; i--) {
        aux = lista[i];
        for (j = i; j < n-1 && aux > lista[j+1]; j++) {
            lista[j] = lista[j+1];
        }
        lista[j] = aux;
    }
}
tamanio = Math.floor(Math.random() * 16) + 8
const lista = [];
for (let i = 0; i < tamanio; i++) {
    lista.push(Math.floor(Math.random() * 101));
}
console.log("arreglo [" + lista + "]");
ordenaInsercion(lista);
console.log("ordenado [" + lista + "]");



const http = require('http');

const server = http.createServer((request, response) => {
    response.setHeader('Content-Type', 'text/html');
    response.write(`
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title> laboratorio 8 Gonzalo </title>
    </head>
    <body>
        <header> 
            <h1> Intro a las aplicaciones web, HTML5, ciclo de vida de los sistemas de información, y CSS</h1>    
        </header>
        <article>
            <header>
                <h2> mi información personal </h2>
            </header> 
            <p> Gonzalo Morán Sánchez - A01710494 - A01710494@tec.mx </p>
        </article>
        <article>
            <header> 
                <h2> mis aficiones </h2>
            </header>
            <p> Antes programaba videojuegos y producía música (nivel principiante) </p>
        </article>
        <section>
            <p> 
                ¿Cuál es la diferencia entre Internet y la World Wide Web?
                Internet es la infraestructura global de redes de computadoras, y la World Wide Web es un sistema que 
                se ejecuta con Internet que permite el acceso y la distribución de información a través de páginas web
            </p>
            <p>
                ¿Cuáles son las partes de un URL?
                Protocolo, Subdominio, Dominio, TLD, ruta, query
            </p>
            <p>
                ¿Cuál es el propósito de los métodos HTTP?
                GET: solicita una representación de un recurso específico.
                HEAD: pide una respuesta idéntica a la de una petición GET, pero sin el cuerpo de la respuesta.
                POST: envía una entidad a un recurso en específico.
                PUT: reemplaza todas las representaciones actuales del recurso de destino con la carga útil de la petición.
                PATCH: aplica modificaciones parciales a un recurso.
                DELETE: borra un recurso en específico.
            </p>
            <p>
                ¿Qué método HTTP se debe utilizar al enviar un formulario HTML, por ejemplo cuando 
                ingresas tu usuario y contraseña en algún sitio? ¿Por qué?
                POST, porque se utiliza para enviar datos al servidor para que los procese, y el 
                formulario puede contener información sensible que no debería aparecer en la URL
            </p>
            <p>
                ¿Qué método HTTP se utiliza cuando a través de un navegador web se accede a una página a través de un URL?
                GET
            </p>
            <p>
                Un servidor web devuelve una respuesta HTTP con código 200. ¿Qué significa esto? ¿Ocurrió algún error?
                no hay error, significa que la solicitud fue extiosa
            </p>
            <p>
                ¿Es responsabilidad del desarrollador corregir un sitio web si un usuario reporta que
                intentó acceder al sitio y se encontró con un error 404? ¿Por qué? 
                no es su responsabilidad porque el error indica que el servidor web no pudo encontrar el recurso solicitado 
            </p>
            <p>
                ¿Es responsabilidad del desarrollador corregir un sitio web si un usuario reporta que 
                intentó acceder al sitio y se encontró con un error 500? ¿Por qué? 
                sí es su responsabilidad porque el error indica que algo salió mal en el servidor 
                mientras intentaba procesar la solicitud del cliente
            </p>
            <p>
                ¿Qué significa que un atributo HTML5 esté depreciado o desaprobado (deprecated)? 
                significa que aunque aún puede ser compatible con los navegadores y funcionar correctamente, 
                se considera obsoleto o no recomendado para su uso futuro. 
                En su lugar, se recomienda utilizar una alternativa más moderna y estándar.
            </p>
            <p>
                Menciona algunos elementos de HTML 4 que en HTML5 estén desaprobados.
                center, align, font
            </p>
            <p>
                ¿Cuáles son las diferencias principales entre HTML 4 y HTML5?
                Semántica mejorada, soporte para audio y video nativo, formularios mejorados,
                compatibilidad con dispositivos móviles, diferenciación entre contenido y presentación
            </p>
            <p> ¿Qué componentes de estructura tiene una tabla? table, tr, td, th, thead, tbody, tfoot </p>
            <p>
                ¿Qué componentes de estilo tiene una tabla?
                bordes y espaciado, fondo y color de texto, tamaño y alineación de texto
            </p>
            <p>
                ¿Cuáles son los principales controles de una forma HTML5?
                inputs de: texto, contraseña, correo, número, teléfono, URL, fecha, archivo, checkbox, radio, rango
            </p>
            <p> ¿Qué tanto soporte HTML5 tiene el navegador que utilizas?  </p>
            <p>
                ¿Cuál es el ciclo de vida de los sistemas de información?
                describe las etapas que un sistema de información atraviesa desde su concepción hasta su retiro
            </p>
            <p>
                ¿Cuál es el ciclo de desarrollo de sistemas de información?
                se refiere específicamente al proceso de desarrollo de un sistema de información
            </p>
        </section>
        <section>
            <p>
                Como ingeniero de software ¿cuál es tu recomendación sobre el uso de !important en un CSS?
                evitar su uso siempre que sea posible, priorizar la especificidad del selector
            </p>
            <p>
                Si se pone una imagen de fondo en una página HTML, ¿por qué debe escogerse con cuidado?
                por el impacto en la legibilidad del contenido, el tiempo de carga de la página y
                la compatibilidad con diferentes resoluciones de pantalla
            </p>
            <p>
                Como ingeniero de software, ¿cuál es tu recomendación al elegir las
                unidades de un propiedad de estilo entre %, px y pt?
                el % es ideal para diseños responsivos y fluidos porque escala automáticamente con el tamaño del
                contenedor padre, el px es útil para para detalles de diseño precisos y elementos de interfaz de 
                usuario que requieren alineación precisa, el pt no es muy adecuado porque Puede resultar en tamaños
                de texto y espacios impredecibles en diferentes dispositivos y resoluciones de pantalla
            </p>
            <p>
                ¿Por qué el uso de una versión minimizada del CSS mejora el rendimiento del sitio?
                reduce el tamaño del archivo y el tiempo de transeferencia desde el servidor al navegador
            </p>
        </section>
        <article>
            <header>
                <h2> Referencias </h2>
            </header>
            <nav>
                <p> <a href="https://chat.openai.com"> ChatGPT </a> </p>
                <p> <a href="https://developer.mozilla.org/es/docs/Web/HTTP/Methods">
                        Métodos de petición HTTP - HTTP | MDN
                    </a> 
                </p>
            </nav>
        </article>
        <footer>
            <p> <a href="https://code.visualstudio.com"> Visual Studio Code </a> </p>
        </footer>
    </body>
    </html>
    `);
    response.end();
});

server.listen(3000);
