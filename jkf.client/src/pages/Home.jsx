import React from 'react';
import '../components/scss/Routes.scss'
import '../components/scss/Home.scss';

//icons
import { IoCarSportSharp } from 'react-icons/io5';
import { FaHeart } from 'react-icons/fa';
import { BiDrink } from 'react-icons/bi';
import { MdEvent } from 'react-icons/md';
import { BsPersonSquare } from 'react-icons/bs';
import { FiMusic } from 'react-icons/fi'

//photos
import Samochody from '../img/Samochody.jpg';
import Eventy from '../img/Eventy.jpg';
import Taneczne from '../img/Taneczne.jpg';
import Portrety from '../img/Portrety.jpg';
import Imprezy from '../img/Imprezy.jpg';
import Sluby from '../img/Sluby.jpg';

class Home extends React.Component{
    render(){
        return(
            <div className="routes_container">
            <div className="test"></div>
            <div className="offer">
                <div className="offer-option"><img src={Samochody} alt="Samochody"/><IoCarSportSharp className="icon"/><div className="offer-content">Sesje Samochodowe</div></div>
                <div className="offer-option"><img src={Eventy} alt="Eventy"/><MdEvent className="icon"/><div className="offer-content">Wydarzenia</div></div>
                <div className="offer-option"><img src={Taneczne} alt="Taneczne"/><FiMusic className="icon"/><div className="offer-content">Sesje taneczne</div></div>
                <div className="offer-option"><img src={Portrety} alt="Portrety"/><BsPersonSquare className="icon"/><div className="offer-content">Portrety</div></div>
                <div className="offer-option"><img src={Imprezy} alt="Imprezy"/><BiDrink className="icon"/><div className="offer-content">Imprezy</div></div>
                <div className="offer-option"><img src={Sluby} alt="Śluby"/><FaHeart className="icon"/><div className="offer-content">Sesje ślubne</div></div>
            </div>
            </div>
        )
    }
}

export default Home;