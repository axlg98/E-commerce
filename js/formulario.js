let texto
let mensaje

window.onload = function(){
     texto = document.getElementById("nombre")
     texto.onkeyup = verificar
     mensaje = document.getElementById("mensaje")
     mensaje.onkeyup = validar
     
}

function verificar(event){
    if(texto.value.length > 40){
        texto.value = texto.value.slice(0, 40);
        event.preventDefault()
    }
}

function validar(event){
    console.log(a)
    if(mensaje.value.length > 12){
        mensaje.value = mensaje.value.slice(0,12);
        event.preventDefault()
    }
}
