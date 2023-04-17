/* // Variable 
let numero = 100;
// Constante
const PI = 3.14;
// Objeto
// nombre -> clave
// Jose -> valor
const persona = {
    nombre: "Jose",
    apellido: "Perez",
    edad: 19
}

function p(x){
    console.log(x)
}

console.log(persona.nombre);
console.log(persona.apellido);

// Arrays 
// 0 hasta lenght
const array = [1, 2, 3, 4];
const nombres = ["Luis", "Vania", "Federico"];
console.log(array);

console.log(array[3]);

p(nombres);
p(nombres[2]);
 */

/* 
// definicion de una funcion
function saludo(n){
    // cuerpo de la funcion
    // concatenacion
    console.log("Hola soy " + n);
}

saludo("federico");
saludo("Vania");
saludo("Luis");

function sumar(n1,n2){

    console.log(n1 + n2);
}

sumar(10, 10);
sumar(32423423, 123213); */

// prompt
/* let n1 = Number(prompt("ingrese un numero"));
let n2 = parseInt(prompt("ingrese otro numero"));
let r = n1 + n2;

let n = "Ana";
console.log(typeof r);
console.log(typeof n);
 */


// let edad = prompt("Ingrese su edad")

/* if(!(edad >= 18)){
    console.log("No podes pasar");
}else {
    console.log("Podes pasar");
} */


/* if(edad >= 18){

    if(edad >= 30){
        console.log("Podes pasar, pero no al VIP");
    }else {
        console.log("Podes pasar, disfruta del VIP");
    }

}else {
    console.log("No podes pasar");
} */

/* if(edad >= 18){
    console.log("Podes pasar");
}else if(edad >=30){
    console.log("No podes entra al VIP");
}else {
    console.log("No podes pasar");
}  */

// Bucles
/* for (let i = 1; i <= 10; i++) {
  console.log(i);
} */

/* const productos = [
    {
        nombre: "Nike",
        precio: 1000
    },
    {
        nombre: "Adidas",
        precio: 1100
    },
    {
        nombre: "Puma",
        precio: 1200
    }
]
 */
/* const saludo = (n)=>{
    console.log("Hola soy "+ n)
}

saludo("Luis"); */

//productos.forEach((e)=> console.log(e));
/* const p = productos.filter((p)=> p.precio > 1000);
console.log(p); */

/* // Bucle por conteo
for (let i=0; i < productos.length; i++) {
    
    console.log(productos[i].nombre);
    console.log(productos[i].precio);
}

let n = 0;
// Bucle condicional
while(n < 10){
    console.log(n);
    n++; // sumarle uno a n
}

let v = true;
let f = false; */

class Persona {

    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
}

/* const obj = {
    nombre: "Jose",
    apellido: "Salinas",
    edad: 19
}

console.log(obj);

const obj1 = new Persona("Jose", "Salinas",19);
const obj2 = new Persona("Jose", "Salinas",19);

console.log(obj1); */

/* let promesa1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('La primera promesa ha sido resuelta!');
    }, 3000);
});

promesa1
    .then((resultado) => {
        console.log(resultado);
    })
    .catch((error) => {
        console.log(error);
    }); */

/* 
let url = "https://pokeapi.co/api/v2/pokemon";

fetch(url)
    .then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data.results);
    }).catch((error) => {
        console.log(error);
    });

const getPokemons = async ()=>{
    try{
        const respuesta = await fetch(url);
        const data = await respuesta.json();
        console.log(data.results);

    }catch(error){
        console.log(error);
    }
}

getPokemons(); */








