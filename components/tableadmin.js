import React, { useState } from 'react';
import Borrar from './botones/delete';
import Editar from './botones/edit';
function TAdmin() {
    var tabla
    var [state, setVector] = useState(vectorTodos)
    var vectorTodos

    React.useEffect(() => {
        const stickystate =JSON.parse(window.localStorage.getItem("todos"));
        if (stickystate !== null) {
            for (let index = 0; index < stickystate.length; index++) {
                tabla = [stickystate.length]
                for (let index = 0; index < stickystate.length; index++) {
                    vectorTodos = stickystate
                    setVector(
                        <tr className="theader" key={index + "filasadm"}>
                            <td key={index + "codeadm"}>{vectorTodos[index].code}</td>
                            <td key={index + "articuloadm"}>{vectorTodos[index].articulo}</td>
                            <td key={index + "typeadm"}>{vectorTodos[index].type}</td>
                            <td key={index + "categoryadm"}>{vectorTodos[index].category}</td>
                            <td key={index + "precioadm"}>{vectorTodos[index].color}</td>
                            <td key={index + "cilindrajeadm"}>{vectorTodos[index].valorCompra}</td>
                            <td key={index + "coloradm"}>{vectorTodos[index].valorVenta}</td>
                            <td key={index + "cantidad"}>{vectorTodos[index].cantidad}</td>
                                             <td key="borro"><Borrar aux={index} /></td>
                <td key="edito"><Editar aux={index} /></td> 
                        </tr>
                    );
                }
            }
        }
    }, [vectorTodos]);

    return (
        <>
            {state}
        </>
    )
};
export default TAdmin;