import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation'; // Import your Navigation component
import '../styles/checkout.css'
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const Checkout = () => {
    const { state, dispatch, saveOrderInDatabase, syncCartWithServer } = useCart();
    const { userData } = useAuth();
    const navigate = useNavigate();

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
        e.preventDefault()
        syncCartWithServer(state.items);
        return navigate("/payment");
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
                    <button className="confirm-button" onClick={handleSubmit}>PROCEED TO PAYMENT DETAILS</button>
                </div>
            </div>
        </>
    );
};

export default Checkout;