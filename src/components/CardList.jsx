import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../css/CardList.css';

class CardList extends Component {
  render() {
    const { filterElement, removeCard } = this.props;

    return (
      <div>
        <ul className="ul-cardList">
          {filterElement.map((element) => (
            <li key={ element.cardName } className="li-cardList">
              <h1 className="h1-cardList">{element.cardName}</h1>
              <img
                src={ element.cardImage }
                alt={ element.carName }
                className="img-cardList"
              />
              <p className="description-cardList">{element.cardDescription}</p>

              <div className="conteiner-attr-cardList">
                <p>{element.cardAttr1}</p>
                <p>{element.cardAttr2}</p>
                <p>{element.cardAttr3}</p>
              </div>

              <p className="rare-cardList">{element.cardRare}</p>
              <p className="trunfo-cardList">{element.cardTrunfo}</p>

              <button
                data-testid="delete-button"
                type="button"
                onClick={ () => removeCard(element.cardName) }
                className="button-cardList"
              >
                Excluir
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

CardList.propTypes = {
  filterElement: PropTypes.arrayOf(PropTypes.shape({
    cardName: PropTypes.string,
    cardImage: PropTypes.string,
    cardDescription: PropTypes,
    cardAttr1: PropTypes.string,
    cardAttr2: PropTypes.string,
    cardAttr3: PropTypes.string,
    cardRare: PropTypes.string,
    cardTrunfo: PropTypes.bool,
  })).isRequired,
  removeCard: PropTypes.func.isRequired,
};

export default CardList;
