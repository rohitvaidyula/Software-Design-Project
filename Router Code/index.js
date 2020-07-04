
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
//import pages from saved location
import ProfilePage from './Profile page/Profile page';
import FuelQuoteHistory from './Fuel Quote Hist/histPage';

//buttons can be added as <Link to="FuelQuoteHist"><button><button></Link>

const rootElement = document.getElementById('root');
ReactDOM.render(
  //set path in <Route/>
  <BrowserRouter>
    <Switch>
      <Route exact path="/FuelQuoteHist" component={FuelQuoteHistory}/>
      <Route exact path="/ProfilePage" component={ProfilePage}/>
    </Switch>
  </BrowserRouter>,
  rootElement
);
