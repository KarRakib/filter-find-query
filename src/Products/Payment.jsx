
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useLocation } from "react-router-dom";
import AddProducts from "./AddOrder";
const stripePromise = loadStripe('pk_test_51M63ypKYn4DrBUBdywnI0qMyumrWfngLfJGbfbdvr3i06iUVneSrVwGEmSbiKimzfhgGfR3eLsP9Q2zsL04maa9D00CR7bDdyA');

export default function StripeCheckout() {
    const location = useLocation()
    const {price} = location.state
      
  return (
    <div>
      
        <Elements  stripe={stripePromise}>
          <AddProducts price={price} />
        </Elements>
    
    </div>
  );
}