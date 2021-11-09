import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputFilter extends Component {
  render() {
    const { inputFilter, onInputChange } = this.props;

    return (
      <div>
        <input
          data-testid="name-filter"
          type="text"
          name="inputFilter"
          id="search"
          value={ inputFilter }
          onChange={ onInputChange }
        />
      </div>
    );
  }
}

InputFilter.propTypes = {
  inputFilter: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};
export default InputFilter;
