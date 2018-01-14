import React from 'react';
import PropTypes from 'prop-types';


const HotelsRow = ({ hotel }) => (
  <tr>
    <td><a href={hotel.url} target="_blank">{hotel.name} </a>{hotel.name}</td>
  </tr>
);

HotelsRow.propTypes = {
  hotel: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
};

HotelsRow.defaultProps = {
  hotels: PropTypes.arrayOf(PropTypes.any),
};

export default HotelsRow;
