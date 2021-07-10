import Formatocrear from "../components/formatocrear";
import TableAdmin from "../components/tablecontaineradmin";
import Editor from "../components/editor";
import React, { useState } from "react";
import Container from "../components/Container";
function Productos() {
    const [usuarioActual, setUsuario] = useState("ninguno")
 var a= <div/>

    React.useEffect(() => {
        const stickyValue = window.localStorage.getItem("usuario");
        if (stickyValue === null) {
            window.localStorage.setItem("usuario", usuarioActual);
        }
        if (stickyValue === "Cliente") {
            setUsuario("Cliente")
            window.localStorage.setItem("usuario", stickyValue);
        }
        if (stickyValue === "administrador") {
            setUsuario("administrador")
            window.localStorage.setItem("usuario", stickyValue  );
        }
    }, [usuarioActual]);
    if (usuarioActual === "administrador") {
    
         return (
            <>
                <Container />
                <main>
            <div className="nombrePag">
                <h1>
                    Ingrese nuevos productos.
                </h1>
            </div>
            <section className="secciones-dos">
            </section>
            <div className="secciones-tabla-dos">
                <Formatocrear />
                <TableAdmin />
                <Editor />
            </div>
        </main>
                    </>
        )
    };
    if (usuarioActual === "ninguno") {

        return (
            <>
                <Container />
                <main> <div>Esta pagina no esta disponible para este Usuario ERROR ERROR ERROR </div></main>
                            </>
        )
    };
    if (usuarioActual === "Cliente") {
       
       return (
        <>
            <Container />
            <main><div>Esta pagina no esta disponible para este Usuario ERROR ERROR ERROR</div></main>
        </>
    )
    };
   
}

export default Productos;
