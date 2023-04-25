import { useParams } from 'react-router-dom';
import useProductDetail from './useProductDetail';

function ProductDetail() {
  const { id } = useParams();
  const { product } = useProductDetail(id);

  return (
    <div>
      <button onClick={() => history.goBack()}>Back</button>
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} />
      <p>{product.description}</p>
    </div>
  );
}

export default ProductDetail;
