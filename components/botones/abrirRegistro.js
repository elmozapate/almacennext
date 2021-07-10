import React from 'react';
var accion
function AbrirRegistro() {
    const abrirRegistro = () => {
        document.getElementById("registro").classList.remove("hide");
        document.getElementById("login").classList.add("hide");
        document.getElementById("botonRegistro").classList.add("hide");

    }
    accion = abrirRegistro;
    return (
        <>
            <button onClick={accion} id="botonRegistro">Registrate </button>
        </>
    )
};
export default AbrirRegistro;