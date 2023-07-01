const express = require('express');
const { response } = require('express');
const app = express();

app.use(express.static('public'));

// app.get('/clientes', (req,res = response) => {
//         res.send('clientes.html');
// });

// app.get('/empleados' , (req,res = response) => {
//     res.send('Hola Mundo Empleados');
// });

app.get('*', (req,res = response) => {
    res.sendFile(__dirname + '/error.html');
});

app.get('/detalleDeOrden' , (req,res = response) => {
    res.send('Hola Mundo Detalle');
});

app.get('/ordenes' , (req,res = response) => {
    res.send('Hola Mundo Ordenes');
});

app.get('/productos' , (req,res = response) => {
    res.send('Hola Mundo Productos');
});

app.listen(8080);