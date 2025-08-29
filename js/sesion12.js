console.log("hola mundo desde sesion12")

//ciclo for numero del 1 al 10 
for (let i = 1; i <= 10; i++) {
    console.log("estas en la repeeticion", i) 
}
//ciclo while
// declara la  variable
let  j = 1

// crear el ciclo while
while (j<4) {
    console.log (j)
    j = j + 2
}
//recorrer un arreglo 
let array = [ "casa", "pintura",  "sol",]
for (let i = 0 ; i < array.length; i++) {
    console.log(array[i]) 
}
//peedir contraseña al usuario
let contra
let contraseña = "776912" 
do {
    //se cumplira al menos una vez
    contra = prompt("ingrese la contrtaseña")
}
while (contra !== contraseña);
alert("contraseña correcta, bienvenido")


// bucle que calcule el promedio de un arreglo
array=[4,5,3,2,4,5] 
suma=0 
for (let i = 0; i < array.length; i++){
    suma = suma + array[i]
} 
console.log("la suma es", suma)
promedio = suma / array.length
console.log("el promedio es", promedio)