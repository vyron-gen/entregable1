alert("hola desde js")

/*ejecicio1*/
//declaro variable
let nota;
//capturo la variable
 nota =prompt("INGRESE SU NOTA");
 //conversion de tipo dato//
nota =parseInt(nota);

if(nota>=90){
    alert("aprobado con honores");
}
if(nota>=70 && nota<90){
    alert("aprobado");
}
 if(nota<70){
    alert("reprobado");
 } 
