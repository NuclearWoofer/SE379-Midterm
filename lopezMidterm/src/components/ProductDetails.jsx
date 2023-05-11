import { useEffect, useState } from 'react';
import { useParams} from 'react-router-dom';
import useFetch from '../hooks/useFetch';

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { loading, error, fetchData } = useFetch();

  useEffect(() => {
    fetchData(`/products/${id}`).then((data) => {
      setProduct(data);
    });
  }, [fetchData, id]);

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : product ? (
        <>
          <h1>{product.title}</h1>
          <img src={product.image} alt={product.title} />
          <p>{product.description}</p>
        </>
      ) : (
        <p>No product found</p>
      )}
    </>
  );
}

export default ProductDetails;
