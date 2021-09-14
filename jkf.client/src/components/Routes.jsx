import React from 'react';
import { Route, Switch } from 'react-router';

//Routes
import Home from '../pages/Home';
import Gallery from '../pages/Gallery';
import About from '../pages/About'; 
import Reservation from '../pages/Reservation';
import Contact from '../pages/Contact';

class Routes extends React.Component{
    render(){
        return(
            <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/portfolio" component={Gallery}/>
                    <Route path="/reservation" component={Reservation}/>
                    <Route path="/contact" component={Contact}/>
                </Switch>
        )
    }
}

export default Routes;