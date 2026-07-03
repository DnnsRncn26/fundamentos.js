function calcularDescuento(precio) {
  const precioFinal = precio - (precio * 0.20);
  console.log("Precio final: " + precioFinal);
}
calcularDescuento(45000);
calcularDescuento(120000);
calcularDescuento(89900);



//segunda parte
function calcularPrecio(precio) {
  //console.log(precio - (precio * 0.20));
  return precio - (precio * 0.20);
}

function armarEtiqueta(nombre, precio) {
  const valor = calcularPrecio(precio);
  return nombre + " cuesta $" + valor;
}

//armarEtiqueta("Camiseta", 45000);
console.log(armarEtiqueta("Camiseta", 45000));