/* const nombres = [
    "Jose", 
    "Federico",
    "Carlos"
]


function print(arr){

    for (let i = 0; i < arr.length; i++) {

        console.log(arr[i]);
    }
} */

const nombres = [
    "Jose", 
    "Federico",
    "Carlos"
]

/* let nombre = prompt("Ingrese un nombre");

nombre = nombre.charAt(0).toUpperCase() + nombre.slice(1);

let index = nombres.indexOf(nombre);

if(index !== -1){
    console.log("El elemento se encuentra en el array ");
}else {
    console.log("El elemento no se encuentra en el array");
} */


/* let nombre = "Luis";
let apellido = "Salinas";

console.log(nombre + apellido); */

/* let nombre = "Luis";

nombre += " ";

nombre += "Salinas";

nombre += " ";

nombre += 31;

console.log(nombre); */


/* function mostrarNombre(perrito){

    let nombre = `Digite el numero correspondiente`
    nombre += `al nombre\n`

    perrito.forEach((e, index)=>{
        nombre += (index + 1) + " " + e + "\n";
    });

    return nombre;
}

let pregunta = prompt(mostrarNombre(nombres)); */

let auto = "https://elcomercio.pe/resizer/"
auto += "3g6fT5LKmLXxZ1Mg5kwPE65CZVo=/980x0/"
auto += "smart/filters:format(jpeg):quality"
auto += "(75)/arc-anglerfish-arc2-prod-elcom"
auto += "ercio.s3.amazonaws.com/public/"
auto += "BCRXKCATT5DATJHCICISDXPXKM.jpg"


let auto2 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5N7aysblN25sXii3wi9qBZBciQphi_AsOjQ&usqp=CAU"

class Automovil {

    static contador = 0;

    constructor(marca, modelo, precio, img) {
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
        this.img = img;
        this.id = ++Automovil.contador;
    }
}


const array = [
    new Automovil("Ford", "Fiesta", 120000, auto),
    new Automovil("Wolkswagen", "Gol", 130500, auto2),
    new Automovil('Chevrolet', 'Spark', 280000, auto2),
    new Automovil('Toyota', 'Corolla', 200000, auto2),
    new Automovil('Honda', 'Civic', 380900, auto2),
    new Automovil('Nissan', 'Sentra', 600000, auto2),
    new Automovil('Hyundai', 'Accent', 150000, auto2),
    new Automovil('Kia', 'Rio', 900000, auto2)
]

const carrito = [];

const tienda = document.getElementById('tienda');

function renderizar(array) {

    array.forEach((elemento)=> {
    
        const div = document.createElement('div');
        div.classList.add("card");

        // remove 

        // toggle
    
        div.innerHTML =`
        <div class="card">
        <div class="container-img">
            <img src="${elemento.img}"
                alt="Imagen del producto">
        </div>
        <div class="card-body">
            <h3 class="card-title">${elemento.marca}</h3>
            <h4 class="card-subtitle">${elemento.modelo}</h4>
            <p class="card-text">Descripción del producto.</p>
            <h5 class="card-price">$${elemento.precio}</h5>
            <button class="btn btn-primary">Comprar</button>
        </div>
        </div>
        `

        tienda.appendChild(div);

        
        // evento click para cada boton
        const btn = div.querySelector('.btn');
        btn.addEventListener('click', (e) => {
            
            agregarAlCarrito(elemento);
        });
     
    
    })
}

renderizar(array);


function agregarAlCarrito(e){
   
    // Buscar si el elemento ya existe en el carrito
    let index = carrito.findIndex((elemento) => elemento.id == e.id);

    // Si el elemento no existe lo agrego al carrito
    if(index == -1){
        carrito.push(e);
    }else{
        console.log("El elemento ya existe");
        
        // Si la propiedad "cantidad" no existe en el objeto "e", crearla con valor 1
        if (!e.hasOwnProperty('cantidad')) {
            e.cantidad = 1;
        }

        // Bug de cantidad

        // Incrementar la cantidad en 1
        e.cantidad++;
    
        // Actualizar el objeto existente en el carrito
        carrito[index] = e;

    }

    console.log(carrito);
}



// ejemplo de spread operator uniendo arrays
const array2 = [1, 2, 3, 4, 5];
const array3 = [6, 7, 8, 9, 10];

const array4 = [...array2, ...array3];
console.log(array4);

// ejemplo del spreadn operator con objetos
const obj1 = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 30
}

const obj2 = {
    ...obj1,
    pais: "Argentina"
}

console.log(obj2);

// ejemplo del spread operator con funciones
const suma = (a, b, c) => {
    return a + b + c;
}

const numeros = [1, 2, 3];

const resultado = suma(...numeros);

console.log(resultado);







