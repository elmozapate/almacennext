import React from 'react';

function UrspasBoton() {
    var usuarioActual;
    function usrpas() {
        var error = true
        if (document.getElementById("usuario").value === "admin" && document.getElementById("clave").value === "1234") {
            usuarioActual = "administrador"
            localStorage.setItem("usuario", usuarioActual);
            error = false
        }
        if (localStorage.getItem("clientes") !== null) {
            let vecclientes = JSON.parse(localStorage.getItem("clientes"))
            for (let index = 0; index < vecclientes.length; index++) {
                var element = vecclientes[index].usuario;
                var elementDos = vecclientes[index].contrasena;
                if (element === document.getElementById("usuario").value && elementDos === document.getElementById("clave").value) {
                    usuarioActual = "Cliente"
                    localStorage.setItem("usuario", usuarioActual);
                    error = false
                    localStorage.setItem("nombre", element);
                }
            }
        }
        if (error === true) {
            window.alert('Clave o usuario incorrectos');
        }
    }
    var texto = "Log-in";
    var accion = usrpas;
    return (
        <>
            <button onClick={accion} >{texto}</button>
        </>
    )
};
export default UrspasBoton;