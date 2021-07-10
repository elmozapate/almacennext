import React from "react";
import Sidenav from './sidenav';
import AbrirNav from "./botones/abrirnav";
import Link from "next/dist/client/link";
function BarraNav() {
    return (
<>
        <header className="header-nav">
            <div  id="barraNavDos">
                <Link href='/'>
                    <a href='/index'>
                        <img src="http://127.0.0.1:5500/logo.jpeg" className="logo" alt="logo" /></a>
                </Link>
                <AbrirNav />
            </div>
        </header>
                    <Sidenav />

</>

    );
}
export default BarraNav;
