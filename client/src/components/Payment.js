import React, { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js'
import Checkout from '../pages/Checkout'

function Payment(props) {
    const [stripePromise, setStripePromise] = useState(null);
    const [clientSecret, setClientSecret] = useState(null);

    useEffect(async () => {
        try {
            const response = await fetch('http://localhost:4000/api/stripe/config', {
                method: "GET",
                headers: {
                    'Content-Type':'application/json'
                },
                credentials: "include",
            });

            const data = await response.json();
            const { publishableKey } = data;

            console.log("Before setStripePromise: ")
            setStripePromise(loadStripe(publishableKey))
            console.log("After setStripePromise: ")
        } catch (error) {
            console.error('Error in Stripe Config:', error);
        }

    }, [])

    useEffect(async () => {
        try {
            const response = await fetch('http://localhost:4000/api/stripe/create-payment-intent', {
                method: "POST",
                headers: {
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({}),
                credentials: "include",
            });

            const data = await response.json();
            const { clientSecret } = data;

            console.log("Before setClientSecret: ")
            setClientSecret(clientSecret);
            console.log("After setClientSecret: ")
        } catch (error) {
            console.error('Error in Stripe payment intent:', error);
        }

    }, [])


    return (
    <div>
        {stripePromise && clientSecret && (
            <Elements stripe={stripePromise} options={{clientSecret}}>
                <Checkout />
            </Elements>
        )}
    </div>
    )
}

export default Payment
