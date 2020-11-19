import React, { useEffect, useState } from 'react';

import './Nav.css';

const Nav = () => {

    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 1) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, [])

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img
                className='nav__logo'
                src='https://raw.githubusercontent.com/pranjals149/acevent/dc290bd44058661164ecd25c70216fe629e8da8d/movies-inshot/logo.svg'
                alt='logo'
            />
        </div>
    )
}

export default Nav
