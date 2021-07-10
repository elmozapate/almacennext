import React, { useEffect, useState } from 'react';
import Tablecontainer from "../components/tablecontainer";
import Container from '../components/Container';
function Inventario() {
    var todos=[]
    var [noHay, setNohay] = useState(false)
    useEffect(() => {
        const stickyValue = JSON.parse(window.localStorage.getItem("todos"));
        todos=stickyValue
        if (stickyValue === null) {
            window.localStorage.setItem("todos", JSON.stringify([]));
        } if (stickyValue === []) {
            setNohay(false)
        }
    }, [todos]);
    useEffect(() => {
        const stickyValue = JSON.parse(window.localStorage.getItem("todos"));
    if (stickyValue.length !== 0 && stickyValue !== null) {
        setNohay(true)
    }
    }, [todos]);
    if (noHay === false) {
        return (
            <>
                <Container />
                
                <div className="nombreVacio" id="no_hay_nom" >
                    <h1  >
                        No hay productos por el momento, valla compre algunos!!!
                    </h1>
                </div>
            </>
        )
    }
    if (noHay === true) {
        return (
            <>
                <Container />
                <div className="secciones-tabla" id="seccionInventario">
                    <Tablecontainer />
                </div>
            </>
        )
    }


}
export default Inventario;