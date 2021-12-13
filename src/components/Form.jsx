import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../css/Form.css';

class Form extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <div>
        <form className="form">
          <div>
            <label htmlFor="name-input" className="label-form">
              Nome:
              <input
                type="text"
                className="input-form"
                name="cardName"
                id="name-input"
                data-testid="name-input"
                value={ cardName }
                onChange={ onInputChange }
              />
            </label>
          </div>

          <div>
            <label htmlFor="attr1-input" className="label-form">
              Primeiro Atributo:
              <input
                name="cardAttr1"
                className="input-form"
                type="number"
                data-testid="attr1-input"
                value={ cardAttr1 }
                onChange={ onInputChange }
              />
            </label>
          </div>

          <div>
            <label htmlFor="attr2-input" className="label-form">
              Segundo Atributo:
              <input
                name="cardAttr2"
                className="input-form"
                type="number"
                data-testid="attr2-input"
                value={ cardAttr2 }
                onChange={ onInputChange }
              />
            </label>
          </div>

          <div>
            <label htmlFor="attr3-input" className="label-form">
              Terceiro Atributo:
              <input
                name="cardAttr3"
                className="input-form"
                type="number"
                data-testid="attr3-input"
                value={ cardAttr3 }
                onChange={ onInputChange }
              />
            </label>
          </div>

          <div>
            <label htmlFor="image-input" className="label-form">
              Imagem da carta:
              <input
                name="cardImage"
                className="input-form"
                type="text"
                data-testid="image-input"
                value={ cardImage }
                onChange={ onInputChange }
              />
            </label>
          </div>

          <div>
            <label htmlFor="description-input" className="label-form">
              Descrição da Carta:
              <textarea
                name="cardDescription"
                rows="5"
                cols="33"
                className="textarea-form"
                id="description-input"
                data-testid="description-input"
                value={ cardDescription }
                onChange={ onInputChange }
              />
            </label>
          </div>

          <label htmlFor="rare-input" className="label-form">
            Raridade da carta:
            <select
              name="cardRare"
              className="select-form"
              id="rare-input"
              data-testid="rare-input"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>
          <br />

          <div>
            {hasTrunfo
              ? (<span>Você já tem um Super Trunfo em seu baralho</span>)
              : (
                <label htmlFor="trunfo-input" className="label-form">
                  <input
                    name="cardTrunfo"
                    type="checkbox"
                    data-testid="trunfo-input"
                    checked={ cardTrunfo }
                    onChange={ onInputChange }
                  />
                  Super Trunfo
                </label>
              )}
          </div>

          <br />
          <button
            data-testid="save-button"
            className="bottom-form"
            type="submit"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};
export default Form;
