import React from 'react';
import { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';


//Components
import Header from './components/Header';
import Menu from './components/Menu';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Portfolio from './pages/Portfolio';    
import Reservation from './pages/Reservation';
import Contact from './pages/Contact';

class App extends Component{
    render(){
        return(
            <>
            <Header/>
            <Router>
            <Menu/>
                <Switch>
                    <Route exact path="/" component={Gallery}/>
                    <Route path="/about" component={About}/>
                    <Route path="/portfolio" component={Portfolio}/>
                    <Route path="/reservation" component={Reservation}/>
                    <Route path="/contact" component={Contact}/>
                </Switch>
                </Router>
            </>
        )
    }
}


export default App;