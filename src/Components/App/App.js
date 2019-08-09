import React from 'react';
import logo from '../../logo.svg';
import './App.css';
import InputCurrency from '../InputCurrency/InputCurrency';
import DisplayResult from '../DisplayResult/DisplayResult';
import Api from '../../util/Api';

class App extends React.Component {
  constructor(props){
		super(props);
    this.state = {
      DisplayResult: ''
    }
    this.convert = this.convert.bind(this);
  }

  convert(toCurrency, amount){
    Api.convertCurrency('USD', toCurrency, amount).then(result => {
      this.setState({DisplayResult: result});
    }).catch(err => {
      console.log(err);
      this.setState({DisplayResult: 'Error'})
    })
  }

  render() {
  return (
    <div className="App">
      <h1>Convert your USD</h1>
      <InputCurrency 
      onConvert = {this.convert}
      />
      <DisplayResult 
      convertedResult = {this.state.DisplayResult}
      />
    </div>
  );
  }
}

export default App;
