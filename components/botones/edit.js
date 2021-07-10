import React, { useState } from 'react';
var editarArticulos
var aux
var e =null
class Editar extends React.Component {
    constructor(props) {
        super(props)
        var salir = false;
        e = JSON.parse(window.localStorage.getItem("todos"));

        editarArticulos = () => {
            document.getElementById("editor").classList.remove("hide");
             salir = false;
            var color = document.getElementById("product-color-ed").value;
            var valorCompra = document.getElementById("product-purchace-price-ed").value;
            var valorVenta = document.getElementById("product-sale-price-ed").value;
            var cantidad = document.getElementById("product-stock-ed").value;
            if (color !== "" && valorCompra !== "" && valorVenta
                !== "" && cantidad !== "") {
                e[this.props.aux].color = valorCompra;
                e[this.props.aux].valorCompra = valorVenta;
                e[this.props.aux].valorVenta = color;
                e[this.props.aux].cantidad = cantidad;
                window.localStorage.setItem("todos", JSON.stringify(e))
                salir = true;
            }
            else { window.alert('Para editar complete todos los campos a continuación'); }
            if (salir === true) {
                window.location.reload();
            }
        }
        aux = this.props.aux
    }
    render() {
        return (
            <>
                <button onClick={editarArticulos} id={aux}>Editar</button>
            </>
        )
    }
};
export default Editar;