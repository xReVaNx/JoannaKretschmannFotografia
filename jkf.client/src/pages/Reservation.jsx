import React from 'react';
import '../components/scss/Routes.scss';
import '../components/scss/Reservation.scss';
import { Component } from 'react';

class Reservation extends Component{
    render(){
        return(
            <div className="routes_container">
                <div className="form-container">
            <form>
                <label for="firstname">Imie:</label>
                <br/>
                <input type='text'/>
                    <br/>
                    <label for="lastname">Nazwisko:</label>
                    <br/>
                    <input type='text'/>
                    <br/>
                    <label for="email">Adres e-mail:</label>
                    <br/>
                    <input type='email' placeholder="example@gmail.com"/>
                    <br/>
                    <label for="number">Numer telefonu:</label>
                    <br/>
                    <input type='tel'/>
                    <br/>
                    <label for="date">Data wydarzenia:</label>
                    <br/>
                    <input type='date'/>
                    <br/>
                    <label for="session-type">Rodzaj sesji:</label>
                    <br/>
                    <select>
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                    </select>
                    <br/>
                    <label for="location">Lokalizacja:</label>
                    <br/>
                    <input type='text' placeholder="np.: Katowice"/>
                    <br/>
                    <label for="message">Wiadomość:</label>
                    <br/>
                    <textarea/>
                    <br/>
                    <button type="submit">Wyślij</button>
            </form>
            </div>
            </div>
        )
    }
}

export default Reservation;