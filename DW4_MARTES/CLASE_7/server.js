const express = require('express');
const app = express();
const mysql = require('mysql');

const connection = mysql.createConnection({
    // Conectar con MySQL Workbench
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '3Mma1717',
    database: 'cursos'
});

// Establecer conexión a la base de datos
connection.connect((err) => {
    if (err) {
        console.error('Error al conectar a MySQL:', err);
        throw err;
    }
    console.log('Conexión exitosa a MySQL');
});

app.get('/', (req, res) => {
    let sql = 'SELECT * FROM cursos.cursos';

    connection.query(sql, (err, rows) => {
        if (err) throw err;
        console.log(rows);
        res.send(rows);
    });
});

// Cerrar la conexión al finalizar
connection.end();

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
