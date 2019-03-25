import React, { Component } from 'react';
import './App.css';
import { 
  BrowserRouter,
  Route,
  Switch,
  Redirect } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav"
import VatForm from "./components/VatForm";
import About from "./components/About";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Nav />
          <Switch>
            <Route exact path="/" component={ VatForm }/>
            <Route path="/about" component={ About }/>
            <Route path="/notfound" component={ NotFound }/>
            <Route render={ () => <Redirect to="/notfound" /> }/>
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
