import React, { useState } from "react";
function CrearTabla() {
    let vectorTodos
    var [state, setstate] = useState({array:[], table:[] })
    React.useEffect(() => {
        const stickyValue =  JSON.parse(window.localStorage.getItem("todos"));
        if (stickyValue === null ) {
            window.localStorage.setItem("todos", JSON.stringify([]));
        }
    }, [state.length]);
    React.useEffect(() => {
        const stickyValue =  JSON.parse(window.localStorage.getItem("todos"));
        vectorTodos = stickyValue
        if ( stickyValue.length > 2 ) {
                setstate({table:stickyValue})
                        }
    }, [state.length]);
    class articulo {
        constructor(code = Number, articulo = String, type = String, category = String,
            valorVenta = Number, valorCompra = Number, color = String, cantidad = Number) {
            this.code = code
            this.articulo = articulo
            this.type = type
            this.category = category
            this.valorVenta = valorVenta
            this.valorCompra = valorCompra
            this.cantidad = cantidad
            this.color = color
        }
    };
    function validate(code) {
        var isValid = true;
        if (document.getElementById("code").value === "") {
            isValid = false;
            document.getElementById("codeValidationError").classList.remove("hide");
        } else {
            isValid = true;
            if (!document.getElementById("codeValidationError").classList.contains("hide"))
                document.getElementById("codeValidationError").classList.add("hide");
        }
        let vectorTodosAux = JSON.parse(localStorage.getItem("todos"))
        if (vectorTodosAux != null) {
            for (let index = 0; index < vectorTodosAux.length; index++) {
                var element = vectorTodosAux[index].code;
                if (element === code) {
                    isValid = false;
                    document.getElementById("codeValidationErrorDos").classList.remove("hide");
                }
            }
        }
        return isValid;
    }
    function insertNewRecord() {
            vectorTodos = JSON.parse(localStorage.getItem("todos")) 
             var nucode = document.getElementById("code").value
        if (
            validate(nucode) === true &&
            document.getElementById("color").value !== "" &&
            document.getElementById("category").value !== "" &&
            document.getElementById("tipo").value !== ""
        ) {
            let formData = {};
            formData["code"] = document.getElementById("code").value
            formData["articulo"] = "Vehículo";
            formData["type"] = document.getElementById("tipo").value;
            formData["color"] = document.getElementById("color").value;
            formData["category"] = document.getElementById("category").value;
            formData["valorCompra"] = document.getElementById("product-purchace-price").value;
            formData["valorVenta"] = document.getElementById("price").value;
            formData["cantidad"] = document.getElementById("product-stock").value;
            var Auxdata = new articulo(formData.code, formData.articulo, formData.type, formData.category, formData.color,
                formData.valorCompra, formData.valorVenta, formData.cantidad);
            vectorTodos.push(Auxdata);
            window.localStorage.setItem("todos", JSON.stringify(vectorTodos));
        }
    }
    var accion = insertNewRecord;
    return (
        <>
            <button onClick={accion} >Crear </button>
        </>
    )
};
export default CrearTabla;
