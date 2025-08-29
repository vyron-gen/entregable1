//*ejercicio2.js*//

// Solicita al usuario ingresar un número
let numero = prompt("Ingresa un número:");

// Convierte la entrada a número entero
numero = parseInt(numero  );

// Verifica si el número es divisible por 2
if (numero % 2 === 0) {
    alert("El número es par");
} else {
    alert("El número es impar");
}
