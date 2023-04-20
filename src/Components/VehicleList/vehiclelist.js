import React from "react";
import PropTypes from 'prop-types';
import './vehiclelist.css'

export default function vehiclelist(props) {
    const { name } = props;
    return (
    <h2>{name}</h2>
    );
}

vehiclelist.propTypes = {
    additional: PropTypes.shape({
      link: PropTypes.string,
      notes: PropTypes.string
    }),
    diet: PropTypes.arrayOf(PropTypes.string).isRequired,
    name: PropTypes.string.isRequired,
    scientificName: PropTypes.string.isRequired,
    showAdditional: PropTypes.func.isRequired,
    size: PropTypes.number.isRequired,
  }

  vehiclelist.defaultProps = {
    additional: {
      notes: 'No Additional Information'
    }
  }