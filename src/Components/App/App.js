import React from 'react';
import logo from '../../logo.svg';
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
      Options: ''
    }
    this.convert = this.convert.bind(this);
    this.suggest = this.suggest.bind(this);
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
    this.setState({Options: Suggestion.showSuggestion(input)});
    console.log(this.state.Options);
  }

  handleCurrencyChange(input){
    if(isNaN(input)){
    input = input.toUpperCase();
    }else{
        input.value = '';
    }
  this.setState({currency : input});
  }

  render() {
  return (
    <div className="App">
      <h1>Convert your USD</h1>
      <InputCurrency 
      onConvert = {this.convert}
      onSuggest = {this.suggest}
      />
      <SelectInput
      suggestedOptions = {this.state.Options}
      />
      <DisplayResult 
      convertedResult = {this.state.DisplayResult}
      />
    </div>
  );
  }
}

export default App;
