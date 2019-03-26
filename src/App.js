import React, { Component } from 'react';
import './styles/App.css';
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav"
import AppRoutes from "./routes/AppRoutes";
import Footer from "./components/Footer";


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Nav />
          <AppRoutes />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
