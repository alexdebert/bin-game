/**
 * @overview Timer indicator.
 */

// Core
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Actions
import { startTimer, countDown } from '../../actions/timerActions';
import { shuffleBins } from '../../actions/binsActions';


class Timer extends Component {
  constructor() {
    super();
    this.timer = 0;
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);
  }

  componentDidMount() {
    this.startTimer();
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  startTimer() {
    this.props.startTimer();
    this.timer = setInterval(this.countDown, 1000);
  }

  countDown() {
    const { remainingSeconds } = this.props;
    this.props.countDown(remainingSeconds);
    if (remainingSeconds === 0) {
      this.props.shuffleBins(this.props.bins);
      clearInterval(this.timer);
      this.startTimer();
    }
  }

  render() {
    const { remainingSeconds } = this.props;
    return (
      <div className="TimerContainer CornerRight">
        <span>Change in: {remainingSeconds}s</span>
      </div>
    );
  }
}

Timer.propTypes = {
  remainingSeconds: PropTypes.number.isRequired,
  startTimer: PropTypes.func.isRequired,
  countDown: PropTypes.func.isRequired,
  shuffleBins: PropTypes.func.isRequired,
  bins: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
};

const mapStateToProps = state => ({
  remainingSeconds: state.timer.remainingSeconds,
  bins: state.bins.data,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    startTimer,
    countDown,
    shuffleBins,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
