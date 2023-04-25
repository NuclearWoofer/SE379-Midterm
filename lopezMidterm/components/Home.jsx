import { Link } from 'react-router-dom';

function Home() {
    return (
      <div>
        <h1>Welcome to our store!</h1>
        <p>Check out our latest products:</p>
        {/* Display some featured products */}
        <ul>
          <li>
            <Link to="/products/1">
              <img src="/path/to/product1.jpg" alt="Product 1" />
              <h2>Product 1</h2>
            </Link>
          </li>
          <li>
            <Link to="/products/2">
              <img src="/path/to/product2.jpg" alt="Product 2" />
              <h2>Product 2</h2>
            </Link>
          </li>
          <li>
            <Link to="/products/3">
              <img src="/path/to/product3.jpg" alt="Product 3" />
              <h2>Product 3</h2>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
  
export default Home;