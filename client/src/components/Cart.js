import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart,toggleCartVisibility } from '../context/CartContext';
import '../styles/cart.css'; // Make sure to create a corresponding CSS file

const Cart = () => {
  const { state, dispatch, syncCartWithServer, toggleCartVisibility } = useCart();
  console.log("State in Cart.js is ", state);
  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log('handleSubmit is working')
    syncCartWithServer(state.items);
    toggleCartVisibility();
    return navigate("/checkout");
  }


  // Function to handle removing items from the cart
  const handleRemoveFromCart = (item) => {
    dispatch({
      type: 'REMOVE_ITEM',
      payload: item,
    });
  };

  // Function to handle increasing the quantity of an item in the cart
  const handleIncreaseQuantity = (item) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: item,
    });
  };

  return (
    <div className="cart-container">
      <h3 className="cart-header">Items in your cart</h3>
      {state.items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {state.items.map((item) => (
            <div key={item.id} className="cart-item">
              <span>{item.name} - {item.size}</span>
              <div className="quantity-controls">
                <button onClick={() => handleRemoveFromCart(item)}>-</button>
                  <span>{item.quantity}</span>
                <button onClick={() => handleIncreaseQuantity(item)}>+</button>
              </div>
            </div>
          ))}
          <div className="cart-summary">
            <span>Total Items: {state.totalItems}</span>
            <span>Total Amount: ${state.totalAmount}</span>
          </div>
          <button className="checkout-button" onClick={handleSubmit} >Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
};

export default Cart;