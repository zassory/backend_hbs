const express = require('express');
const hbs = require('hbs');

//Modelos
const Cliente = require('./models/clientes');

const { leerTodo , insertar , eliminar } = require('./services/clientesService');
const empleadoService = require('./services/empleadoService');
const detalleDeOrdenService = require('./services/detalleDeOrdenService');
const ordenesService = require('./services/ordenesService');
const productosService = require('./services/productosService');

const { response } = require('express');
const app = express();

app.use(express.static('public'));


//Handle Bars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

 app.get('/clientes', (req,res = response) => {
         res.render('clientes',{
            titulo: 'Clientes',
            arregloClientes: leerTodo('customers')
         });
 });

 app.get('/formularioInsertarCliente', (req,res) => {
    res.render('formularioCliente',{
        titulo: 'Clientes'
    });
 });

 app.get('/insertarCliente',(req,res) => {
    const identificador = req.query.txtIdentificador;
    const nombreDeCompania = req.query.txtNombreDeCompania;
    const nombreDeContacto = req.query.txtNombreDeContacto;
    const cliente = new Cliente(identificador,nombreDeCompania,nombreDeContacto);
    insertar(cliente);
    res.render('clientes',{
        titulo: 'Clientes',
        arregloClientes:leerTodo('customers')
    });
 });

 app.get('/eliminarCliente/:id', (req,res) => {        
    const id = req.params.id;
    eliminar(id);
    res.render('clientes',{
        titulo:'Clientes',
        arregloClientes: leerTodo('customers')
    });    
 });

 app.get('/empleados' , (req,res = response) => {
     res.render('empleados',{
        titulo: 'Empleados',
        arregloEmpleados: empleadoService.leerTodo('employees')
     });
 });


app.get('/detalleDeOrden' , (req,res = response) => {
    res.render('detalleDeOrden',{
        titulo: 'Detalle de Orden',
        arregloDetalles:detalleDeOrdenService.leerTodo('orderDetails')
    });
});

app.get('/ordenes' , (req,res = response) => {
    res.render('ordenes',{
        titulo: 'Ordenes',
        arregloOrdenes: ordenesService.leerTodo('orders')
    });
});

app.get('/productos' , (req,res = response) => {
    res.render('productos',{
        titulo: 'Productos',
        arregloProductos: productosService.leerTodo('products')
    });
});

app.listen(8080);