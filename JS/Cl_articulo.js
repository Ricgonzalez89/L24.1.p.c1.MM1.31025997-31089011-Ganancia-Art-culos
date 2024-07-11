export default class Cl_articulo{
    constructor(cod, c, p){
        this.codigo = cod;
        this.costo = +c;
        this.precio = +p;
    }

    set codigo(cod){
        this._codigo = cod;
    }

    set costo(c){
        this._costo = +c;
    }

    set precio(p){
        this._precio = +p;
    }

    get codigo(){
        return this._codigo;
    }

    get costo(){
        return this._costo;
    }

    get precio(){
        return this._precio;
    }

    calcGananciaArticulo(){
        return this.precio-this.costo;
    }
}