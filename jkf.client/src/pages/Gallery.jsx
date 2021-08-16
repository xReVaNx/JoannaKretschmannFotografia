import '../components/scss/Gallery.scss';
import samochody from '../img/Samochody.jpg';
import taneczne from '../img/Taneczne.jpg';
import eventy from '../img/Eventy.jpg';
import imprezy from '../img/Imprezy.jpg';
import portrety from '../img/Portrety.jpg';
import sluby from '../img/Sluby.jpg';


function Gallery(){
    return(
        <div className="gallery_container">
            <ul className="gallery">
                <li className="gallery_option"><img src={samochody} alt="Samochody"/><div className="innerText-bg"></div><div className="innerText">Samochody</div></li>
                <li className="gallery_option"><img src={eventy} alt="Eventy"/><div className="innerText-bg"></div><div className="innerText">Eventy</div></li>
                <li className="gallery_option"><img src={taneczne} alt="Taneczne"/><div className="innerText-bg"></div><div className="innerText">Taneczne</div></li>
                <li className="gallery_option"><img src={portrety} alt="Portrety"/><div className="innerText-bg"></div><div className="innerText">Portrety</div></li>
                <li className="gallery_option"><img src={imprezy} alt="Imprezy"/><div className="innerText-bg"></div><div className="innerText">Imprezy</div></li>
                <li className="gallery_option"><img src={sluby} alt="Śluby"/><div className="innerText-bg"></div><div className="innerText">Śluby</div></li>
            </ul>
        </div>
    )
}

export default Gallery;