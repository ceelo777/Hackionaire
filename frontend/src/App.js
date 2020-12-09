import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Home from './Home/Home';
import Game from './Game/Game';
import './App.css';

function App() {
  return (    
    <Router>
      <div className='app-container'>
        <div className='nav-container'>
          <div className="covid-times">
            The COVID Times
          </div>
          <div className='home-link'>
            <Link to="/">Home</Link>
          </div>
          <div className='game-link'>
            <Link to="Game">Game</Link>
          </div>
        </div>

        <Switch>
          <Route exact path="/">
            <Home />            
          </Route>
          <Route exact path="/Game">
            <Game />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
