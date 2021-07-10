import React from 'react';
var accion
function AbrirNav() {
    var key;
    const cerrarNav = () => {
     
        document.getElementById("side-menu").classList.remove("hide");
        document.getElementById("giro").classList.add("hide");
        document.getElementById("girocerrar").classList.remove("hide");
    }
    const abrirNav = () => {
        document.getElementById("side-menu").classList.add("hide");
        document.getElementById("girocerrar").classList.add("hide");
        document.getElementById("giro").classList.remove("hide");
    }
    accion = cerrarNav;
    key = abrirNav;

    return (
        <div>
            <a
            
                className="giro" id="giro"> <button className="fa fa-bars" onClick={accion}></button></a>
            <a
                className="girocerrar hide" id="girocerrar" > <button className="fa fa-bars" onClick={key}></button></a>
        </div>
    )
};
export default AbrirNav