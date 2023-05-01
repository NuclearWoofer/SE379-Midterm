//import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '/components/Home';
import Products from '/components/Products';
import ProductDetails from '/components/ProductDetails';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/:id" component={ProductDetails} />
      </Switch>
    </Router>
  );
}

export default App;


