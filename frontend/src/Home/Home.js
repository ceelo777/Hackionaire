import React from 'react';
import classes from './Home.css';
import ReactDOM, { render } from 'react-dom';

class Home extends React.Component {
    render() {
        return (
            <div className="home-container">
                <div className="play-button">
                    <div>PLAY</div>
                    <div>LEARN</div>
                    <div>SURVIVE</div>
                </div>
            </div>
        );
    }
}

export default Home;