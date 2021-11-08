import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CardList extends Component {
  render() {
    const { cardSave } = this.props;

    return (
      <div>
        <ul>
          {cardSave.map((element) => (
            <li key={ cardSave }>
              <h1>{element.cardName}</h1>
              <img src={ element.cardImage } alt={ element.carName } />
              <p>{ element.cardDescription }</p>
              <p>{ element.cardAttr1 }</p>
              <p>{ element.cardAttr2 }</p>
              <p>{ element.cardAttr3 }</p>
              <p>{ element.cardRare }</p>
              <p>{ element.cardTrunfo }</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

CardList.propTypes = {
  cardSave: PropTypes.arrayOf(PropTypes.shape({
    cardName: PropTypes.string,
    cardImage: PropTypes.string,
    cardDescription: PropTypes,
    cardAttr1: PropTypes.number,
    cardAttr2: PropTypes.number,
    cardAttr3: PropTypes.number,
    cardRare: PropTypes.string,
    cardTrunfo: PropTypes.bool,
  })).isRequired,
};

export default CardList;
