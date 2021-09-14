import React from 'react';
import { Link } from 'react-router-dom';
import './scss/menu.scss';

class Menu extends React.Component{
    render(){
    return(
            <div className="navbar">
                <ul className="menu">
                    <Link to="/"><li className="menu_option">HOME</li></Link>
                    <Link to="/about"><li className="menu_option">O MNIE</li></Link>
                    <Link to="/portfolio"><li className="menu_option">PORTFOLIO</li></Link>
                    <Link to="/reservation"><li className="menu_option">REZERWACJA</li></Link>
                    <Link to="/contact"><li className="menu_option">KONTAKT</li></Link>
                </ul>
            </div>
    )
    }
}

export default Menu;