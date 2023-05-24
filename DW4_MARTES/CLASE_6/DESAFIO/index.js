const express = require('express');
const fs = require('fs');

const app = express();
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send(`
    <form method="post" action="/submit">
      <label for="name">Nombre:</label>
      <input type="text" name="name" id="name" required><br>
      
      <label for="lastName">Apellido:</label>
      <input type="text" name="lastName" id="lastName" required><br>
      
      <label for="email">E-mail:</label>
      <input type="email" name="email" id="email" required><br>
      
      <label for="message">Mensaje:</label>
      <textarea name="message" id="message" required></textarea><br>
      
      <button type="submit">Enviar</button>
    </form>
  `);
});

app.post('/submit', (req, res) => {
  const { name, lastName, email, message } = req.body;
  
  const data = `
  Nombre: ${name}
  Apellido: ${lastName}
  E-mail: ${email}
  Mensaje: ${message}
  `;
  
  fs.appendFile('data.txt', data, (err) => {
    if (err) {
      console.error(err);
      res.send('Error al almacenar los datos.');
    } else {
      console.log('Datos almacenados correctamente.');
      res.send('Datos almacenados correctamente.');
    }
  });
});

app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});

