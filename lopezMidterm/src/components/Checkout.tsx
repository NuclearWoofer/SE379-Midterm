import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { removeFromCart, clearCart } from '../actions/cartActions';
import axios from 'axios';

interface Product {
  id: number;
  title: string;
  price: number;
}

interface CartItem extends Product {
  quantity: number;
}

const Checkout: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const response = await axios.get('/products');
        const products: Product[] = response.data;
        let total = 0;
        cartItems.forEach((item) => {
          const product = products.find((p) => p.id === item.id);
          if (product) {
            total += product.price * item.quantity;
          }
        });
        setTotalPrice(total);
      } catch (error) {
        console.error('Error fetching prices:', error);
      }
    };

    fetchPrices();
  }, [cartItems]);

  useEffect(() => {
    const updatedTotal = cartItems.reduce(
      (accumulator, item) => accumulator + item.price * item.quantity,
      0
    );
    setTotalPrice(updatedTotal);
  }, [cartItems]);

  const handleRemoveItem = (itemId: number): void => {
    dispatch(removeFromCart(itemId));
  };

  const handleClearCart = (): void => {
    dispatch(clearCart());
  };


  const handleCheckout = (): void => {
    dispatch(clearCart());
    alert('Purchase Completed');
  };

  return (
    <div>
      <h1>Checkout</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <span>{item.title}</span>
                <div>
                  <span>Quantity: {item.quantity}</span>
                </div>
                <div>
                <span>Price: ${(item.price * item.quantity).toFixed(2)}</span>

                </div>
                <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <p>Total: ${totalPrice.toFixed(2)}</p>
          <button onClick={handleClearCart}>Clear Cart</button>
          <button onClick={handleCheckout}>Checkout</button>
        </>
      )}
    </div>
  );
};

export default Checkout;

