import React from "react";
import "./App.css";

import Map from './components/map/Map';
import Header from './components/header/Header';


class App extends React.Component {

  render() {
    
    return (
      <>
      <Header />
      <Map />
      </>
    );
  }
}
export default App;
