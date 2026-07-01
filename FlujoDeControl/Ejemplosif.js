//! if básico  → Condicionales 

let totalPedido = 20000;
if (totalPedido > 50000){
    console.log("Domi gratis❤️");  
}
//! if con else 
let totalPedido2 = 30000;
if (totalPedido2 > 50000) {
  console.log("Domicilio GRATIS ");
} else {
  console.log("Domicilio: $5.000");
}
let totalPedido = 90000;

 

if (totalPedido > 80000) {
  console.log("Domicilio GRATIS + bono ");
} else if (totalPedido > 50000) {
  console.log("Domicilio GRATIS ");
} else {
  console.log("Domicilio: $5.000");
}



let repartidoresLibres = 1;
while (repartidoresLibres <= 3) {
  console.log("Repartidor #" + repartidoresLibres + " disponible");
  repartidoresLibres = repartidoresLibres + 1;
}

