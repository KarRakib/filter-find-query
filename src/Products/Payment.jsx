import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckOutForm";
import { useLocation } from "react-router-dom";
import { CheckoutForm2 } from "./CheckForm2";
import PaymentForm from "./CheckForm";

const stripePromise = loadStripe('pk_test_51M63ypKYn4DrBUBdywnI0qMyumrWfngLfJGbfbdvr3i06iUVneSrVwGEmSbiKimzfhgGfR3eLsP9Q2zsL04maa9D00CR7bDdyA');

export default function StripeCheckout() {
    const location = useLocation()
    const {price} = location.state
    const makePayment = async()=>{
      const stripe = await loadStripe("pk_test_51M63ypKYn4DrBUBdywnI0qMyumrWfngLfJGbfbdvr3i06iUVneSrVwGEmSbiKimzfhgGfR3eLsP9Q2zsL04maa9D00CR7bDdyA");

      const body = {
          products:carts
      }
      const headers = {
          "Content-Type":"application/json"
      }
      const response = await fetch("http://localhost:9000/api/create-checkout-session",{
          method:"POST",
          headers:headers,
          body:JSON.stringify(body)
      });

      const session = await response.json();

      const result = stripe.redirectToCheckout({
          sessionId:session.id
      });
      
      if(result.error){
          console.log(result.error);
      }
  }
  
  return (
    <div>
      
        <Elements  stripe={stripePromise}>
          <PaymentForm price={price} />
        </Elements>
    
    </div>
  );
}