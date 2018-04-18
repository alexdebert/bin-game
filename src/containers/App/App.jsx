/**
 * @overview App Container.
 */

// Core
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Components
import Score from '../Score/Score';
import Timer from '../Timer/Timer';
import Game from '../Game/Game';

// Styles
import './App.scss';

const App = props => (
  <div className="AppContainer">
    <Score />
    <Game bins={props.bins} />
    <Timer />
  </div>
);

App.propTypes = {
  bins: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
};

const mapStateToProps = state => ({
  bins: state.bins.data,
});

export default connect(mapStateToProps)(App);
