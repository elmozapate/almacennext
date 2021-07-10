import React, { useRef, useState } from "react";
import Login from "../pages/elindex/seccionlogin";
import Registro from "../pages/elindex/registro";
import Boton from "./botones/botones";
import AbrirLogin from "./botones/abrirLogin";
import AbrirRegistro from "./botones/abrirRegistro";
import Link from "next/dist/client/link";
function Sidenav(props) {
    let usuarioActual
    var a = '/inventario'
    var b = '/productos'
    var [state, setstate] = useState({
        usuario: { tipo: "ninguno", nombre: "Invitado" },
        foto: <img src="http://127.0.0.1:5500/guest.png" alt="foto-usuario" className="fotousuario" />,
        nombre: <div >Usuario: Invitado</div>,
        nav: <div className="registro-nav">
            <AbrirLogin />
            <AbrirRegistro />
            <Login />
            <Registro />
        </div>
    })
    React.useEffect(() => {
        const stickyValue = window.localStorage.getItem("usuario");
        if (stickyValue === null) {
            usuarioActual = "ninguno";
            window.localStorage.setItem("usuario", usuarioActual);
        }
    }, [usuarioActual]);
    React.useEffect(() => {
        const stickyValue = window.localStorage.getItem("usuario");
        if (stickyValue !== null) {
            if (stickyValue === "administrador") {
                setstate({
                    usuario: { tipo: "administrador", nombre: "Admin" },
                    foto:
                        <img
                            src="http://127.0.0.1:5500/icono Moet.png"
                            alt="foto"
                            className="fotousuario"
                        />,
                    nombre: <div >Usuario: Invitado</div>,
                    nav: <div className="registro-nav">
                        <Link href={b}>
                        <div className="linkdos">
                            <a href='/productos.html'>
                                <i className="fa fa-archive" aria-hidden="true">
                                </i>
                                <span className="link-text">
                                    PRODUCTOS
                                </span>
                            </a>
                        </div>
                        </Link>
                        <div className="button-entrar">
                            {<Boton parametros={"uno"} />}
                        </div>
                    </div>
                })
            }
            if (stickyValue === "Cliente") {
                setstate({
                    usuario: { tipo: "Cliente", nombre: window.localStorage.getItem("nombre") },
                    foto:
                        <img
                            src="http://127.0.0.1:5500/client.png"
                            alt="foto"
                            className="fotousuario"
                        />,
                    nombre: <div >Usuario: {state.nombre}</div>,
                    nav: <div className="registro-nav">
                        <Boton />
                    </div>
                })
            }
            if (stickyValue === "ninguno") {
                setstate({
                    usuario: { tipo: "ninguno", nombre: "Invitado" },
                    foto: <img src="http://127.0.0.1:5500/guest.png" alt="foto-usuario" className="fotousuario" />,
                    nombre: <div >Usuario: Invitado</div>,
                    nav: <div className="registro-nav">
                        <AbrirLogin />
                        <AbrirRegistro />
                        <Login />
                        <Registro />
                    </div>
                })
            }
        }
    }, [usuarioActual]);

    return (
        <div className="side-menu hide" id="side-menu">


            <div className="foto">
                {state.foto}

            </div>
            <div className="cliente">
                {state.usuario.nombre}
            </div>
            <div
                className="link">
                <Link href={a}>
                <a href='/inventario.html' >
                        <i className="fa fa-tasks">
                        </i>
                        <span className="link-text">
                            INVENTARIO
                        </span>
                    </a>
                </Link>
            </div>
            {state.nav}
        </div>
    );
}
export default Sidenav;