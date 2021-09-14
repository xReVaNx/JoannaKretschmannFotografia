import React from 'react';
import '../components/scss/Routes.scss';
import '../components/scss/Contact.scss';
import MailLogo from '../img/mail.png';
import { Component } from 'react';

//icons
import { SiInstagram, SiFacebook, SiTiktok, SiLinkedin } from 'react-icons/si';


class Contact extends Component{
    render(){
        return(
            <div className="routes_container">
                <div className="contact">
                    <div className="businessCard">
                        <p>kretschmannjoanna@gmail.com</p>
                        <img src={MailLogo} alt="mail"/>
                        <div className="social">
                            <a href="https://www.instagram.com/dwuchromian_potasu/" target="_blank">
                            <SiInstagram/>
                            </a>
                            <a href="https://www.facebook.com/dwuchromian.potasu" target="_blank">
                            <SiFacebook/>
                            </a>
                            <a href="https://www.tiktok.com/@dwuchromian_potasu?" target="_blank">
                            <SiTiktok/>
                            </a>
                            <a href="https://www.linkedin.com/in/joanna-kretschmann-95b151220/" target="_blank">
                            <SiLinkedin/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;