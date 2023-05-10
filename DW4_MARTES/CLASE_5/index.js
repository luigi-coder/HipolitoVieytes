const express = require('express')
const app = express();
const hbs = require('hbs');
app.set('view engine', 'hbs');

app.listen(3000, () => console.log("Iniciando en puerto 3000"));

app.get('/', (req, res) => {
    res.render('index', {
        nombre: 'Juan',
        apellido: 'Perez',
        materias: [
            'DW4',
            'DW3',
            'DW2',
            'DW1'
        ]
    });
});

hbs.registerPartials(__dirname + '/views/partials');