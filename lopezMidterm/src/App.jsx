import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Products from './Products';

function App() {
  return (
    <div>
      {/* Persistent toolbar or navigation drawer component */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
      </Switch>
    </div>
  );
}

export default App;