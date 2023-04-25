import { useState, useEffect } from 'react';
//unsure if this is even needed.

function useProductDetail() {
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
  
  export default useProductDetail;
  