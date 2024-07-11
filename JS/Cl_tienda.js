export default class Cl_tienda{
    constructor(){
        this.acumGanancia = 0
        this.mayor = 0;
        this.auxCodigo = "";
    }

    procesarArticulo(a){
        //Acumular ganancia total
        this.acumGanancia += a.calcGananciaArticulo();

        //Buscar articulo con mayor precio
        if (a.precio > this.mayor){
            this.mayor = a.precio;
            this.auxCodigo = a.codigo;
        }
    }

    mostrarCodigoPrecioMayor(){
        return this.auxCodigo;
    }

    mostrarGananciaTotal(){
        return this.acumGanancia;
    }
}