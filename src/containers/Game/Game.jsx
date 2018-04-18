/**
 * @overview Game container.
 */

// Core
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Actions
import { createBins } from '../../actions/binsActions';

// Components
import BinsContainer from '../../components/BinsContainer/BinsContainer';

class Game extends Component {
  componentDidMount() {
    this.props.createBins();
  }

  render() {
    const { bins } = this.props;
    return (
      <div className="GameContainer">
        <div className="BombsContainer">
          <span>Bombs go here</span>
        </div>
        <BinsContainer bins={bins} />
      </div>
    );
  }
}

Game.propTypes = {
  createBins: PropTypes.func.isRequired,
  bins: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    createBins,
  }, dispatch)
);

export default connect(null, mapDispatchToProps)(Game);
