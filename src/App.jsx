import React from 'react';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import RoutesConfig from './Route';
import Wishlist from './components/Wishlist/Wishlist';
import Signin from './components/Sign/Signin';

function App() {
  return (
    <Router>
      <Header />
      <Routes>{RoutesConfig}</Routes>
      <Footer />
      <Wishlist/>
    </Router>
  );
}

export default App;
