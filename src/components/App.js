import '../assets/stylesheets/index.scss';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
import React                from 'react';
import Home                 from './Pages/Home/Home';
import Project              from './Pages/Project/Project';
import Contact              from './Pages/Contact/Contact';

export default class App extends React.Component {
    render() {
        return (
             <Router history={browserHistory}>
                <Route path='/' component={Home}/>
                <Route path='/projets' component={Project}/>   
                <Route path='/contact' component={Contact}/> 
            </Router>
        )
    }
}