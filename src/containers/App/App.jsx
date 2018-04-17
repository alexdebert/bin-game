/**
 * @overview App Container.
 */

// Core
import React from 'react';

// Components
import Score from '../Score/Score';
import Timer from '../Timer/Timer';
import Game from '../Game/Game';

// Styles
import './App.scss';

const App = () => (
  <div className="AppContainer">
    <Score />
    <Game />
    <Timer />
  </div>
);

export default App;
