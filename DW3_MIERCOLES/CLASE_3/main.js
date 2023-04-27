document.getElementById("myForm").addEventListener("submit", function(event){
    event.preventDefault();
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let telefono = document.getElementById("telefono").value;
    let sitioWeb = document.getElementById("sitio").value;
    let asunto = document.getElementById("asunto").value;
    let mensaje = document.getElementById("mensaje").value;
    let datos = {
        nombre: nombre,
        email: email,
        telefono: telefono,
        sitioWeb: sitioWeb,
        asunto: asunto,
        mensaje: mensaje
    }
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(datos),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(json => {
        console.log(json);
        document.getElementById("datos").innerHTML = JSON.stringify(json);
    })
})