// requisito 11 e 12 feito com ajuda de Ricardo Carvalho turma 16 for(ever).
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../css/InputFilter.css';

class InputFilter extends Component {
  render() {
    const { inputFilter, rareFilter, trunfoFilter, onInputFilter } = this.props;

    return (
      <div className="conteiner-filter">
        <input
          data-testid="name-filter"
          className="input-filter"
          type="text"
          name="nameFilter"
          placeholder="Nome da Carta"
          id="search"
          value={ inputFilter }
          onChange={ onInputFilter }
        />

        <select
          className="selected-filter"
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
          <input
            className="checked-filter"
            type="checkbox"
            data-testid="trunfo-filter"
            name="trunfoFilter"
            checked={ trunfoFilter }
            onChange={ onInputFilter }
          />
          Super Trunfo
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
