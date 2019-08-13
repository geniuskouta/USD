import React from 'react';
import './InputCurrency.css';

class InputCurrency extends React.Component{
	constructor(props){
		super(props);
		this.convert = this.convert.bind(this);
        this.handleCurrencyChange = this.handleCurrencyChange.bind(this);
        this.handleNumChange = this.handleNumChange.bind(this);
		this.handleKeyPress = this.handleKeyPress.bind(this);
	}

	convert() {
		if(this.props.num && this.props.currency){
			this.props.onConvert(this.props.currency, this.props.num);
		}
	}

	suggest() {
		if(this.props.currency){
			this.props.onSuggest(this.props.currency);
		}
	}

	handleCurrencyChange(e){
		if(isNaN(e.target.value)){
			e.target.value = e.target.value.toUpperCase();
			this.props.onCurrencyChange(e.target.value);
		}else{
			e.target.value = '';
		}	
	}

    handleNumChange(e){
        if(isNaN(e.target.value)){
            e.target.value = '';
        }
        this.props.onNumChange(e.target.value);
    }

	//Enter key triggers the search
	handleKeyPress(e){
		if(e.key === 'Enter'){
			this.convert();
		}
		if(typeof e.key == 'string'){
			this.suggest();
		}
	}

	render(){
		
		return(
		<div className="InputCurrency">
		  <input
		  className="numberInput"
		  placeholder="100"
		  onKeyUp={this.handleKeyPress}
		  onChange={this.handleNumChange} />
		  <input
		  className="currencyInput"
		  placeholder="JPY"
		  onKeyUp={this.handleKeyPress}
		  onChange={this.handleCurrencyChange}
		  />
		</div>
			);
}

}
export default InputCurrency;