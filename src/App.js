import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import Nav from "./components/Nav"
import VatForm from "./components/VatForm";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Nav />
        <VatForm />
        <Footer />
      </div>
    );
  }
}

export default App;
