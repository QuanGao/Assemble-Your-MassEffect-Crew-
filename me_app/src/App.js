import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";
// import members from "./members.json";

console.log("Footer"+Footer)

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Header />
        <Section />
        <Footer />
      </div>
    );
  }
}

export default App;
