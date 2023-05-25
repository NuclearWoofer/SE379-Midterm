import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import './Products.css';

function Products() {
  const { data: products, loading, error } = useFetch('/products');

  return (
    <>
      <h1>Products</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <ul className="products-grid">
          {products.slice(0, 6).map((product) => (
            <li key={product.id}>
              <Link to={`/products/${product.id}`}>
                <img src={product.image} alt={product.title} />
                <span>{product.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default Products;
