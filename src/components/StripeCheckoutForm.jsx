import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

export default function StripeCheckoutForm() {
    const stripe = useStripe();
    const elements = useElements();
    const [cardholderName, setCardholderName] = useState('');
    const [paymentError, setPaymentError] = useState(null);
    const [paymentSuccess, setPaymentSuccess] = useState(null);
    const [loading, setLoading] = useState(false); // Loading state

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const cardElement = elements.getElement(CardElement);
        setLoading(true); // Set loading to true

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
            billing_details: {
                name: cardholderName, // Cardholder name
            },
        });

        setLoading(false); // Set loading to false after processing

        if (error) {
            setPaymentError(error.message);
            setPaymentSuccess(null);
        } else {
            // Call your server to create a PaymentIntent or Subscription
            const response = await fetch('http://localhost:8080/create-subscription', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    paymentMethodId: paymentMethod.id,
                    cardholderName: cardholderName, // Send the cardholder name
                }),
            });
            

            const data = await response.json();

            if (data.success) {
                setPaymentSuccess('Payment successful! Your subscription has started.');
                setPaymentError(null);
                console.log('[Subscription]', data.subscription);
            } else {
                setPaymentError(data.error);
                setPaymentSuccess(null);
            }
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-transparent">
            <input
                type="text"
                placeholder="Name on Card"
                value={cardholderName}
                onChange={(e) => setCardholderName(e.target.value)}
                className="p-2 rounded bg-transparent outline-none border-none text-white"
                required
            />
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#FFFFFF',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                            backgroundColor: '#242424',
                            border: 'none',
                        },
                        invalid: {
                            color: '#fa755a',
                        },
                    },
                }}
            />
            <button
                type="submit"
                disabled={!stripe || loading}
                className={`bg-[#369033] text-white rounded-md py-2 px-4 mt-2 ${loading ? 'opacity-50' : ''}`}>
                {loading ? 'Processing...' : 'Pay $29.99'}
            </button>

            {paymentError && <div className='text-red bg-transparent text-center text-sm'>{paymentError}</div>}
            {paymentSuccess && <div className='text-[#369033] bg-transparent text-center text-sm'>{paymentSuccess}</div>}
        </form>
    );
}
