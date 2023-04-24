import {react} from 'react';
import { useState } from 'react';
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route path="/products/:id" component={ProductDetail} />
      </Switch>
    </Router>
  );
}
export default App
