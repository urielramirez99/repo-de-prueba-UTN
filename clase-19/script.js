/* console.dir(document)

const titulo = document.getElementById("titulo")

console.dir(titulo) */


const usuarioHtml = document.getElementById('usuario')

const user = {
    username: 'pepesito',
    password: '******4',
    adress: 'av siempre viva',
    email: 'pepe@gmail.com'
}

usuarioHtml.innerHTML=`
    <h2>${user.username}<h2>
    <span>${user.password}<span>
    <input value=${user.adress}>
    <input value=${user.email}>
`
const historial = [
    {
        id: '001',
        nombre: 'tv samsung',
        fecha: '17/09/2020'
    },
    {
        id: '022',
        nombre: 'Macbook',
        fecha: '14/10/2020'
    },
    {
        id: '030',
        nombre: 'Celular motorola',
        fecha: '17/09/2021'
    },
    {
        id: '301',
        nombre: 'Zapatillas nike',
        fecha: '30/09/2023'
    }
]
let contenedorProductosHTML = document.getElementById('elemento')
let listaProductos = ''
for(let producto of historial){
    listaProductos = listaProductos + `
    <span><b>${producto.id}</b></span>
    <h3>${producto.nombre}</h3>
    <span>${producto.fecha}</span>
    <br>
    <hr>`
}
contenedorProductosHTML.innerHTML = listaProductos



