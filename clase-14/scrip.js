/* quiero un programa que cado un nombre muestre una alerta con el nombre 3 veces 
let nombre = "pepe"

alert(nombre)
alert(nombre)
alert(nombre)

*/

/* bucle for */

/* for(let iterador = 1; iterador <= 3; iterador = iterador + 1 ){
console.log ("me ejecuto")
}
 */

/* mostrar por alerta conteo del 1 al 10 
for(let i = 1; i <= 10; i = i + 1 ){
    alert(i)} */


let sumatoria = 0
for(let i = 1; i <= 3; i = i + 1) {
    let numero = prompt ("ingrese un numero")
    while(!numero || isNaN(numero) ){
        numero = prompt ("ERROR: vuelve a ingresar el numero")
    }
    numero = Number(numero)
    sumatoria = sumatoria + numero 
}

alert ( "resultado =" + sumatoria )



