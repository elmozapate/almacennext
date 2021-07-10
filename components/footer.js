import React from "react";
function Footer() {
    return (
        <footer>
            <section className="contact-section">
                <div>
                    <div className="footer-left">
                        <h2>
                            Dejanos un mensaje:
                        </h2>
                        <form action="">
                            <label htmlFor="name">
                                Nombre
                            </label>
                            <input type="text" id="name" className="input-footer" />
                            <label htmlFor="message">
                                Mensaje
                            </label>
                            <textarea name="message" id="message" cols="27" rows="4">
                            </textarea>
                            <br />
                            <input type="submit" className="send-message-cta" value="Send message" />
                        </form>
                    </div>
                    <div className="footer-content">
                        <div className="footer-div">
                            <div className="footer-text">
                                Contactanos por WhattsApp
                            </div>
                            <img src="http://127.0.0.1:5500/logowhats.png" className="footer-image" alt="logo" />
                        </div>
                    </div>
                    <div className="logo-footer hide"><img src="http://127.0.0.1:5500/logo.jpeg" className="logo" alt="logo" />
                    </div>
                    <div>
                        <legend className="legend-footer">
                            NIGOTES WEB-DEVELOPERS
                            <br />
                            Colombia 2021
                            <br />
                        </legend>
                    </div>
                </div>
            </section>
        </footer>
    )
}
export default Footer