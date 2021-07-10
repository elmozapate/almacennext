import React from 'react';
import RegistroBoton from '../../components/botones/registrarse';
import Volver from '../../components/botones/volver';
function Registro() {
    return (
        <section className="seccionesformdos hide" id="registro">
            <div className="container-login">
                <div className="left-col ">
                    <form>
                        <fieldset className="form-login">
                            <legend>
                                REGISTRO
                            </legend>
                            <label>
                                Nombre de Usuario
                            </label>
                            <input type="name" id="usuario-cliente" minLength="3" required />
                            <label>
                                Cree una contrasena
                            </label>
                            <input type="password" minLength="4" id="contrasena-cliente" required />
                            <label>
                                Repita su contrasena
                            </label>
                            <input type="password" minLength="4" id="contrasena-clienteDos" required />
                            <label>
                                Ingrese su E-mail
                            </label>
                            <input type="email" id="email-cliente" required />
                            <RegistroBoton />

                        </fieldset>
                    </form>
                    <Volver />
                </div>
            </div>
        </section>
    )
};
export default Registro