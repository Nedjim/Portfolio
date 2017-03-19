import React                from 'react';
import Header               from '../../Header/Header';
import backgroundImg        from '../../../img/home.jpg';

var Style = {
    backgroundImage: 'url('+backgroundImg+')',
    backgroundPosition: 'center',
    filter: 'opacity(40%)'
}

export default class Home extends React.Component {
    render(){
        return(
            <div id='home'>
                <Header />
                <div className='container' style={Style}>
                    
                </div>
            </div>
        )
    }
}