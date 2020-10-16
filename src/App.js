import React, { Component } from 'react';
import Nav from "./Components/Nav/Nav";
import Practice from "./Components/Practice/Practice";
import Footer from "./Components/Footer/Footer";
// import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

export default class App extends Component {
  render() {
    return (
  //     <Router>
  //     <Route exact path="/" component={ Landing } />
  //     <Route path="/nav" component={ Nav } />
  //   </App>
  // </Router>
      <div className="App">
        <Nav />
        <Practice />
        <Footer />
      </div>
    )
  }
}

