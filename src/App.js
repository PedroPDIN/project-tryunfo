import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import CardList from './components/CardList';

class App extends React.Component {
  constructor() {
    super();

    this.onInputChange = this.onInputChange.bind(this);
    this.buttonDisabled = this.buttonDisabled.bind(this);
    this.atttrDisabled = this.atttrDisabled.bind(this);
    this.saveCard = this.saveCard.bind(this);
    this.newCard = this.newCard.bind(this);

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr3: '',
      cardAttr2: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      isDisabled: true,
      cardSave: [],
      hasTrunfo: false,
    };
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({ [name]: value }, this.buttonDisabled, this.saveCard);
  }

  newCard(valueCard) {
    this.setState((prevState) => ({
      cardSave: [...prevState.cardSave, valueCard],
    }));
  }

  buttonDisabled() {
    const { cardName, cardDescription, cardImage, cardRare } = this.state;
    if (
      cardName.length !== 0
      && cardDescription !== ''
      && cardImage !== ''
      && cardRare !== ''
      && this.atttrDisabled()) {
      this.setState({ isDisabled: false });
    } else {
      this.setState({ isDisabled: true });
    }
  }

  atttrDisabled() {
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;

    const valueAttr1 = Number(cardAttr1);
    const valueAttr2 = Number(cardAttr2);
    const valueAttr3 = Number(cardAttr3);
    const attrsAll = valueAttr1 + valueAttr2 + valueAttr3;
    const limitsAttrs = 210;
    const limit = 90;

    if (attrsAll > limitsAttrs) return false;
    if (valueAttr1 > limit || valueAttr2 > limit || valueAttr3 > limit) return false;
    if (valueAttr1 < 0 || valueAttr2 < 0 || valueAttr3 < 0) return false;
    return true;
  }

  saveCard(event) {
    event.preventDefault();
    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
    });

    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.state;

    this.newCard({
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    });

    this.setState({ hasTrunfo: cardTrunfo });
  }

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
      isDisabled,
      hasTrunfo,
      cardSave,
    } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          onInputChange={ this.onInputChange }
          isSaveButtonDisabled={ isDisabled }
          onSaveButtonClick={ this.saveCard }
          hasTrunfo={ hasTrunfo }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
        <CardList cardSave={ cardSave } />
      </div>
    );
  }
}

export default App;
