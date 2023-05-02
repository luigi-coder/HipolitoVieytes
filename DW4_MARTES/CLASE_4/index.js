/* const http = require('http');
const server = http.createServer((request, response)=>{
    console.log(request);
});

server.listen(8000);  */

/* // Creacion servidor con express
const express = require('express');
const app = express(); // Creacion servidor
const port = 3000; // configuracion puerto


// METODOS BASICOS HTTP 
app.get('/', (request, response)=>{
    response.send(`Hola mundo desde ${request.method}`);
    console.log(request);
});
app.post('/', (request, response)=>{
    response.send(`Hola mundo desde ${request.method}`);
});
app.put('/', (request, response)=>{
    response.send(`Hola mundo desde ${request.method}`); 
})
app.delete('/', (request, response)=>{
    response.send(`Hola mundo desde ${request.method}`);
});


app.listen(3000, ()=>{
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
 */

/* const express = require('express');
const app = express(); // Creacion servidor
const port = 3000; // configuracion puerto

// middleware
const requestLoggerMiddleware = (request, response, next)=>{

    console.log(`Nueva solicitud 

    ${request.originalUrl} ${request.method}`);

    next();
}

app.use(requestLoggerMiddleware);

app.listen(3000, ()=>{
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
 */


const express = require('express');
const session = require('express-session');

const app = express(); 
const port = 3000; 

// Middleware de analisis de cuerpo de la solicitud;
// usando un middleware propio de express
app.use(express.urlencoded({extended: true}));

app.use(session({
    secret: 'mi-clave-secreta',
    resave: false,
    saveUninitialized: false
}));

// BBDD
const users = [
    {username: 'admin1', password: 'admin123'},
    {username: 'admin2', password: 'admin124'},
]


// Funcion para verificar si el usuario esta autenticado.
const checkIfUserIsAuthenticated = (req)=>{
    return req.session.isAuthenticated == true;
}

// Middleware de autenticacion
const authenticationMiddleware = (req, res, next)=>{

    const isAuthenticated = checkIfUserIsAuthenticated(req);

    if(isAuthenticated){
        next();
    }else {
        res.redirect('/login');
    }
}

// Rutas 
app.get('/', (req, res)=>{
    // la vista devuelta
    res.send("Bienvenido a la pagina de AP");
});

app.get('/ruta-privada', authenticationMiddleware, (req, res)=>{
    res.send('Bienvenido a la pagina privada');
});

app.get('/login', (req, res)=>{
    res.send(`
    <form method="post" action="/login">
        <input type="text" name="username", placeholder="Nombre de usuario">
        <input type="password" name="password", placeholder="Contraseña">
        <input type="submit" value="Ingresar">
    </form>
    `);
})

app.post('/login', (req, res)=>{

    const { username, password } = req.body;

    const user = users.find(user => user.username === username && user.password === password);

    if(user){
        // quiere decir que esta auteticado
        req.session.isAuthenticated = true;
        res.redirect('/ruta-privada');
        
    }else {
        res.send("Credenciales erroneas");
        // acceder aun archivo completo
    }
})


app.listen(3000, ()=>{
    console.log(`Servidor corriendo en http://localhost:${port}`);
});


// Ejemplo con objeto
const persona = {
    nombre: 'Juan',
    edad: 30,
    ciudad: 'Madrid'
  };
  
  // Desestructuración de objeto
  const { nombre, edad, ciudad } = persona;
  
  console.log(nombre); // Juan
  console.log(edad); // 30
  console.log(ciudad); // Madrid
  
  
  