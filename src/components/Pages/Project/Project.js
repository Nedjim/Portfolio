import React from 'react';
import Header               from '../../Header/Header';

import backgroundImg        from '../../../img/projets.jpg';

var Style = {
    backgroundImage: 'url('+backgroundImg+')',
    backgroundPosition: 'top ',
}

export default class Project extends React.Component {
    render(){
        return(
            <div id='project' >
                <Header />
                <div className='container' style={Style}></div>
            </div>
        )
    }
}