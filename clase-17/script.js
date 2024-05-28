let operacion = prompt('Ingrese una operación:\n-Para suma ingrese: +\n-Para resta ingrese: -', '')
while(operacion !== '+' && operacion !== '-'){
    alert('ERROR: Ingresó una operación no soportada.')
    operacion = prompt('Ingrese una operación:\n-Para suma ingrese: +\n-Para resta ingrese: -', '')
}
let primerNumero = prompt('Ingrese el primer número', '')
while(isNaN(primerNumero)){
    alert('ERROR: Se ingresó un valor no numérico')
    primerNumero = prompt('Ingrese el primer número', '')
}
let segundoNumero = prompt('Ingrese el segundo número', '')
while(isNaN(segundoNumero)){
    alert('ERROR: Se ingresó un valor no numérico')
    segundoNumero = prompt('Ingrese el segundo número', '')
}
primerNumero = Number(primerNumero)
segundoNumero = Number(segundoNumero)
let resultado
if(operacion === '+'){
    resultado = primerNumero + segundoNumero
}else{
    resultado = primerNumero - segundoNumero
}
alert('El resultado de ' + primerNumero + ' ' + operacion + ' ' + segundoNumero + ' es: ' + resultado)

