import React from 'react';
import PropTypes from 'prop-types';

const HotelsClikableTh = ({ label, sortKey, isSelected, onSort }) => (
  <th
    className="hotels-clikable-th"
    onClick={() => onSort(sortKey)}
  >{label}{isSelected ? '▲' : ''}</th>
);

HotelsClikableTh.propTypes = {
  label: PropTypes.string.isRequired,
  sortKey: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onSort: PropTypes.func.isRequired,
};

export default HotelsClikableTh;
