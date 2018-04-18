/**
 * @overview Bins container.
 */

// Core
import React from 'react';
import PropTypes from 'prop-types';

// Component
import Bin from '../Bin/Bin';

const BinsContainer = (props) => {
  const { bins } = props;

  const binItem = bins.map(bin => (
    <Bin
      key={bin.id}
      bin={bin}
    />
  ));

  return (
    <div className="BinsList">{binItem}</div>
  );
};

BinsContainer.propTypes = {
  bins: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
};

export default BinsContainer;
