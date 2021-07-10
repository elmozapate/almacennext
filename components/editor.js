import React from 'react';
class Editor extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            aux: this.props.aux,
            action: this.props.action
        }
    }
    render() {
        return (
            <div className="editor hide" id="editor">
                <form name="crear-producto" >
                    <label className="formulario_label_Dos" htmlFor="product-stock">
                        Cantidad
                    </label>
                    <input className="formulario_imput_Dos" type="number" min="1" id="product-stock-ed" required />
                    <label className="formulario_label_Dos" htmlFor="product-purchace-price">
                        Precio
                    </label>
                    <input className="formulario_imput_Dos" type="number" min="1" id="product-purchace-price-ed" required />
                    <label className="formulario_label_Dos" htmlFor="product-sale-price">
                        Cilindraje
                    </label>
                    <input className="formulario_imput_Dos" type="number" min="1" id="product-sale-price-ed" required />
                    <select className="formulario_selector_Dos" defaultValue={''} id="product-color-ed" required>
                        Seleccione el color:
                        <option value="" disabled>SELECCIONAR
                        </option>
                        <option value="Blanco">
                            Blanco
                        </option>
                        <option value="Cafe">
                            Cafe
                        </option>
                        <option value="Verde">
                            Verde
                        </option>
                        <option value="Gris">
                            Gris
                        </option>
                        <option value="Azul">
                            Azul
                        </option>
                    </select>
                </form>
            </div>
        )
    }
}
export default Editor;
