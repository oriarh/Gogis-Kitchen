import React, { useEffect, useState} from 'react';
import Navigation from '../components/Navigation'; // Import your Navigation component
import '../styles/checkout.css'
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';

const Checkout = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [message, setMessage] = useState(null);
    const [isProcessing, setIsProcessing] = useState(false);
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

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!stripe || !elements) {
            return;
        }

        setIsProcessing(true);

        const {error} = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: `${window.location.origin}/completion`
            }
        })

        console.log("This is window.location.origin:",window.location.origin)

        if (error) {
             setMessage(error.message);
        }

        setIsProcessing(false);
    }

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
                <form>
                    <label htmlFor="name">Name:</label>
                    <input className='label-checkout' type="text" id="name" name="name" defaultValue={userData.name} required />

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" defaultValue={userData.email} required />

                    <label htmlFor="phone">Phone:</label>
                    <input type="tel" id="phone" name="phone" defaultValue={userData.phone} required />
                </form>
            </div>
            <div className="checkout-section">
                <h3 className='main-heading'>Payment Details</h3>
                <form onSubmit={handleSubmit}>
                    <PaymentElement id="payment-element" />
                <button className="confirm-button" disabled={isProcessing}>
                    {isProcessing ? "PROCESSING PAYMENT" : "PAY NOW"}
                </button>
                {message && <div id="payment-message">{message}</div>}
                </form>
            </div>
        </div>
        </>
    );
};

export default Checkout;