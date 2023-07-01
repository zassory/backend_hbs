const express = require('express');
const clienteService = require('./services/clientesService');

const { response } = require('express');
const app = express();

//app.use(express.static('public'));


//Handle Bars
app.set('view engine', 'hbs');

 app.get('/clientes', (req,res = response) => {
         res.render('clientes',{
            titulo: 'Clientes',
            arregloClientes: clienteService.leerTodo('customers')
         });
 });

 app.get('/empleados' , (req,res = response) => {
     res.render('Hola Mundo Empleados',{
        titulo: 'Empleados'
     });
 });


app.get('/detalleDeOrden' , (req,res = response) => {
    res.render('detalleDeOrden',{
        titulo: 'Detalle de Orden'
    });
});

app.get('/ordenes' , (req,res = response) => {
    res.render('ordenes',{
        titulo: 'Ordenes'
    });
});

app.get('/productos' , (req,res = response) => {
    res.render('Hola Mundo Productos',{
        titulo: 'Productos'
    });
});

app.listen(8080);