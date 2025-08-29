    //*ejerciccio3*//

    let monto = prompt("Ingresa el monto total de tu compra:");

// Convierte la entrada a número
monto = parseFloat(monto);

// Verifica si el monto es mayor a 100
if (monto > 100) {
    // Aplica un 10% de descuento
    let descuento = monto * 10 / 100;
    let montoFinal = monto - descuento;
    alert("Se aplicó un descuento del 10%.\Monto final a pagar: $" + montoFinal.toFixed(2));
} else {
    // No hay descuento
    alert("No se aplicó descuento.\nMonto a pagar: $" + monto(2));
}