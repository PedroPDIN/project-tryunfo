// requisito 11 e 12 feito com ajuda de Ricardo Carvalho turma 16 for(ever).
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputFilter extends Component {
  render() {
    const { inputFilter, rareFilter, trunfoFilter, onInputFilter } = this.props;

    return (
      <div>
        <input
          data-testid="name-filter"
          type="text"
          name="nameFilter"
          id="search"
          value={ inputFilter }
          onChange={ onInputFilter }
        />

        <select
          data-testid="rare-filter"
          name="rareFilter"
          id="select"
          value={ rareFilter }
          onChange={ onInputFilter }
        >
          <option value="todas">todas</option>
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito raro">muito raro</option>
        </select>

        <label htmlFor="trunfo-filter">
          Super Trunfo
          <input
            type="checkbox"
            data-testid="trunfo-filter"
            name="trunfoFilter"
            checked={ trunfoFilter }
            onChange={ onInputFilter }
          />
        </label>
      </div>
    );
  }
}

InputFilter.propTypes = {
  inputFilter: PropTypes.string.isRequired,
  onInputFilter: PropTypes.func.isRequired,
  rareFilter: PropTypes.string.isRequired,
  trunfoFilter: PropTypes.bool.isRequired,
};
export default InputFilter;
