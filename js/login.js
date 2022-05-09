//Funcionar boton Login en el index.html

//import {controlUsuarioOk} from "./usuarios.js";

function btnLogin(){
    location.href= "http://192.168.0.203/E-commerce/login.html";
}

var login = document.querySelector(".sectionLogin__form");

class Usuario{
    email;
    pass;
}

let usuarioRegristrado = new Usuario()
/*
login.addEventListener("submit",(event) =>{
    event.preventDefault();
    var emailForm= document.querySelector("#sectionLogin__form-email").value;
    var passForm = document.querySelector("#sectionLogin__form-pass").value;
    let usuarioEncontrado= false;
    let usuarioARegistrar = new Array()
    let esUsuarioEncontrado = emailForm == emai && passForm == pass
    if(esUsuarioEncontrado){
        usuarioEncontrado = true
    }
})
*/