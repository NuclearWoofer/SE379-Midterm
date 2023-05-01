//import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '/components/Home';
import Products from '/components/Products';
import ProductDetails from '/components/ProductDetails';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/Home' component={Home} />
        <Route exact path="/Products" component={Products} />
        <Route exact path="/Products/:id" component={ProductDetails} />
      </Switch>
    </Router>
  );
}

export default App;


