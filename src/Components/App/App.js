import React from 'react';
import './App.css';
import InputCurrency from '../InputCurrency/InputCurrency';
import DisplayResult from '../DisplayResult/DisplayResult';
import Api from '../../util/Api';
import Suggestion from '../../util/Suggestion';
import SelectInput from '../SelectInput/SelectInput';

class App extends React.Component {
  constructor(props){
		super(props);
    this.state = {
      DisplayResult: '',
      options: ''
    }
    this.convert = this.convert.bind(this);
    this.suggest = this.suggest.bind(this);
    this.currencyChange = this.currencyChange.bind(this);
    this.numChange = this.numChange.bind(this);
    this.currencySelect = this.currencySelect.bind(this);
  }

  convert(toCurrency, amount){
    Api.convertCurrency('USD', toCurrency, amount).then(result => {
      this.setState({DisplayResult: result});
    }).catch(err => {
      console.log(err);
      this.setState({DisplayResult: 'Error'})
    })
  }

  suggest(input){
    this.setState({options: Suggestion.showSuggestion(input)});
    console.log(this.state.options);
  }

  currencyChange(input){
    this.setState({currency: input});
    console.log(input);
  }

  numChange(input){
    this.setState({num: input});
  }

  currencySelect(input){
    this.setState({currency: input});
    console.log(input + 'selected!');
  }
  

  render() {
  return (
    <div className="App">
      <h1>Convert your USD</h1>
      <InputCurrency 
      onConvert = {this.convert}
      onSuggest = {this.suggest}
      onCurrencyChange = {this.currencyChange}
      onNumChange = {this.numChange}
      currency = {this.state.currency}
      num = {this.state.num}
      />
      <SelectInput
      suggestedOptions = {this.state.options}
      onCurrencySelect = {this.currencySelect}
      onConvert = {this.convert}
      currency = {this.state.currency}
      num = {this.state.num}
      />
      <DisplayResult 
      convertedResult = {this.state.DisplayResult}
      />
    </div>
  );
  }
}

export default App;
