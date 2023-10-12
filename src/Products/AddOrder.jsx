import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AddContext } from '../Context/ProductsContext';
import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';

const AddProducts = () => {
    const { cartItems, totalQuantity, totalPrice, toggleCartQuantity, removeCart } = useContext(AddContext)
  
    const copunCode = "KAR24587"
    const [code, setCode] = useState('')
    const isDiscount = copunCode === code
    const discountPrice = totalPrice + parseInt(10) * 0.20
   console.log(cartItems);
    const handleChange = (e) => {
        setCode(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(code);
    }

    const makePayment = async () => {
        const stripe = await loadStripe((import.meta.env.VITE_CLIENT_KEY));
                
        const body = {
          products:cartItems,
        };
      
        const headers = {
          "Content-Type": "application/json",
        };
      
        try {
          const response = await fetch("http://localhost:5000/create-checkout-session", {
            method: "POST",
            headers,
            body: JSON.stringify(body),
          });
      
          if (!response.ok) {
            // Handle any error in the response, e.g., network issues or server errors
            throw new Error("Network or server error");
          }
      
          const session = await response.json();
      
          const result = await stripe.redirectToCheckout({
            sessionId: session.id,
          });
      
         
          localStorage.setItem('payment-id', session.id);
      
          if (result.error) {
            console.error(result.error.message);
          }
      
          // Check if the payment was successful (you might need to implement a success check)
          console.log(session.payment_status );
          if (session.payment_status === "paid") {
            const orderResponse = await fetch("http://localhost:5000/order", {
              method: "POST",
              headers,
              body: JSON.stringify({ order: cartItems }),
            });
      
            if (!orderResponse.ok) {
              throw new Error("Failed to send order data to the server");
            }
      
            const orderData = await orderResponse.json();
            console.log(orderData);
          }
        } catch (error) {
          console.error("An error occurred:", error);
        }
      };
      
      
    return (
        <div>
            <body className="bg-gray-100">
                <div className="container md:mx-auto mt-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 shadow-md my-10">
                        <div className="col-span-2  bg-white px-10 py-10">
                            <div className="flex justify-between border-b pb-8">
                                <h1 className="font-semibold text-2xl">Shopping Cart</h1>
                                <h2 className="font-semibold text-2xl"></h2>
                            </div>
                            <div className="flex mt-10 mb-5">
                                <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
                                <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">Quantity</h3>
                                <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">Price</h3>
                                <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">Total</h3>
                            </div>
                            {
                                cartItems.map(cart => (
                                    // eslint-disable-next-line react/jsx-key
                                    <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                                        <div className="flex w-2/5">
                                            <div className="w-20">
                                                <img className="h-24" src={cart?.img} alt="" />
                                            </div>
                                            <div className="flex flex-col justify-between ml-4 flex-grow">
                                                <span className="font-bold text-sm">{cart?.title} </span>
                                                <span className="text-red-500 text-xs">{cart?.company}</span>
                                                <button onClick={() => removeCart(cart)} className="font-semibold hover:text-red-500 text-gray-500 text-xs">Remove</button>
                                            </div>
                                        </div>
                                        <div className="flex justify-center w-1/5">
                                            <button>
                                                <svg onClick={() => toggleCartQuantity(cart._id, 'dec')} className="fill-current text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                                </svg>
                                            </button>

                                            <input className="mx-2 border text-center w-8" type="text" value={cart?.quantity} />

                                            <button> <svg onClick={() => toggleCartQuantity(cart._id, 'inc')} className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                                                <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                            </svg></button>
                                        </div>
                                        <span className="text-center w-1/5 font-semibold text-sm">$400.00</span>
                                        <span className="text-center w-1/5 font-semibold text-sm">$400.00</span>
                                    </div>
                                ))
                            }

                            <Link to={'/'} className="flex font-semibold text-indigo-600 text-sm mt-10">

                                <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" /></svg>
                                Continue Shopping
                            </Link>
                        </div>

                        <div id="summary" className="col-span-1 px-8 py-10">
                            <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
                            <div className="flex justify-between mt-10 mb-5">
                                <span className="font-semibold text-sm uppercase">Items {totalQuantity}</span>
                                <span className="font-semibold text-sm">{totalPrice}$</span>
                            </div>
                            <div>
                                <label className="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
                                <select className="block p-2 text-gray-600 w-full text-sm">
                                    <option>Standard shipping - $10.00</option>
                                </select>
                            </div>
                            <form onSubmit={handleSubmit} className="py-6">
                                <label htmlFor="promo" className="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
                                <input onChange={handleChange} name='copun' type="text" id="promo" placeholder="Enter your code" className="p-2  text-sm w-full" />
                                <button disabled={!isDiscount} type='submit' className="bg-red-500 hover:bg-red-600 px-5 py-2 my-10 text-sm text-white uppercase">Apply</button>
                            </form>
                            <div className="border-t mt-3">
                                <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                                    <span>Total cost</span>
                                    {isDiscount ? <span>${discountPrice}</span> : <span>${totalPrice + parseFloat(10)}</span>}
                                </div>
                                <button
                                    onClick={makePayment}
                                    className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">Checkout</button>
                            </div>
                        </div>

                    </div>
                </div>
            </body>

        </div>
    );
};

export default AddProducts;