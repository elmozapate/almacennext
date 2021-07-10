import React from 'react';
var usuarioActual;
function Boton() {
    function cerrarSesion() {

        usuarioActual = "ninguno";
        localStorage.setItem("usuario", usuarioActual);

        window.location.replace("./about");

    }
    var accion = cerrarSesion;
    var texto = "Cerrar sesión";

    return (
        <>
            <button onClick={accion} >{texto}</button>
        </>

    )
};
export default Boton;