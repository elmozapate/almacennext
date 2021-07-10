import React, { Component, useEffect, useState } from 'react';
import Audi from "../img/audi.png";
import Toyota from "../img/toyota.png";
import Chevrolet from "../img/chevrolet.png";
import Subaru from "../img/subaru.png";
import Drop from "../img/drop.png";
import Select from './select';
import SelecColor from './selectColor';
var info
var selected
function SelectTipo() {
    var [estado, setEstado] = useState(false)
    var [tipo, setTipo] = useState(1)
    var [estadoDos, setEstadoDos] = useState(false)

    useEffect(() => {
        console.log(tipo)
        if (estado === false) {
            info =
                <div className="select-active" id="select-active">
                <div onClick={() => {setTipo(tipo=1);setEstado(false);setEstadoDos(!estadoDos)}}>
                        <img src={Subaru} alt="drop" height="20px">
                        </img>
                        <span>Automovil</span>
                    </div>
                    <div onClick={() =>{setTipo(tipo=2);setEstado(false)}}>
                        <img src={Chevrolet} alt="drop" height="20px">
                        </img>
                        <span>Camioneta</span>
                    </div>
                    <div onClick={() => {setTipo(tipo=3);setEstado(false)}}>
                        <img src={Audi} alt="drop" height="20px">
                        </img>
                        <span>Motocarro</span>
                    </div>
                        <div onClick={() => {setTipo(tipo=4);setEstado(false)}}>
                        <img src={Toyota} alt="drop" height="20px">
                        </img>
                        <span>Motocicleta</span>
                    </div>
                </div>
        }
        if (estado === true) {

            info = <></>
        }
        if (tipo!==1) {
            console.log(tipo)
            selected=
                        <div></div>
                
        }
        if (tipo===1) {
            console.log(tipo)
            selected=<>
            <Select/>
            </>
        }
    
    })
    return (
        <>
            <div className="select">
                <div onClick={() => setEstado(estado=true)}>
                    <span>TIPO</span>
                    <img src={Drop} alt="drop" height="20px">
                    </img>
                </div>
                {info}
                {selected}
            </div>
        </>
    )
}
export default SelectTipo