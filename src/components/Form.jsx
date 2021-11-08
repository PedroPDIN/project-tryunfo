import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
        <form>
          <div>
            <label htmlFor="name-input">
              Nome:
              <input
                type="text"
                name="cardName"
                id="name-input"
                data-testid="name-input"
                value={ cardName }
                onChange={ onInputChange }
              />
            </label>
          </div>

          <div>
            <label htmlFor="description-input">
              Descrição da Carta:
              <textarea
                name="cardDescription"
                id="description-input"
                data-testid="description-input"
                value={ cardDescription }
                onChange={ onInputChange }
              />
            </label>
          </div>

          <div>
            <label htmlFor="attr1-input">
              Primeiro Atributo:
              <input
                name="cardAttr1"
                type="number"
                data-testid="attr1-input"
                value={ cardAttr1 }
                onChange={ onInputChange }
              />
            </label>
          </div>

          <div>
            <label htmlFor="attr2-input">
              Segundo Atributo:
              <input
                name="cardAttr2"
                type="number"
                data-testid="attr2-input"
                value={ cardAttr2 }
                onChange={ onInputChange }
              />
            </label>
          </div>

          <div>
            <label htmlFor="attr3-input">
              Terceiro Atributo:
              <input
                name="cardAttr3"
                type="number"
                data-testid="attr3-input"
                value={ cardAttr3 }
                onChange={ onInputChange }
              />
            </label>
          </div>

          <div>
            <label htmlFor="image-input">
              Imagem da carta:
              <input
                name="cardImage"
                type="text"
                data-testid="image-input"
                value={ cardImage }
                onChange={ onInputChange }
              />
            </label>
          </div>

          <label htmlFor="rare-input">
            Raridade da carta:
            <select
              name="cardRare"
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
                <label htmlFor="trunfo-input">
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
