import React from 'react';
import './SelectInput.css';

class SelectInput extends React.Component {
    constructor(props){
        super(props);
        this.select = this.select.bind(this);
    }
    async select(e){
        const buttonValue = await e.target.value;
        this.props.onCurrencySelect(buttonValue);
        this.convert();
    }

    convert() {
		if(this.props.num && this.props.currency){
			this.props.onConvert(this.props.currency, this.props.num);
		}
    }
    
    render() {
        const title = <h3>Suggestions:</h3>;
        let options = this.props.suggestedOptions;
        if(options.length > 0){
            options = options.map(option => {
                return <button value={option} onClick={e => this.select(e, "value")}>
                {option}
                </button>;
            });
        }
        return (
          <div className="SelectInput">
              {options ?  title : ""}
              {options}
          </div>
        )
      }
}

export default SelectInput;