import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useLocation } from 'react-router-dom';
import CheckoutForm from './CheckOutForm';

const stripePromise = loadStripe('pk_test_51M63ypKYn4DrBUBdywnI0qMyumrWfngLfJGbfbdvr3i06iUVneSrVwGEmSbiKimzfhgGfR3eLsP9Q2zsL04maa9D00CR7bDdyA');
const Payment = () => { 
    const location = useLocation()
    const {price} = location.state
    const client ="Kar Rakib"
console.log(stripePromise);
    return (
        <div>
            <h3 className="text-2xl"> Payment Page</h3>
            <p className="text-xl"> {`Mr ${client} Cost $${price}  `} </p>
            <div className='w-96 mt-12'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm/>
                    booking={booking}
                   
                </Elements>
            </div>
        </div>
    );
};

export default Payment;