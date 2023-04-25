import { useState, useEffect } from 'react';

function useProducts() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch('/api/products');
        const products = await response.json();
        setProducts(products);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    }

    fetchProducts();
  }, []);

  return { loading, products };
}

export default useProducts;
