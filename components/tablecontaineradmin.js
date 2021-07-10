import React from 'react';
import TAdmin from './tableadmin';
function TableAdmin() {
    return (
        <div className="table-container">
            <table className="table-rwd" id="table-rwd">
                <thead>
                <tr>
                        <th>Codigo</th>
                        <th>Artículo</th>
                        <th>Tipo</th>
                        <th>Marca</th>
                        <th>Precio</th>
                        <th>Cilindraje</th>
                        <th>Color</th>
                        <th>Cant.</th>
                        <th>borrar</th>
                        <th>editar</th>
                    </tr>
                    <TAdmin/>
                </thead>
            </table>
        </div>
    )
}
export default TableAdmin