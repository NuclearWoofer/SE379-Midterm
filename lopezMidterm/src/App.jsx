import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';
import ProductDetails from './components/ProductDetails';
import Navigation from './components/Navigation';
import LightSwitch from './components/LightSwitch';

function App() {
  return (
    <Router>
      <div>
        <LightSwitch />
        <Navigation />
      </div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
}

export default App;

