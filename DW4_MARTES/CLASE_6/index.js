/* fetch('https://google.com')
    .then((response) => {
        console.log(response);
        return response.text();
    })
    .then((data) => {
        console.log(data);
    }) */

/* fetch('https://pokeapi.co/api/v2/pokemon')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        const pokemon = data.results;
       
        pokemon.forEach((element) => {
            console.log(element.name);
        });
    }); */


/* const https = require('https');

https.get('https://pokeapi.co/api/v2/pokemon', (response) => {
    let data = '';

    response.on('data', (chunk) => {
        data += chunk;
    });

    response.on('end', () => {
        const jsonData = JSON.parse(data);
        console.log(jsonData);
        const pokemon = jsonData.results;

        pokemon.forEach((element) => {
            console.log(element.name);
        });
    });
}).on('error', (error) => {
    console.error(error);
});
 */


/* const chalk = require('chalk');

// Ejemplo de uso de chalk
console.log(chalk.blue('Texto en azul'));
console.log(chalk.red.bold('Texto en rojo y negrita'));
console.log(chalk.bgYellow.black('Texto con fondo amarillo y texto en negro')); */

const express = require('express');
const chalk = require('chalk');

const port = 3000;

const app = express();

app.get('/', (req, res)=>{
    //codigo interno del endpoint
    console.log(chalk.blue.bgYellowBright.bold(` GET -> http://localhost:${port} `));
    console.log("-----OBJETO REQUEST-----");
    console.log(req)
    console.log("-----METODO DEL REQUEST-----");
    console.log(req.method)
    console.log("-----URL DEL REQUEST-----");
    console.log(req.url)
    
    //información para el cliente
    res.send("Bienvenido a la app. 😎")
});

app.get('/nuevo-endpoint', (req, res)=>{
    //codigo interno del endpoint
    let fecha = new Date();
    let hora = fecha.getHours();
    let minutos = fecha.getMinutes();
    console.log(chalk.white.bgBlueBright.bold(` GET -> http://localhost:${port}/nuevo-endpoint `));
    console.log(chalk.black.bgGreenBright(`Horario ${hora}:${minutos} hs`));
    
    //información para el cliente
    res.send("Vista para nuevo endpoint.")
});

app.listen(port, ()=>{
    console.log(chalk.blackBright.bgWhite.bold(` Aplicación escuchando en http://localhost:${port} `));
});
