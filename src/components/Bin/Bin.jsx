/**
 * @overview Bin component.
 */

// Core
import React from 'react';
import PropTypes from 'prop-types';

const Bin = (props) => {
  const binStyle = {
    background: props.bin.color,
  };

  return (
    <div className="Bin" style={binStyle} />
  );
};

Bin.propTypes = {
  bin: PropTypes.shape({
    color: PropTypes.string.isRequired,
  }).isRequired,
};

export default Bin;
