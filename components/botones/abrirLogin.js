import React from 'react';
var accion
function AbrirLogin() {
    const abrirLogin = () => {
        document.getElementById("login").classList.remove("hide");
        document.getElementById("registro").classList.add("hide");
        document.getElementById("botonLogin").classList.add("hide");

    }
    accion = abrirLogin;
    return (
        <>
            <button onClick={accion} id="botonLogin">Login </button>
        </>
    )
};
export default AbrirLogin;