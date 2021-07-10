import React, { Component, useEffect, useState } from 'react';
import Audi from "../img/audi.png";
import Toyota from "../img/toyota.png";
import Chevrolet from "../img/chevrolet.png";
import Ford from "../img/ford.png";
import Subaru from "../img/subaru.png";
import Drop from "../img/drop.png";
import SelecColor from './selectColor';
var info
var color

function Select() {
    var [estadoDos, setEstadoDos] = useState(true)
    var [estado, setEstado] = useState(true)

    useEffect(() => {
        console.log("oe")
        if (estadoDos === true) {
            info =
                <div onClick={() => {setEstado(estado=!estado);setEstadoDos(estadoDos=false)}}className="select-active" id="select-active">
                    <div>
                        <img src={Subaru} alt="drop" height="20px">
                        </img>
                        <span>SUBARU</span>
                    </div>
                    <div>
                        <img src={Chevrolet} alt="drop" height="20px">
                        </img>
                        <span>CHEVROLET</span>
                    </div>
                    <div>
                        <img src={Audi} alt="drop" height="20px">
                        </img>
                        <span>AUDI</span>
                    </div>
                    <div>
                        <img src={Toyota} alt="drop" height="20px">
                        </img>
                        <span>TOYOTA</span>
                    </div>
                    <div>
                        <img src={Ford} alt="drop" height="20px">
                        </img>
                        <span>FORD</span>
                    </div>
                </div>
        }
        if (estadoDos === false) {

            info = <><div className="select-active" id="select-active">
           
        </div></>
        }
        if (estado === false) {

            info = <><div className="select-active" id="select-active">
           
        </div></>
        }if (estadoDos===false) {
            color=<>
                                    <div></div>

            </>
        }
        if (estadoDos===true) {
            color=<SelecColor/>
            }

    })
    return (
        <>
            <div className="select">
                <div onClick={() => setEstadoDos(estadoDos=true)}>
                    <span>MARCAS</span>
                    <img src={Drop} alt="drop" height="20px">
                    </img>
                </div>
                {info}
                {color}
            </div>
        </>
    )
}
export default Select