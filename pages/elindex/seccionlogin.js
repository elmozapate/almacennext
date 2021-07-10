import React from 'react'
import UrspasBoton from '../../components/botones/usrpas';
import Volver from '../../components/botones/volver';
function Login() {
    return (
        <section className="seccionesform hide" id="login">
            <div className="container-login">
                <div className="left-col ">
                    <form>
                        <fieldset className="form-login">
                            <legend>
                                LOG IN
                            </legend>
                            <label htmlFor="name">
                                Usuario:
                            </label>
                            <input type="name" id="usuario" required />
                            <label htmlFor="username">
                                Password:
                            </label>
                            <input type="password" id="clave" required />
                            <UrspasBoton />
                        </fieldset>
                    </form>
                    <Volver />
                </div>
            </div>
        </section>
    )
};
export default Login;
