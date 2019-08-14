import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import NavBar from './layout/NavBar';
import DairyList from './components/DairyList';
import DrinkLists from './components/DrinkLists';
import FruitsVegList from './components/FruitsVegList';
import ToiletriesList from './components/ToiletriesList';
import {DairyDetails} from './Details/DairyDetails';
import { FruitsVegDetails} from './Details/vegDetails';
import { ToiletDetails} from './Details/ToiletDetails';
import { DrinksDetails} from './Details/DrinksDetails';
import Cart from './Cart/Cart';
import Default from './components/Default';
import SearchPage from './SearchPage';
import Contact from './Contact'

import Modal from './Modal/Modal'
import ModalVeg from './Modal/ModalVeg'
import ModalDrinks from './Modal/ModalDrinks'
import ModalToiletries from './Modal/ModalToiletries'

import SignedInLink from './layout/SignedInLink'
import SignedOutLink from './layout/SignedOutLink'



import Register from './layout/Register';


class App extends Component {
  render() {
    return (
      
      <React.Fragment>
      <SearchPage/>
        <NavBar>
        
        </NavBar>
                        
                  
          <Switch>
            <Route exact path="/" component={Home}/>
            
            {/* <Route path="/fruites-vegetables" component={FruitsVegList}/> */}
            <Route path="/dairies" component={DairyList}/>
            {/* <Route path="/drinks" component={DrinkLists}/>
            <Route path="/toiletries" component={ToiletriesList}/> */}
            <Route path="/details" component={DairyDetails}/>
            {/* <Route path="/detailV" component={FruitsVegDetails}/>
            <Route path="/detailT" component={ToiletDetails}/>
            <Route path="/detailD" component={DrinksDetails}/> */}
            <Route path="/cart" component={Cart}/>
            <Route path="/register" component={Register}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/signedIn" component={SignedInLink}/>
            <Route path="/signedOut" component={SignedOutLink}/>
            <Route path="/navbar" component={NavBar}/>
            {/* <Route path="/login" component={loginRegister}/> */}
            
            <Route component={Default}/>
          </Switch>
          <Modal/>
          {/* <ModalVeg/>
          <ModalDrinks/>
          <ModalToiletries/> */}
      </React.Fragment>
      
    );
  }
}



export default App;
