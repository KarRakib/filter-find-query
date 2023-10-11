import React, { useEffect, useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import Confetti from 'react-confetti';

const CheckOutForm = ({ price }) => {
  const [cardError, setCardError] = useState(" ");
  const [clientSecret, setClientSecret] = useState("");
  const [paymentSuccessful, setPaymentSuccessful] = useState(false);

  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("http://localhost:9000/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [price]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      setCardError(error.message);
    } else {
      setCardError('');

      // Process payment and setPaymentSuccessful to true on success
      const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: card,
            billing_details: {
              name: 'Kar Rakib',
            },
          },
        }
      );

      if (confirmError) {
        setCardError(confirmError.message);
      } else {
        setPaymentSuccessful(true);
      }
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button className='p-1 rounded-md bg-rose-400' type="submit" disabled={!stripe || !clientSecret}>
          Pay
        </button>
      </form>

      {paymentSuccessful && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          tweenDuration={500}
        />
      )}

      <p>{cardError}</p>
    </>
  );
}

export default CheckOutForm;
