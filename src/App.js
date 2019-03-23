import React, { Component } from 'react';
import './App.css';
import { 
  BrowserRouter,
  Route } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav"
import VatForm from "./components/VatForm";
import About from "./components/About";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Nav />
          <Route exact path="/" component={ VatForm }/>
          <Route path="/about" component={ About }/>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
