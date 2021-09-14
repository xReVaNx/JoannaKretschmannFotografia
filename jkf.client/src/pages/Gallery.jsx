import '../components/scss/Gallery.scss';



function Gallery(){
    return(
        <div className="routes_container">
            <ul className="gallery">
                <li className="gallery_option" id="samochody"></li>
                <li className="gallery_option" id="eventy"></li>
                <li className="gallery_option" id="taneczne"></li>
                <li className="gallery_option" id="portrety"></li>
                <li className="gallery_option" id="imprezy"></li>
                <li className="gallery_option" id="sluby"></li>
            </ul>
        </div>
    )
}

export default Gallery;