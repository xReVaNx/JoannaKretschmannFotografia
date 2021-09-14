import React from 'react';
import { Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, { Pagination, Navigation, EffectCoverflow, Autoplay } from 'swiper/core';
import '../components/scss/About.scss';
import '../components/scss/Routes.scss';
import Asia from '../img/Asia.jpg';

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss"
import "swiper/components/navigation/navigation.scss"
    

SwiperCore.use([Pagination, Navigation, EffectCoverflow, Autoplay]);

function About(){
    return(
        <div className="routes_container">
            <div className="swipe_container">
            <Swiper slidesPerView={3} effect={'coverflow'} spaceBetween={5} centeredSlides={true} initialSlide={1} loop={false} pagination={{"clickable": true }} navigation={true} 
            coverflowEffect={{ "rotate": 0, "stretch": 100, "depth": 300, "modifier": 3, "slideShadows": false }} autoplay={{ "delay": 3000 }} className="mySwiper">
                <SwiperSlide>
            <div className="businessCard">
                    <h3>Zainteresowania</h3>
                    <div className="content">
                        <span>
                        Cześć, mam na imię Asia i nie wiem co tutaj wpisać XDDDD. Dobra, niech to będzie przykładowy tekst, bo kreatywny nie jestem, i tyle xD. A no tak
                        jestem profesjonalnym fotografem z ponad 7 letnim doświadczeniem. Też Cię kocham &lt;3.
                        </span>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="businessCard-about">
                    <h3>Joanna Kretschmann</h3>
                    <img src={Asia} alt="Joanna Kretschmann"/>
                    <div className="content">
                        <span>
                        Cześć, mam na imię Asia i nie wiem co tutaj wpisać XDDDD. Dobra, niech to będzie przykładowy tekst, bo kreatywny nie jestem, i tyle xD. A no tak
                        jestem profesjonalnym fotografem z ponad 7 letnim doświadczeniem. Też Cię kocham &lt;3.
                        </span>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="businessCard">
                    <h3>Fotografia</h3>
                    <div className="content">
                        <span>
                        Cześć, mam na imię Asia i nie wiem co tutaj wpisać XDDDD. Dobra, niech to będzie przykładowy tekst, bo kreatywny nie jestem, i tyle xD. A no tak
                        jestem profesjonalnym fotografem z ponad 7 letnim doświadczeniem. Też Cię kocham &lt;3.
                        </span>
                    </div>
                </div>
                </SwiperSlide>
                </Swiper>
                </div>
            </div>
    )
}

export default About;