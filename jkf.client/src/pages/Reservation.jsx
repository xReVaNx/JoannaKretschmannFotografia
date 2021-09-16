import React from 'react';
import '../components/scss/Routes.scss';
import '../components/scss/Reservation.scss';
import { Component } from 'react';

class Reservation extends Component{

        constructor(props){
            super(props);
            this.state ={
                firstname: '',
                lastname: '',
                email: '',
                tel: '',
                date: '',
                type: '',
                localization: '',
                message: ''
            }
            this.handleChange = this.handleChange.bind(this);
        }

        handleChange(event){
            const target = event.target;
            const name = target.name;
            this.setState({[name]: event.target.value})
        }
        render(){
        return(
            <div className="routes_container">
                <div className="form-container">
            <form>
                <label for="firstname">Imie:</label>
                <br/>
                <input type='text' name='firstname' value={this.state.firstname} onChange={this.handleChange}/>
                    <br/>
                    <label for="lastname">Nazwisko:</label>
                    <br/>
                    <input type='text' name='lastname' value={this.state.lastname} onChange={this.handleChange}/>
                    <br/>
                    <label for="email">Adres e-mail:</label>
                    <br/>
                    <input type='email' name='email' placeholder="example@gmail.com" value={this.state.email} onChange={this.handleChange}/>
                    <br/>
                    <label for="number">Numer telefonu:</label>
                    <br/>
                    <input type='tel' name='tel' value={this.state.tel} onChange={this.handleChange}/>
                    <br/>
                    <label for="date">Data wydarzenia:</label>
                    <br/>
                    <input type='date' name='date' value={this.state.date} onChange={this.handleChange}/>
                    <br/>
                    <label for="session-type">Rodzaj sesji:</label>
                    <br/>
                    <select name='type' value={this.state.type} onChange={this.handleChange}>
                        <option></option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                    </select>
                    <br/>
                    <label for="location">Lokalizacja:</label>
                    <br/>
                    <input type='text' placeholder="np.: Katowice" name='localization' value={this.state.localiztion} onChange={this.handleChange}/>
                    <br/>
                    <label for="message">Wiadomość:</label>
                    <br/>
                    <textarea name='message' value={this.state.message} onChange={this.handleChange}/>
                    <br/>
                    <button type="submit">Wyślij</button>
            </form>
            </div>
            </div>
        )
    }
}

export default Reservation;