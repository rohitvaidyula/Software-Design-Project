import React from 'react';
import './histPage.css';
import { render } from 'react-dom';
import {Link, BrowserRouter, Route, Router} from 'react-router-dom';
import Form from '../Profile page/Profile page'



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
      <Link to='/ProfilePage'><button className="profilePage">Profile</button></Link>
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
        <label className="username">{this.state.items.map(item=><p>{item.username}</p>)}</label>
        <label className="date">{this.state.items.map(item=><p>{item.date}</p>)}</label>
        <label className="finalPrice">{this.state.items.map(item=><p>{item.finalPrice}</p>)}</label>
        <label className="quoteID">{this.state.items.map(item=><p>{item.quoteID}</p>)}</label>
      </div>
    
  </body>
    );
  }
}
//using username currently may want clientID
//<label className="clientID">{this.state.items.map(item=><p>{item.clientID}</p>)}</label>


export default hist;
