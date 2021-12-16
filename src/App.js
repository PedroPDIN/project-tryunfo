import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import CardList from './components/CardList';
import InputFilter from './components/InputFilter';

class App extends React.Component {
  constructor() {
    super();

    this.onInputChange = this.onInputChange.bind(this);
    this.buttonDisabled = this.buttonDisabled.bind(this);
    this.atttrDisabled = this.atttrDisabled.bind(this);
    this.saveCard = this.saveCard.bind(this);
    this.newCard = this.newCard.bind(this);
    this.removeCard = this.removeCard.bind(this);
    this.filterElement = this.filterElement.bind(this);
    this.onInputFilter = this.onInputFilter.bind(this);
    /* this.disabledInput = this.disabledInput.bind(this);
 */
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr3: '0',
      cardAttr2: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isDisabled: true,
      cardSave: [],
      hasTrunfo: false,
      filter: {
        nameFilter: '',
        rareFilter: 'todas',
        trunfoFilter: false,
      },
    };
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({ [name]: value }, this.buttonDisabled, this.saveCard);
  }

  onInputFilter({ target }) {
    const { filter } = this.state;
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      filter: {
        ...filter,
        [name]: value,
      },
    }, this.buttonDisabled, this.saveCard);
  }

  newCard(valueCard) {
    this.setState((prevState) => ({
      cardSave: [...prevState.cardSave, valueCard],
    }));
  }

  removeCard(cardName) {
    const { cardSave } = this.state;
    this.setState(() => ({
      cardSave: cardSave.filter((element) => element.cardName !== cardName),
      hasTrunfo: false,
      cardTrunfo: false,
    }));
  }

  filterElement() {
    const { cardSave, filter: {
      nameFilter, rareFilter, trunfoFilter,
    } } = this.state;
    return cardSave
      .filter((value) => (nameFilter === ''
        ? cardSave : value.cardName.includes(nameFilter)))
      .filter((value) => (rareFilter === 'todas'
        ? cardSave : value.cardRare === rareFilter))
      .filter((value) => (trunfoFilter === value.cardTrunfo
        ? cardSave : !trunfoFilter));
  }

  /* disabledInput() {
    this.setState((prevState) => ({
      filter: { disabled: prevState.trunfoFilter },
    }));
  }
 */

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

    this.setState((prevState) => ({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: prevState.cardTrunfo === false
        ? prevState.hasTrunfo : prevState.cardTrunfo,
    }));
  }

  render() {
    const filterElement = this.filterElement();
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
      filter: { nameFilter, rareFilter, trunfoFilter },
    } = this.state;

    return (
      <div>
        <h1 className="title">Tryunfo</h1>
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

        <InputFilter
          inputFilter={ nameFilter }
          rareFilter={ rareFilter }
          trunfoFilter={ trunfoFilter }
          onInputFilter={ this.onInputFilter }
        />

        <CardList filterElement={ filterElement } removeCard={ this.removeCard } />

      </div>
    );
  }
}

export default App;
