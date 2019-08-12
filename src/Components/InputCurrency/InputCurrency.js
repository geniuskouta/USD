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
		if(this.state.num && this.state.currency){
			this.props.onConvert(this.state.currency, this.state.num);
		}
	}

	suggest() {
		if(this.state.currency){
			this.props.onSuggest(this.state.currency);
		}
	}

 	handleCurrencyChange(e){
        if(isNaN(e.target.value)){
			e.target.value = e.target.value.toUpperCase();
        }else{
            e.target.value = '';
        }
		this.setState({currency : e.target.value});
	}
	    
    handleNumChange(e){
        if(isNaN( e.target.value)){
            e.target.value = '';
        }
        this.setState({num : e.target.value})
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
		  onSuggest={this.suggest}
		  />
		</div>
			);
}

}
export default InputCurrency;