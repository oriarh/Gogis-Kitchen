import React, { useEffect, useState} from 'react';
import Navigation from '../components/Navigation'; // Import your Navigation component
import '../styles/checkout.css'
import { useCart } from '../context/CartContext';
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';

const PlaceOrder = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [message, setMessage] = useState(null);
    const [isProcessing, setIsProcessing] = useState(false);
    const { state, saveOrderInDatabase } = useCart();

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

        saveOrderInDatabase(state)

        if (error) {
             setMessage(error.message);
        }

        setIsProcessing(false);
    }

    return (
        <>
            {/* <Navigation />  */}
            <div className="checkout-container">
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

export default PlaceOrder;