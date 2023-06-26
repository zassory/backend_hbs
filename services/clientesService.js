const fs = require('fs');
const Cliente = require('../models/clientes');

const leerTodo = (nombreArchivo) => {
    const arregloClientes = [];
    let datos = fs.readFileSync(`./datos/${nombreArchivo}.csv`,'utf-8');
    datos = datos.replace(/\r/g,'');
    datos = datos.replace(/\n/g,';');
    datos = datos.split(';');

    // const cliente = new Cliente(
    //     datos[0],
    //     datos[1],
    //     datos[2],
    // );
    datos.forEach((element,indice) => {
        if((indice + 1) % 3 === 0){
            const cliente = new Cliente(datos[indice-2],datos[indice-1],datos[indice]);
            arregloClientes.push(cliente);
        }        
    });

    return arregloClientes;
}

leerTodo('customers');