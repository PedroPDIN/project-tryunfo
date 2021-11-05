import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <div>
        <form>
          <div>
            <label htmlFor="name-input">
              Nome:
              <input type="text" id="name-input" data-testid="name-input" />
            </label>
          </div>

          <div>
            <label htmlFor="description-input">
              Descrição da Carta:
              <textarea
                name="description-input"
                id="description-input"
                data-testid="description-input"
              />
            </label>
          </div>

          <div>
            <label htmlFor="attr1-input">
              Primeiro Atributo:
              <input type="number" data-testid="attr1-input" />
            </label>
          </div>

          <div>
            <label htmlFor="attr2-input">
              Segundo Atributo:
              <input type="number" data-testid="attr2-input" />
            </label>
          </div>

          <div>
            <label htmlFor="attr3-input">
              Terceiro Atributo:
              <input type="number" data-testid="attr3-input" />
            </label>
          </div>

          <div>
            <label htmlFor="image-input">
              Imagem da carta:
              <input type="text" data-testid="image-input" />
            </label>
          </div>

          <label htmlFor="rare-input">
            Raridade da carta:
            <select name="rare-input" id="rare-input" data-testid="rare-input">
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>

          <div>
            <label htmlFor="trunfo-input">
              <input type="checkbox" data-testid="trunfo-input" />
              Super Trunfo
            </label>
          </div>

          <button data-testid="save-button" type="submit">
            Salvar
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
