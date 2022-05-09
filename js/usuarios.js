export const usuario =[
    {email: "admin@gmail.com",
     pass : "admin"},
     {email : "axlgarcia080498@gmail.com",
      pass : "garcia"}
]

/* chequear si el usuario ya está registrado. */

const usuariosOnline = () =>{
    const usuarioOk = JSON.parse(sessionStorage.getItem("usuario-ok")) || flase;
    return usuarioOk
}