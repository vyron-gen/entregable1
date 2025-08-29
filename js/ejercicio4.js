//*ejercicio4.js*//

// Genera un número aleatorio entre 1 y 10
let numeroSecreto = Math.floor(Math.random() * 10) + 1;

//numero maximo de intentos//
let maxIntentos = 3;
let adivinado = false;

//bucle para los intentos
let intento=0;
for (let i = 1; intento <= maxIntentos; intento++) {
    let respuesta = prompt (`"intento ${intento} de ${maxIntentos}: adivina el numero (entre 1 y 10)`);

//convierte la respuesta a numero
let numerousuario = parseInt(respuesta);

//verifica si adivino
if (numerousuario ===numeroSecreto) {
    alert("!felicidades, adivinastes el numero¡");
    adivinado = true;
    break; // termina el bucle si acierta
} else{
    alert("numero incorrecto, intentalo de nuevo");
}
} 
// Solicita al usuario que adivine el número
 intento = prompt("Adivina el número (entre 1 y 10):");

// Convierte la entrada a número
intento = parseInt(intento);

// Verifica si el número ingresado es correcto
if (intento === numeroSecreto) {
    alert("¡Felicidades, adivinaste el número!");
} else {
    alert("Lo siento, el número era " + numeroSecreto + ". Inténtalo de nuevo AJAJAJAJAJ GOOD BYE.");
}

