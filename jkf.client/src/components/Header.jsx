import React from 'react';
import './scss/Header.scss';
import logo from '../img/Asia.svg';


function Header(){
    return(
        <>
        <div className="header_container">
            <div className="header">
                <img src={logo} alt="Joanna Kretschmann Fotografia"/>
            </div>
            </div>
        </>
    )
}

export default Header;