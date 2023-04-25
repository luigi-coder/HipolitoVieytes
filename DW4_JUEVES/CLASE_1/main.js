/* // variables 
let nombre = "Vania"; // Texto
let numero = 100; // Number

console.log(nombre);

nombre = "Luis";

console.log(nombre);

// constantes
const PI = 3.14;

console.log(PI);

PI = 3;

console.log(PI); */

/* let nombre = prompt("Ingrese su nombre");

console.log(nombre); */

// f(x) = x + 1;  ALGORITMO

/* let edad = prompt("Ingrese su edad");

if(edad >= 18){
    console.log("Pasa capo");

    if(edad >= 30){
        console.log("No vip");
    }

}else {
    console.log("Volve cuando cumplas la mayoria de edad");
} */

/* for (
    let i = 0; // Inicializador
    i < 10; // condicion o freno
    i++ // Actualizador 
    ) {
    
} */

// 3 x 1 = 3
// 3 x 2 = 6
// 3 x 3 = 9

/* const numero = Number(prompt("Ingrese un numero"));

for (let i = 0; i <= 12; i++) {

    let resultado = numero * i;

    console.log(`
        ${numero} x ${i} = ${resultado}
    `);
}  */

// Array          0  1  2  3  4  5  6  7  8  9
/* const numeros  = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const nombres = [
    "Vania", 
    "Luis", 
    "Juan", 
    "Pedro", 
]

console.log(numeros[2]);
console.log(numeros[9]);
console.log(nombres[2]); */

/* const LIBRO = {
    n_paginas : 150,
    autor : "Jorge Luis Borges",
    editorial : "AP"
}

console.log(LIBRO.autor); */
/* 
const FIDEOS = {
    marca : "Marca",
    precio : 100
}

const GASEOSA = {
    marca : "Marca",
    precio : 100
}

const PAN = {
    marca : "Marca",
    precio : 100
}

const PRODUCTOS = [
    FIDEOS,
    GASEOSA,
    PAN
]

console.log(PRODUCTOS);
//console.log(PRODUCTOS[1].precio);

const MERMELADA = {
    marca : "Marca",
    precio : 100
}

PRODUCTOS.push(MERMELADA);

console.log(PRODUCTOS); */

const PRODUCTOS = [
    {
        marca : "Fideos",
        precio : 100
    },
    {
        marca : "Arroz",
        precio : 200
    },
    {
        marca : "Pan",
        precio : 300
    },
    {
        marca : "Cerveza",
        precio : 300
    }
]

/* let carrito = [];
console.log(carrito);

// Definicion de una funcion
// productos es un parametro
function agregarProductosCarrrito(array, producto){

    // cuerpo de la funcion
    array.push(producto);
    console.log(array);

    eliminarProducto(carrito, producto);
}

const p1 = PRODUCTOS[0];
const p2 = PRODUCTOS[1];
const p3 = PRODUCTOS[2];

function eliminarProducto(array, producto) {

    array.pop();
    console.log(array);
}

// Llamado o invocacion de una funcion
agregarProductosCarrrito(carrito, p1); */


// Quiero que se imprima en consola los productos
// cuyo precio sea mayor

/* const filtro = PRODUCTOS.filter((p)=> p.precio > 100);
console.log(filtro);

let array = [];

const filtro2 = PRODUCTOS.forEach((p)=>{

    if(p.precio > 100){
        array.push(p);
    }

    console.log(array);
}) */

// f(x) = x + 1;

/* const sumar = (n1, n2) => {

    let r = n1 + n2;

    console.log(r);
}

sumar(20, 30);
sumar(10300, 40); */


/* function saludar(nombre){

    return new Promise((resolve, reject)=>{
        if(nombre === "santiago" || nombre === "SANTIAGO"){
            resolve("Bienvenido " + nombre);
        }else if(nombre === ""){
            reject("No ingreso un nombre");
        }else {
            reject("No sos bienvenido");
        }
    });
}

saludar("santi")
    .then((mensaje)=>{
        console.log(mensaje);
    })
    .catch((mensaje)=>{
        console.log(mensaje);
    });
 */

/* =
== "2" == 2
=== "2" === 2 */

// pokeAPI

/* let url = "https://pokeapi.co/api/v2/pokemon/1/";

fetch(url)
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        console.log(data.abilities);
    }); */










































