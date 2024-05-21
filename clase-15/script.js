/* crear objeto llamado producto que tenga precio
nombre, marca, descripcion*/

let objeto = {
    precio: 100,
    nombre: "Television",
    descripcion: "led 42",
    marca: "samsung",
}

console.log(objeto.precio)
/* crear objeto llamado persona, que tenga nombre y edad 
y mejoramigo con nombre y edad 

let persona = {
    nombre: 'uriel',
    edad: 20,
    mejorAmigo: {
        nombre: 'facundo',
        edad: 18
    }
}
*/

const persona = {
    nombre: 'uriel',
    edad: 20,
    mejorAmigo: {
        nombre: 'facundo',
        edad: 18
    }
}

persona.mejorAmigo.nombre = "pepe"
persona.nroCelular = "+541166322012"

console.log(persona)

/* ARRAYS se usan las lsitas*/

let notaTrimestre1 = 2 
let notaTrimestre2 = 10 
let notaTrimestre3 = 6 

let notasTrimestre = [2,10,6]

console.log("el segundo trimestre te sacaste un: " + notasTrimestre[1])
