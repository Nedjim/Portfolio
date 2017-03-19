import React from 'react';
import {Link} from 'react-router';

export default class Header extends React.Component {
    render(){
        return(
            <header>
                <div className='identity'>
                    <h2>Nedjim DN</h2>
                    <p>Développeuse Web Fullstack JS</p>
                </div>
                <nav>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/projets'>Projets</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                </nav>
            </header>
        )
    }
}