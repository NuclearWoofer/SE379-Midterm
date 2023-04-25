import { Link } from 'react-router-dom';
import useProducts from './useProducts';

function Products() {
  const { products } = useProducts();

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>
              <img src={product.thumbnail} alt={product.title} />
              <h2>{product.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;