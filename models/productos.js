class Producto{

    constructor(productoId,productoNombre,precioUnitario,unidadesEnStock,discontinuado){
        this._productoId = productoId;
        this._productoNombre = productoNombre;
        this._precioUnitario = precioUnitario;
        this._unidadesEnStock = unidadesEnStock;
        this._discontinuado = discontinuado;
    }

    get productoId(){
        this._productoId;
    }
    set productoId(productoId){
        this._productoId = productoId;
    }
    get productoNombre(){
        this._productoNombre;
    }
    set productoNombre(productoNombre){
        this._productoNombre = productoNombre;
    }
    get precioUnitario(){
        this._precioUnitario;
    }
    set precioUnitario(precioUnitario){
        this._precioUnitario = precioUnitario;
    }
    get unidadesEnStock(){
        this._unidadesEnStock;
    }
    set unidadesEnStock(unidadesEnStock){
        this._unidadesEnStock = unidadesEnStock;
    }
    get discontinuado(){
        this._discontinuado;
    }
    set discontinuado(discontinuado){
        this._discontinuado = discontinuado;
    }
}


module.exports = Producto;