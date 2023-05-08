import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useFetch from './hooks/useFetch.js';

function Products() {
  const [products, setProducts] = useState([]);
  const { loading, error, fetchData } = useFetch();

  useEffect(() => {
    fetchData('http://localhost:3000/products').then((data) => {
      setProducts(data);
    });
  }, [fetchData]);

  return (
    <>
      <h1>Products</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <Link to={`/Products/${product.id}`} >
                <img src={product.thumbnail} alt={product.title} />
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
