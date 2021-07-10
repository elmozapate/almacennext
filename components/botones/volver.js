import React from 'react';
var accion
function Volver() {
    const volver = () => {
        document.getElementById("login").classList.add("hide");
        document.getElementById("registro").classList.add("hide");
        document.getElementById("botonRegistro").classList.remove("hide");
        document.getElementById("botonLogin").classList.remove("hide");

    }
    accion = volver;
    return (
        <>
            <button onClick={accion}>Cerrar </button>
        </>
    )
};
export default Volver;