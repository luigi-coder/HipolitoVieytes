/* const http = require('http');

const servidor = http.createServer((request, response)=>{

    console.log(request);
})

servidor.listen(8000); */

/* 
const http = require('http');
const server = http.createServer((request, response)=>{

   const url = request.url;

    if(url === '/'){
        response.write('<html>');
        response.write('<head> <title> Apv 2021 </title> </head>');
        response.write(`
        <name> 
            <h1>Ingrese su nombre </h1> 
            <form action="/nombreUsuario" method="GET"> 
                <input type="text" name="usuario"/>       
                <button type="submit">Enviar</button> 
            </form>
            </name>`);
        response.write('</html>');
        return response.end();
    }

    response.write('<html>');
    response.write('<head> <title> Apv 2021 </title> </head>');
    response.write(`
    <name> 
        <h1>¡Bienvenido/a  2023! </h1>  
    </name>`);
    response.write('</html>');
    response.end();

});
server.listen(3000);
 */

const http = require('http');
const fs = require('fs');

const servidorLocal = http.createServer((req, res)=>{
    
    const url = req.url;

    if(url === '/'){

        res.writeHead(200, { 'Content-type': 'text/html'});

        fs.readFile('index.html', null , (error, data)=>{

            if(error){

                res.write("Archivo no encontrado");

            }else {
                res.write(data);
            }
        })
    }else if( url === '/usuarios'){
        
        res.writeHead(200, { 'Content-type': 'application/json'});

        const usuario = [
            { nombre: 'Juan', edad: 25 },
            { nombre: 'María', edad: 30 },
            { nombre: 'Pedro', edad: 40 },
        ]

        res.end(JSON.stringify(usuario));

    }else if(req.method === 'POST' && req.url === '/bienvenido'){

        let name = '';
    
        req.on('data', (data) => {
            name += data.toString();
        })
    
        req.on('end',()=>{
    
            console.log(`Nombre del usuario: ${name}`)
    
            res.writeHead(200, { 'Content-type': 'text/html'});
            res.write(`<h1>Bienvenido/a a APV 2021, ${name}!</h1>`);
            res.end();
        })
    }
});

servidorLocal.listen(3000);