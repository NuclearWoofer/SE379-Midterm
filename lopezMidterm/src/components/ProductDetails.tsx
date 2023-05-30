import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { useDispatch } from 'react-redux';
import { addToCart } from '../actions/cartActions';
import './ProductDetails.css';

interface Product {
  id: number;
  title: string;
  image: string;
  description: string;
}

interface Error {
  message: string;
}

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data: product, loading, error } = useFetch<Product>(`/products/${id}`);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart(product));
      window.alert(`${product.title} added to cart`);
    }
  };

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : product ? (
        <>
          <h1 className="product-title">{product.title}</h1>
          <img src={product.image} alt={product.title} className="product-image" />
          <p className="product-description">{product.description}</p>
          <button onClick={handleAddToCart}>Add to Cart</button>
        </>
      ) : (
        <p>No product found</p>
      )}
    </>
  );
};

export default ProductDetails;
