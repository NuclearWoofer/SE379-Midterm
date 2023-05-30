import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Home from './components/Home';
import Products from './components/Products';
import ProductDetails from './components/ProductDetails';
import Navigation from './components/Navigation';
import { ThemeProvider } from './context/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import Checkout from './components/Checkout';
import './App.css';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Router>
          <div>
            <Navigation />
            <ThemeToggle />
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
