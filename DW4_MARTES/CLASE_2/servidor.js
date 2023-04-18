const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.readFile('./index.html', null, function (error, data) {
      if (error) {
        res.writeHead(404);
        res.write('Archivo no encontrado');
      } else {
        res.write(data);
      }
      res.end();
    });
  } else if (req.url === '/usuarios') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    
    const usuarios = [
      { nombre: 'Juan', edad: 25 },
      { nombre: 'María', edad: 30 },
      { nombre: 'Pedro', edad: 40 },
    ];
    // Pushear el nombre ingresado por el input
    // al array usuarios
    res.end(JSON.stringify(usuarios));

  } else if (req.method === 'POST' && req.url === '/bienvenida') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      console.log(`Nombre de usuario: ${body}`);
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(`<h1>Bienvenido/a a APV 2021, ${body}!</h1>`);
      res.end();
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('¡Página no encontrada!\n');
  }
});

server.listen(3000, () => {
  console.log('El servidor está escuchando en el puerto 3000');
});

/* const http = require('http');
const server = http.createServer((request, response)=>{
   const url = request.url;
   if(url === '/'){
        response.write('<html>');
        response.write('<head> <title> Apv 2021 </title> </head>');
        response.write(' <body> <h1>Ingrese su nombre </h1> <form action="/nombreUsuario" method="GET"> <input type="text" name="usuario"/>       <button type="submit">Enviar</button> </body>');
        response.write('</html>');
        return response.end();

   }else if(url === '/error'){

        response.write("Error 404");
        response.end();

   }else {

        response.write('<html>');
        response.write('<head> <title> Apv 2021 </title> </head>');
        response.write(' <body> <h1>¡Bienvenido/a a APV 2021! </h1>  </body>');
        response.write('</html>');
        response.end();
   }
});
server.listen(3000); */



