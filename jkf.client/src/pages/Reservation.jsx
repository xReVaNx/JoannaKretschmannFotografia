import React from 'react';
import '../components/scss/Routes.scss';
import '../components/scss/Reservation.scss';
import { Component } from 'react';


class Reservation extends Component{
    render(){
        return(
            <div className="routes_container">
            <form>
                <label>
                    Imię <input type='text'/>
                    Nazwisko <input type='text'/>
                    <br/>
                    Adres e-mail <input type='email'/>
                    Numer telefonu <input type='tel'/>
                    <br/>
                    Data wydarzenia <input type='date'/>
                    <br/>
                    Rodzaj sesji <select>
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                    </select>
                    <br/>
                    Lokalizacja <input type='text'/>
                    <br/>
                    Wiadomość <textarea></textarea>
                </label>
            </form>
            </div>
        )
    }
}

export default Reservation;