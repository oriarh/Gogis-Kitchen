import React, { useEffect } from 'react';
import Navigation from '../components/Navigation'; // Import your Navigation component
import '../styles/checkout.css'
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import Cart from '../components/Cart'

const Checkout = () => {
    const { state, dispatch } = useCart();
    const { userData } = useAuth();
    console.log("This is the state.items inside checkout.js",state.items);

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

    console.log("This is the userdata in checkout:", userData)

    return (
        <>
        <Navigation /> 
        <div className="checkout-container">
            <h2 className='main-heading-checkout'>Checkout</h2>
            <h3 className='main-heading'>Order Summary</h3>
            <div className="checkout-section">
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
                    {/* <span className="cart-item">Total Items: {state.totalItems}</span>
                    <span className="cart-item">Total Amount: ${state.totalAmount}</span> */}
                <div className="checkout-cart-summary">
                    <span className="cart-item">Total Items:</span>
                    <span className="cart-item">{state.totalItems}</span>
                </div>
                <div className="checkout-cart-summary">
                    <span className="cart-item">Total Amount:</span>
                    <span className="cart-item">${state.totalAmount}</span>
                </div>
            </div>
            <div className="checkout-section">
                <h3 className='main-heading'>Customer Information</h3>
                {/* Form fields for customer information */}
                <form>
                    <label htmlFor="name">Name:</label>
                    <input className='label-checkout' type="text" id="name" name="name" value={userData.name} required />

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={userData.email} required />

                    <label htmlFor="phone">Phone:</label>
                    <input type="tel" id="phone" name="phone" value={userData.phone} required />
                </form>
            </div>
            <div className="checkout-section">
                <h3 className='main-heading'>Payment Details</h3>
                {/* Payment details form */}
                <form>
                    <label htmlFor="card-number">Card Number:</label>
                    <input type="text" id="card-number" name="card-number" required />

                    <label htmlFor="expiry-date">Expiry Date:</label>
                    <input type="text" id="expiry-date" name="expiry-date" required />

                    <label htmlFor="cvv">CVV:</label>
                    <input type="text" id="cvv" name="cvv" required />
                </form>
            </div>
            <div className="checkout-section">
                <button className="confirm-button">Confirm Order</button>
            </div>
        </div>
        </>
    );
};

export default Checkout;