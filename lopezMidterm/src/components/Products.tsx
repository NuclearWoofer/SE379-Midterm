import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import './Products.css';

interface Product {
  id: number;
  title: string;
  image: string;
}

const Products: React.FC = () => {
  const { data: products, loading, error } = useFetch<Product[]>('/products');
  const [visibleProducts, setVisibleProducts] = useState<number>(8);

  const handleShowMore = () => {
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 8);
  };

  const handleShowLess = () => {
    setVisibleProducts((prevVisibleProducts) =>
      prevVisibleProducts > 8 ? prevVisibleProducts - 8 : 8
    );
  };

  return (
    <>
      <h1>Products</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <div>
          <ul className="products-grid">
            {products?.slice(0, visibleProducts).map((product) => (
              <li key={product.id}>
                <Link to={`/products/${product.id}`}>
                  <img src={product.image} alt={product.title} />
                  <span>{product.title}</span>
                </Link>
              </li>
            ))}
          </ul>
          {visibleProducts > 8 && (
            <button onClick={handleShowLess}>Show Less</button>
          )}
          {visibleProducts < (products?.length || 0) && (
            <button onClick={handleShowMore}>Show More</button>
          )}
        </div>
      )}
    </>
  );
};

export default Products;
