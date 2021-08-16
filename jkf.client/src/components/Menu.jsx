import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './scss/menu.scss';
import { withRouter } from 'react-router';

class Menu extends React.Component{
    render(){
    return(
            <div className="navbar">
                <ul className="menu">
                    <Link to="/"><li className="menu_option">Home</li></Link>
                    <Link to="/about"><li className="menu_option">O mnie</li></Link>
                    <Link to="/portfolio"><li className="menu_option">Portfolio</li></Link>
                    <Link to="/reservation"><li className="menu_option">Rezerwacja</li></Link>
                    <Link to="/contact"><li className="menu_option">Kontakt</li></Link>
                </ul>
            </div>
    )
    }
}

export default Menu;