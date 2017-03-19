import React from 'react';
import Header               from '../../Header/Header';
import backgroundImg        from '../../../img/contact.jpg';

var Style = {
    backgroundImage: 'url('+backgroundImg+')',
    backgroundPosition: 'bottom',
}

export default class Contact extends React.Component {
    render(){
        return(
            <div id='Contact' >
                <Header />
                <div className='container' style={Style}>

                </div>
            </div>
        )
    }
}