import React from 'react';
import CrearTabla from './botones/creartabla';
import SelectTipo from './selectTipo';

function Formatocrear() {

    return (
        <div className="formato-crear">
            <label className="validation-error hide" id="codeValidationError">
                <br />Este campo es
                requerido.
            </label>
           {/*  <SelectTipo/> */}
            
            <div className="container_Dos" id="index-ini">
                <form className="nuevosproductos" autoComplete="off">
                    <label className="formulario_label_Dos">
                        Código
                    </label>
                    <input type="number" className="formulario_imput_Dos" name="code" id="code" min="1" required />
                    <label className="formulario_label_Dos">
                        Unidades</label>
                    <input type="number" className="formulario_imput_Dos" min="1" id="product-stock" required />
                    <label className="formulario_label_Dos">
                        Precio
                    </label>
                    <input type="number" min="1" className="formulario_imput_Dos" id="product-purchace-price" required />
                    <label className="formulario_label_Dos">
                        Cilindraje
                    </label>
                    <input type="number" className="formulario_imput_Dos" min="1" id="price" required />
                    <label className="formulario_label_Dos">
                        Tipo
                    </label>
                    <select className="formulario_selector_Dos" defaultValue={''}  id="tipo" required>
                        <option value="" disabled>
                        </option>
                        <option value="Automovil">Automovil</option>
                        <option value="Camioneta">Camioneta</option>
                        <option value="Suv">Suv</option>
                        <option value="Campero">Campero</option>
                        <option value="Motocicleta">Motocicleta</option>
                        <option value="Cuatrimoto">Cuatrimoto</option>
                        <option value="Motocarro">Motocarro</option>
                    </select>
                    <label className="formulario_label_Dos">Marca</label>
                    <select className="formulario_selector_Dos" defaultValue={''} id="category" required>
                        <option value="" disabled>SELECCIONAR
                        </option>
                        <option value="Ford">Ford</option>
                        <option value="Mazda">Mazda</option>
                        <option value="Mitsubishi">Mitsubishi</option>
                        <option value="Citroen">Citroen</option>
                        <option value="Chevrolet">Chevrolet</option>
                        <option value="Honda">Honda</option>
                        <option value="Toyota">Toyota</option>
                        <option value="Zuzuki">Zuzuki</option>
                        <option value="Audi">Audi</option>
                        <option value="Volvo">Volvo</option>
                    </select>
                    <label className="formulario_label_Dos">
                        Color
                    </label>
                    <select className="formulario_selector_Dos" defaultValue={''} name="color" id="color" required >
                        <option value="" disabled>SELECCIONAR
                        </option>
                        <option value="Blanco">Blanco</option>
                        <option value="Cafe">Cafe</option>
                        <option value="Verde">Verde</option>
                        <option value="Gris">Gris</option>
                        <option value="Azul">Azul</option>
                    </select>
                    <label className="validation-error hide" id="codeValidationErrorDos">
                        <br />
                        Este aritculo
                        ya existe.
                    </label>
                    <CrearTabla />
                </form>
            </div>
        </div>
    )
}
export default Formatocrear;
