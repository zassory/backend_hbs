const fs = require('fs');
const Cliente = require('../models/clientes');

const leerTodo = (nombreArchivo) => {
    const arregloClientes = [];
    let datos = fs.readFileSync(`./datos/${nombreArchivo}.csv`,'utf-8');
    datos = datos.replace(/\r/g,'');
    datos = datos.replace(/\n/g,';');
    datos = datos.split(';');
    
    datos.forEach((element,indice) => {
        if((indice + 1) % 3 === 0){
            const cliente = new Cliente(datos[indice-2],datos[indice-1],datos[indice]);
            arregloClientes.push(cliente);
        }        
    });

    return arregloClientes;
}

const leerPorId = (id,nombreArchivo) => {
    
}

const insertar = (cliente) => {
                    
        const arregloClientes = [];

        let datos = fs.readFileSync(`./datos/customers.csv`, 'utf-8');
        datos = datos.replace(/\r/g, '');
        datos = datos.replace(/\n/g, ';');
        datos = datos.split(';');
                                            
        datos.forEach((element,indice) => {           
            if((indice + 1) % 3 == 0){                
                const cliente = new Cliente(datos[indice - 2], datos[indice - 1], datos[indice]);                
                arregloClientes.push(cliente);
            }
        });
        let cadena = '';
        arregloClientes.push(cliente);
        arregloClientes.forEach((cliente) => {
            cadena = `${cadena}${cliente.clienteId};${cliente.nombreDeCompania};${cliente.nombreDeContacto}\n`;
        });

        fs.writeFileSync('./datos/customers.csv', cadena);
}

const actualizar = (cliente) => {

}

const eliminar = (id) => {
    
}

module.exports = {
    leerTodo,
    insertar,
}