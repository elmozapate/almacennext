import React, { Component } from "react";
import Logoside from "../img/logo-side.png";
import Iconomoet from "../img/icono Moet.png";
import Fotousuario from "../img/client.png";
import Guest from "../img/guest.png";
import Login from "../pages/elindex/seccionlogin";
import Registro from "../pages/elindex/registro";
import Boton from "./botones/botones";
import AbrirLogin from "./botones/abrirLogin";
import AbrirRegistro from "./botones/abrirRegistro";
class NavJs extends Component
{
    constructor(pprops){
        super(props)
        const [value, setValue] = React.useState(value);
    let usuarioActual
    React.useEffect(() => {
        const stickyValue = window.localStorage.getItem("usuario");
        if (stickyValue === null) {
            setValue("ninguno" );
            usuarioActual = "Invitado";
        }
    }, ["usuario", value]);
    React.useEffect(() => {
        window.localStorage.setItem("usuario", JSON.stringify(value));
    }, ["usuario", value]);
    React.useEffect(() => {
        const stickyValue = window.localStorage.getItem("usuario");
        if (stickyValue !== null) {
            setValue(value = stickyValue);
            usuarioActual = stickyValue;
        }
    }, ["usuario", value]);
     identificarFoto=()=> {
    var retorn
    if (usuarioActual === "administrador") {
        retorn =
            <img className="fotousuario" src={Iconomoet} alt="logo" />
    }
    if (usuarioActual === "Cliente") {
        retorn =
            <img className="fotousuario" src={Fotousuario} alt="f-logo" />
    }
    if (usuarioActual === "ninguno") {
        retorn =

            <Logoside className="fotousuario" src={Guest} alt="i-logo" />
    }
    return retorn;
}
identificar=()=> {
    var retorna
    if (usuarioActual === "administrador") {
        retorna = <div >Admin.</div>
    }
    if (usuarioActual === "Cliente") {
        var nomcliente = window.localStorage.getItem("nombre");
        retorna = <div >Usuario:</div>;
    }
    if (usuarioActual === "ninguno") {
        retorna = <div >Invitado.</div>;
    }
    return retorna;
}
identificarNav=()=> {
    var retornar
    if (usuarioActual === "administrador") {
        retornar =
            <>
                <div className="linkdos">
                    <a href="productos.html">
                        <i className="fa fa-archive" aria-hidden="true">
                        </i>
                        <span className="link-text">
                            PRODUCTOS
                        </span>
                    </a>
                </div>
                <div className="button-entrar">
                    {<Boton parametros={"uno"} />}
                </div>
            </>
    }
    if (usuarioActual === "ninguno") {
        retornar =

            <div className="registro-nav">
                <AbrirLogin />
                <Registro />
                <Login />
                <AbrirRegistro />
            </div>
    }
    if (usuarioActual === "Cliente") {
        retornar =
            <>
                <div className="button-entrar">
                    <Boton parametros={"uno"} />

                </div>
            </>
    }
    return retornar;
}}}
export default NavJs;