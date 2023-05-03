document.getElementById("myForm").addEventListener("submit", (e)=>{

    e.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let telefono = document.getElementById("telefono").value;
    let sitioWeb = document.getElementById("sitio").value;
    let asunto = document.getElementById("asunto").value;
    let mensaje = document.getElementById("mensaje").value;

    const datos = {
        nombre,
        email,
        telefono,
        sitioWeb,
        asunto,
        mensaje    
    }
    
    fetch('https://jsonplaceholder.typicode.com/posts', {

        method: 'POST',
        body: JSON.stringify(datos),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })

})




























/* fetch('https://pokeapi.co/api/v2/pokemon')
.then((res)=> res.json())
.then((data)=> console.log(data));  */


// Las promesas sirven para consumir una API
// o para hacer peticiones http

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

saludar("Luis")
    .then((mensaje)=>{
        console.log(mensaje);
    })
    .catch((mensaje)=>{
        console.log(mensaje);
    }); 


 */