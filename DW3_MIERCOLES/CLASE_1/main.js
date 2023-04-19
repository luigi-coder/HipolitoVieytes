/* let nombre = "Javascript"; // String o cadena de texto
let numero = 10; // Number
let booleano = true; // Boolean */

// f(x) = x + 1

// ALGORITMO
// Entrada
/* let n1 = parseInt(prompt("Ingrese un número"));

// Proceso 
n1 = n1 + 1;

// Salinas
console.log(n1); */

/* // Concatenación
let nombre = prompt("Ingrese su nombre");
let apellido = prompt("Ingrese su apellido");

// concatenación o juntando 
let r = nombre + " " + apellido;

// Template String o plantillas literales
let r2 = `${nombre} ${apellido}`;

console.log(r); */

/* let n = 10;

console.log(n);

const PI = 3.1416;

console.log(PI);

PI = 2;

console.log(PI);

n = 1000;

console.log(n); */

/* V AND F = F
V OR F = V */

/* let nota = Number(prompt("Ingrese su nota"));

if(nota >= 7 && nota <= 10){
    // Ejecucion de codigo
    console.log("Aprobado");

}else if(nota >= 1 && nota <= 6){
    // Ejecucion de codigo
    console.log("Reprobado");
}else {
    // Ejecucion de codigo
    console.log("NOTA NO VALIDA BRO");
}
 */
//      i
// 3 x 1 = 3
// 3 x 2 = 6
// 3 x 3 = 9

/* const n = Number(prompt("Ingrese el numero..."));

let m = document.getElementById("mul");

m.innerHTML = "";

for(let i = 0; i <= 12; i++){

    let multi = n * i;
    
    m.innerHTML += `
       ${n} x ${i} = ${multi} <br />
    `;
} */

// Acumular +=

// Indices     0  1  2  3
/* const array = [1, 2, 3, 4]; // Valores
const nombres = ["Juan", "Pedro", "Maria", "Jose"];
const mixto = [1, "Juan", true, 2.5];

console.log(array[3]);
nombres[3] = "Vania";
console.log(nombres[3]);
console.log(nombres);
 */

// Objetos
const MESSI = {
    nombre: "Leo",
    apellido: "Messi",
    altura: "Altura"
}

// Notacion del punto
console.log(MESSI.nombre);

// array productos

const productos = [
    {
        nombre: "Pantalon",
        precio: 100
    },
    {
        nombre: "Camisa",
        precio: 50
    },
    {
        nombre: "Zapatos",
        precio: 200
    }
];

/* productos[2].nombre = "Zapatillas"

console.log(productos[2].nombre);

// Metodo de busqueda find

const busca = productos.find( (producto) => producto.nombre === "Camisa");
console.log(busca);

const filtro = productos.filter( (producto) => producto.precio > 50);
console.log(filtro); */

// funciones





// defincion de una funcion
// x + 1

//evaluacionNotas();
function evaluacionNotas(notita){ // Parametro

    if(notita >= 7 && notita <= 10){
        // Ejecucion de codigo
        console.log("Aprobado");

    }else if(notita >= 1 && notita <= 6){
        // Ejecucion de codigo
        console.log("Reprobado");
    }else {
        // Ejecucion de codigo
        console.log("NOTA NO VALIDA BRO");
    }
}

const evaluacionNotas2 = (notita)=> {
    if(notita >= 7 && notita <= 10){
        // Ejecucion de codigo
        console.log("Aprobado");

    }else if(notita >= 1 && notita <= 6){
        // Ejecucion de codigo
        console.log("Reprobado");
    }else {
        // Ejecucion de codigo
        console.log("NOTA NO VALIDA BRO");
    }
}

//evaluacionNotas2();
/* let nota = Number(prompt("Ingrese su nota"));
// Invocar o llamar a la funcion
// f           (x) = x + 1
evaluacionNotas(nota); // Argumento 

evaluacionNotas(3);
 */

/* const suma = (a,b)=> a + b;
console.log(suma(1,2)); */


class Cantante {
    // Variable id de la clase
    static id = 0;
    
    constructor(nombre, discografia, genero){
        // incrementar el id
        this.id = Cantante.id++;
        this.nombre = nombre;
        this.discografia = discografia;
        this.genero = genero;
    }
}

// extens

const cantante1 = new Cantante("Juan", "Discografia", "Genero");
const cantante2 = new Cantante("Pedro", "Discografia", "Genero");
const cantante3 = new Cantante("Maria", "Discografia", "Genero");
const cantante4 = new Cantante("Jose", "Discografia", "Genero");
const cantante5 = new Cantante("Vania", "Discografia", "Genero");
// creame 6 cantantes mas
const cantante6 = new Cantante("Vania", "Discografia", "Genero");
const cantante7 = new Cantante("Vania", "Discografia", "Genero");

const cantantes = [
    cantante1, 
    cantante2, 
    cantante3, 
    cantante4, 
    cantante5,
    cantante6,
    cantante7
];

    console.log(cantantes);

// renderizar en el html

const renderizar = (cantantes) => {

    let lista = document.getElementById("lista");

    lista.innerHTML = "";

    cantantes.forEach( (cantante) => {

        lista.innerHTML += `
            <li>${cantante.nombre}</li>
            <li>${cantante.genero}</li>
        `;

        // Crear un boton por cada cantante
        let boton = document.createElement("button");
        boton.innerHTML = cantante.id;

        lista.appendChild(boton);
    });
}

renderizar(cantantes);

// transformar el array a JSON
const json = JSON.stringify(cantantes);
console.log(cantantes)
console.log(json);








