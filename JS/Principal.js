/*6. GANANCIA ARTÍCULOS
|* Conociendo el código, costo y el precio de venta de los artículos que vende una tienda, se
|* desea hacer un procesamiento que determine la ganancia total que tendría la empresa al
|* venderlos todos, y también el código del artículo con mayor precio de venta.
|* El encargado de la tienda informa que dispone de los siguientes artículos: 888 (costo $10,
|* precio venta $15), 777 (costo $20, precio $25), 999 ($15, $25), 666 ($25, $35), 111 ($50, $70),
|* 333 ($40, $50), 444 ($80, $100) y 222 ($5, $10)
|* Ganancia Total: 85$
|* Código del artículo con mayor precio de venta:444 
*/
import Cl_articulo from "./Cl_articulo.js";
import Cl_tienda from "./Cl_tienda.js";

let art1 = new Cl_articulo("888", 10, 15);
let art2 = new Cl_articulo("777", 20, 25);
let art3 = new Cl_articulo("999", 15, 25);
let art4 = new Cl_articulo("666", 25, 35);
let art5 = new Cl_articulo("111", 50, 70);
let art6 = new Cl_articulo("333", 40, 50);
let art7 = new Cl_articulo("444", 80, 100);
let art8 = new Cl_articulo("222", 5, 10);
let tienda = new Cl_tienda();

tienda.procesarArticulo(art1);
tienda.procesarArticulo(art2);
tienda.procesarArticulo(art3);
tienda.procesarArticulo(art4);
tienda.procesarArticulo(art5);
tienda.procesarArticulo(art6);
tienda.procesarArticulo(art7);
tienda.procesarArticulo(art8);

let salida = document.getElementById("salida");
salida.innerHTML = `
<br>Ganancia Total : $${tienda.mostrarGananciaTotal()}
<br>Código dle artículo con mayor precio de venta: ${tienda.mostrarCodigoPrecioMayor()}`;