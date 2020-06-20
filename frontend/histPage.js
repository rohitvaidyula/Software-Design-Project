import React from 'react';
import './histPage.css';

class hist extends React.Component{
  render(){
    return(
      <body>
      <header>
      <div className="pageButtons">
        <button className="profilePage">
          Profile
        </button>
        <button className="fuelQuotePage">
          Fuel Quote
        </button>
      </div>
    </header>

    <div className="labels">
      <label className="clientID">
        Client ID
      </label>
      <label className="date">
        Date
      </label>
      <label className="finalPrice">
        Final Price
      </label>
      <label className="quoteID">
        Quote ID
      </label>
    </div>
    
  </body>
    );
  }
}


export default hist;