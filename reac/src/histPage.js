import React from 'react';
import './histPage.css';
import { render } from 'react-dom';



class hist extends React.Component{
  constructor(props){
    super(props);
    this.state = {items: []};
  }
  componentDidMount(){
    fetch("http://localhost:5000/api/test/info")
      .then(res=>res.json())
      .then(data=>{
        this.setState({
          items: data
        })
      })
      // .then(res=>res.text())
      // .then(res=>this.setState({apiResponse: res}));
  }

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

      <div className="labels">
        <label className="clientID">{this.state.items.map(item=><p>{item.clientID}</p>)}</label>
        <label className="date">{this.state.items.map(item=><p>{item.date}</p>)}</label>
        <label className="finalPrice">{this.state.items.map(item=><p>{item.finalPrice}</p>)}</label>
        <label className="quoteID">{this.state.items.map(item=><p>{item.quoteID}</p>)}</label>
      </div>
    
  </body>
    );
  }
}


export default hist;
