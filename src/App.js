import React, { Fragment } from "react";
import "./App.css";

import Map from './components/map/Map';
import Header from './components/header/Header';
import About from './pages/About';

import {BrowserRouter, Route, Switch} from 'react-router-dom'


const App =()=> {
    
    return (
      <Fragment>
      <BrowserRouter>
      <Header />
      <Switch>
      <Route path='/' exact component={Map} />
      <Route path='/about' component={About} />
      </Switch>
      </BrowserRouter>
      </Fragment>
    );
  }

export default App;
