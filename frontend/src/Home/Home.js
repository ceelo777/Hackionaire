import HomeBG from '../assets/img/homebg.jpg';
import React from 'react';
import classes from './Home.css';
import ReactDOM, { render } from 'react-dom';

class Home extends React.Component {
    render() {
        return (
            <div>
                <img src={HomeBG}></img>
            </div>
        );
    }
}

export default Home;