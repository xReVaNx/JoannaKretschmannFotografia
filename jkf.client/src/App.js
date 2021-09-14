import React from 'react';
import { Component } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';


//Components
import Header from './components/Header';
import Menu from './components/Menu';
import Routes from './components/Routes';
import Footer from './components/Footer';

class App extends Component{
    render(){
        return(
            <>
            <Header/>
            <Router>
                <Menu/>
                <Routes/>  
            </Router>
            <Footer/>
            </>
        )
    }
}


export default App;