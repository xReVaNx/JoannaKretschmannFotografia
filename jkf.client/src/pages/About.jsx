import React from 'react';
import '../components/scss/About.scss';
import '../components/scss/Routes.scss';

import Asia from '../img/Asia.png';
import Civic from '../img/Civic.jpg';
import Trunks from '../img/Trunks.jpg';
import BMW from '../img/BMW.jpg';
    

function About(){
    return(
        <div className="routes_container">
            <div className="AboutOption">
                <div className="AboutOption-image">
                <img src={Asia} alt="Joanna Kretschmann"/>
                </div>
                <div className="AboutOption-text">
                    <p>Cześć, mam na imię Asia i zajmuję się fotografią
                        od 7 lat. Quae et deleniti rerum et et dolor iste quis aut. Repellat veniam numquam. Libero velit esse qui quia in distinctio ducimus accusantium voluptates. Minus in est et nisi quos. Est eum dolores temporibus ipsam fugit voluptatum occaecati eos.
                    </p>
                </div>
            </div>
            <div className="AboutOption">
                <div className="AboutOption-text">
                    <p>Voluptates consectetur autem perspiciatis ratione vitae animi magnam id.
Similique quia laborum autem temporibus et id est similique.
Officia ad quo. Nobis quam dolor corporis.
Eaque commodi aspernatur id quo odio recusandae cumque atque sit. Animi quis voluptate ut cumque ut quis quam.
Est quo iusto aut quis ex quos.
Ut fuga repellat.
Et sint eum. Explicabo commodi aliquid.
Velit repellat debitis voluptatem cum repellendus a tempora consequatur.
Rerum dicta minus porro est eaque itaque.</p>
                </div>
                <div className="AboutOption-image">
                <img src={Civic} alt="Civic"/>
                </div>
            </div>
            <div className="AboutOption">
                <div className="AboutOption-image">
                    <img src={Trunks} alt="Trunks"/>
                </div>
                <div className="AboutOption-text">
                    <p>In repellendus fugiat ad exercitationem reiciendis nam est esse. Qui excepturi aut at.
Veritatis et est similique est incidunt at aut.
Illo rerum maxime voluptatum asperiores ut molestiae totam.
Ea fugiat ut iusto velit velit libero error incidunt odio.
Consectetur ut cum.</p>
                </div>
            </div>
            <div className="AboutOption">
                <div className="AboutOption-text">
                    <p>Exercitationem aperiam laudantium eligendi dolor itaque animi eos sequi.
Delectus commodi cumque et molestias. Voluptatem voluptatem et aut molestiae doloribus non quia et.</p>
                </div>
                <div className="AboutOption-image">
                <img src={BMW} alt="BMW"/>
                </div>
            </div>
        </div>
    )
}

export default About;