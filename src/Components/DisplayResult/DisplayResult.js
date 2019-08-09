import React from 'react';
import './DisplayResult.css';

class DisplayResult extends React.Component {
    render() {
      return (
        <div className="DisplayResult">
          <div className="result">
            <h2>{this.props.convertedResult}</h2>
          </div>
        </div>
      )
    }
  }

  export default DisplayResult;