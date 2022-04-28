//Funcionar boton Login en el index.html

var login = document.querySelector(".sectionLogin__form")

login.addEventListener("submit",(event) =>{
    event.preventDefault();
    var emailForm= document.querySelector("#sectionLogin__form-email").value;
    var passForm = document.querySelector("#sectionLogin__form-pass").value;
    let usuarioEncontrado= false;
})