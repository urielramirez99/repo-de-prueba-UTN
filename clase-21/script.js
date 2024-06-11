const formloginHTML = document.getElementById("form-login")

console.log(formloginHTML.username.value)
formloginHTML.addEventListener("submit", (evento) =>{ 
    evento.preventDefault()
    console.log("se envio el formulario")
    /* console.log(evento) */
    const formulario = evento.target
    const username = formulario.username.value
    if(username.lenght > 4){
        const errorTextHTMl = document.getElementById("error-text-username")
        errorTextHTMl.innerText = "el username debe tener 4 caracteres"
    }
    
})









