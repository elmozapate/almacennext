import React from 'react';

function RegistroBoton() {
    var usuarioActual
    function newCliente() {
        var usuario = document.getElementById("usuario-cliente").value
        var contrasena = document.getElementById("contrasena-cliente").value
        var contrasenaDos = document.getElementById("contrasena-clienteDos").value
        var email = document.getElementById("email-cliente").value
        var nuevoClliente = { usuario: usuario, contrasena: contrasena, email: email }
        var vecclientes = []
        var fallo = false
        var falloAux = false
        var mensajeError
        if (contrasena !== contrasenaDos) { mensajeError = "Sus contraseñas son diferentes" }
        var o = JSON.parse(localStorage.getItem("clientes"))
        if (contrasena.length < 4) { mensajeError = "Contraseña muy corta"; }
        if (usuario.length < 3) { mensajeError = "Su username es muy corto"; }
        if (o != null) {
            for (var r in o) {
                if (o[r].usuario === usuario) {
                    mensajeError = 'Nombre de usuario existente';
                    falloAux = true
                }
            }
            if (contrasena === contrasenaDos && contrasena.length > 3 && usuario.length > 3 && falloAux === false) {
                nuevoClliente = { usuario: usuario, contrasena: contrasena, email: email }
                vecclientes = JSON.parse(localStorage.getItem("clientes"))
                vecclientes.push(nuevoClliente);
                localStorage.setItem("clientes", JSON.stringify(vecclientes));
                window.alert("REGISTRO EXITOSO!!!");
                usuarioActual = "Cliente";
                localStorage.setItem("usuario", usuarioActual);
                localStorage.setItem("nombre", usuario);
                fallo = true

            };
        }
        else {
            if (contrasena === contrasenaDos && contrasena.length > 3 && usuario.length > 3 && falloAux === false) {
                vecclientes[0] = nuevoClliente
                localStorage.setItem("clientes", JSON.stringify(vecclientes));
                usuarioActual = "Cliente";
                window.alert("REGISTRO EXITOSO!!!");
                localStorage.setItem("usuario", usuarioActual);
                localStorage.setItem("nombre", usuario);

                fallo = true;
            }
        }
        if (fallo === false) {
            window.alert(mensajeError);
        }
    }
    var texto = "Registro";
    var accion = newCliente;
    return (
        <>
            <button onClick={accion} >{texto}</button>
        </>
    )
};
export default RegistroBoton;