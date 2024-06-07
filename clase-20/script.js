function alertar () {
    alert("hola desde el evento")
}

var edad = 50
console.log(edad)

const btnClick = document.getElementById("btn-especial")

btnClick.onclick = function() {
    alert("hola desde click")
}


const btnClick3 = document.getElementById("btn-click3")

btnClick3.addEventListener("click", alertar ) 

 btnClick3.addEventListener("click", function() {
    console.log("uriel")
}) 


 const personas = [
{
    nombre: "pepe",
    edad: 50,
},
{
    nombre: "pedro",
    edad: 40 ,
}
]

const mayoresDeEdad = personas.filter( (persona) => persona.edad >= 18)
console.log(mayoresDeEdad)  


/* 
const formularioHTML = document.getElementById("formulario")


formularioHTML.addEventListener("submit", handleSubmit)   */

