//CREAR UNA FUNCION
function saludo(nombre){
    console.log(nombre,"como estas")
}
nom =prompt("ingresa tu nombre")
console.log(saludo (nom)) 

// suma 
function suma (num1,num2){
    return  (num1+num2)  
}
console.log(suma(50,30))

//funcion calculadora

function realizarOperacion(num1,num2,operacion){
    if(operacion === "suma"){
        resultado = num1 + num2
        return resultado
    }
        else if (operacion === "resta"){
            return resultado = num1 - num2
            }
            else if (operacion === "multiplicacion"){
                return resultado = num1 * num2
                 } 
                 else if  (operacion === "division"){if (num2 === 0){
                    return "Error: No se puede dividir por cero"
                 }
                   return resultado = num1 / num2
                 }
                 else{
                    return "operacion no valida";
                 }
                 }
                 let operacion = prompt("ingresa la operacion a realizar: suma, resta, multiplicacion, division, si desea salir escriba salir")
                let numero1 = parseInt(prompt("ingresa el primer numero"))
                let numero2 = parseInt(prompt("ingresa el segundo numero"))
                   while (operacion !== "salir"){
                 console.log(realizarOperacion(numero1,numero2,operacion))
                  operacion = prompt("ingresa la operacion a realizar: suma, resta, multiplicacion, division, si desea salir escriba salir")
                numero1 = parseInt(prompt("ingresa el primer numero"))
                numero2 = parseInt(prompt("ingresa el segundo numero"))
             }
                


