import React from 'react';
import Table from './table';
function Tablecontainer() {
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
                    </tr>
                    <Table />
                </thead>
            </table>
        </div>
    )
}
export default Tablecontainer