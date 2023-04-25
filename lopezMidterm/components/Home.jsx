import { Link } from 'react-router-dom';

function Home() {
    return (
      <div>
        <h1>Michael Lopez || Midterm</h1>
        <p>Here be products: </p>
        <ul>
          <li>
            <Link to="/products/1">
              <img src="path to whatever here" alt="Product 1" />
              <h2>Product 1</h2>
            </Link>
          </li>
          <li>
            <Link to="/products/2">
              <img src="path to whatever here" alt="Product 2" />
              <h2>Product 2</h2>
            </Link>
          </li>
          <li>
            <Link to="/products/3">
              <img src="path to whatever here" alt="Product 3" />
              <h2>Product 3</h2>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
  
export default Home;