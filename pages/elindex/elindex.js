import React from "react";
import Inicio from "./inicio";
import Slider from "./slider";
import MarcasSeccion from "./marcas";
function Index() {
       return (
        <main >
            <div className="inicio">
 
                  <Inicio /> 
 
                 <Slider /> 
                 
                 <MarcasSeccion /> 
            </div>
        </main >
    );
}
export default Index;