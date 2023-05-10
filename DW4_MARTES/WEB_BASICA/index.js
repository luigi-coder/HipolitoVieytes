const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  res.render('home', {
    title: 'Inicio'
  });
});

app.get('/contacto', (req, res) => {
  res.render('contacto', {
    title: 'Contacto',
    email: 'tucorreo@tudominio.com'
  });
});

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
