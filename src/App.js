import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import VatForm from "./components/VatForm";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <VatForm />
        <Footer />
      </div>
    );
  }
}

export default App;
