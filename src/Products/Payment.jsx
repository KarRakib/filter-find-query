import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckOutForm";
import { useLocation } from "react-router-dom";

const stripePromise = loadStripe('pk_test_51M63ypKYn4DrBUBdywnI0qMyumrWfngLfJGbfbdvr3i06iUVneSrVwGEmSbiKimzfhgGfR3eLsP9Q2zsL04maa9D00CR7bDdyA');

export default function StripeCheckout() {
    const location = useLocation()
    const {price} = location.state
  
  return (
    <div>
      
        <Elements  stripe={stripePromise}>
          <CheckoutForm price={price} />
        </Elements>
    
    </div>
  );
}