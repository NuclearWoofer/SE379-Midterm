//import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../components/Home.jsx';
import Products from '../components/Products.jsx';
import ProductDetails from '../components/ProductDetails.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={Home} />
        <Route exact path='/Products' element={Products} />
        <Route exact path='/Products/:id' element={ProductDetails} />
      </Routes>
    </Router>
  );
}

export default App;


