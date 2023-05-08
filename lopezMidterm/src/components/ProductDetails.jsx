import  { useEffect, useState } from 'react';
import { BrowserRouter as useParams, Link} from 'react-router-dom';
import useFetch from './hooks/useFetch';

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { loading, error, fetchData } = useFetch();

  useEffect(() => {
    fetchData(`db.json/${id}`).then((data) => {
      setProduct(data);
    });
  }, [fetchData, id]);

  return (
    <>
      <Link to="./Products">Back to Products</Link>
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
