import React from 'react';
function Slider() {
    return (
        <section className="slider-section">
            <div className="container-slider">
                <h3 className="slider-titulo">
                    Articulos destacados
                </h3>
                <ul className="slider">
                    <li id="slide1">
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3947459/car.jpg" alt="foto" />
                    </li>
                    <li id="slide2">
                        <img src="https://www.hibridosyelectricos.com/media/hibridos/images/2019/06/17/2019061712442294588.jpg" alt="foto" />
                    </li>
                    <li id="slide3">
                        <img src="https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_600/https://tiempolibre.com.co/wp-content/uploads/2019/03/Aventura-Colombia.Com-Cuatrimotos.jpg" alt="foto" />
                    </li>
                </ul>
                <ul className="menu">
                    <li>
                        <a href="#slide1">
                            1
                        </a>
                    </li>
                    <li>
                        <a href="#slide2">
                            2
                        </a>
                    </li>
                    <li>
                        <a href="#slide3">
                            3
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    )
};
export default Slider;