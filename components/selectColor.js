import React, { Component, useEffect, useState } from 'react';
import Audi from "../img/audi.png";
import Toyota from "../img/toyota.png";
import Chevrolet from "../img/chevrolet.png";
import Ford from "../img/ford.png";
import Subaru from "../img/subaru.png";
import Drop from "../img/drop.png";
var info
function SelecColor() {
    var [estadoDos, setEstadoDos] = useState(true)
    useEffect(() => {
        console.log("oe")
        if (estadoDos === true) {
            info =
                <div onClick={() => setEstadoDos(false)} className="select-active" id="select-active">
                    <div>
                        <img src={Subaru} alt="drop" height="20px">
                        </img>
                        <span>Rojo</span>
                    </div>
                    <div>
                        <img src={Chevrolet} alt="drop" height="20px">
                        </img>
                        <span>Verde</span>
                    </div>
                    <div>
                        <img src={Audi} alt="drop" height="20px">
                        </img>
                        <span>Amarillo</span>
                    </div>
                    <div>
                        <img src={Toyota} alt="drop" height="20px">
                        </img>
                        <span>Negro</span>
                    </div>
                    <div>
                        <img src={Ford} alt="drop" height="20px">
                        </img>
                        <span>Gris</span>
                    </div>
                </div>
        }
        if (estadoDos === false) {

            info = <><div className="select-active" id="select-active">
           
        </div></>
        }
    })
    return (
        <>
            <div className="select">
                <div onClick={() => setEstadoDos(!estadoDos)}>
                    <span>Color</span>
                    <img src={Drop} alt="drop" height="20px">
                    </img>
                </div>
                {info}
            </div>
        </>
    )
}
export default SelecColor