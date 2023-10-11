import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51M63ypKYn4DrBUBdywnI0qMyumrWfngLfJGbfbdvr3i06iUVneSrVwGEmSbiKimzfhgGfR3eLsP9Q2zsL04maa9D00CR7bDdyA');
// https://github.com/harsh17112000/stripe_inreact_node/tree/main
function PaymentForm() {
  const [name, setName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expDate, setExpDate] = useState('');
  const [cvc, setCvc] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const stripe = await stripePromise;

    const { error } = await stripe.createToken('card', {
      name: name,
      number: cardNumber,
      exp_month: parseInt(expDate.split('/')[0]),
      exp_year: parseInt(expDate.split('/')[1]),
      cvc: cvc,
    });

    if (error) {
      console.error(error);
      // Handle error, display an error message to the user, etc.
    } else {
      // The token is created successfully, you can send it to your server for further processing.
    }
  };

  return (
    <div className="min-w-screen min-h-screen bg-gray-200 flex items-center justify-center px-5 pb-10 pt-16">
      <form className="w-full mx-auto rounded-lg bg-white shadow-lg p-5 text-gray-700" style={{ maxWidth: '600px' }} onSubmit={handleSubmit}>
        {/* ... Your existing form code ... */}
        <div className="mb-10">
          <label className="font-bold text-sm mb-2 ml-1">Name on card</label>
          <div>
            <input
              className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
              placeholder="John Smith"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <div className="mb-3">
          <label className="font-bold text-sm mb-2 ml-1">Card number</label>
          <div>
            <input
              className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
              placeholder="0000 0000 0000 0000"
              type="text"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
            />
          </div>
        </div>
        <div className="mb-3  flex items-start">
          <div className="px-2 w-full">
            <label className="font-bold text-sm mb-2 ml-1">Expiration date</label>
            <div className="input_text relative w-full">
              <input
                type="text"
                className="h-12 pl-7 bg-slate-100 outline-none px-2 focus:border-blue-900 transition-all w-full border-b"
                placeholder="mm/yyyy"
                data-slots="my"
                value={expDate}
                onChange={(e) => setExpDate(e.target.value)}
              />
              <i className="absolute left-2 top-4 text-gray-400 fa fa-calendar-o"></i>
            </div>
          </div>
        </div>
        <div className="mb-10">
          <label className="font-bold text-sm mb-2 ml-1">Security code</label>
          <div>
            <input
              className="w-32 px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
              placeholder="000"
              type="text"
              value={cvc}
              onChange={(e) => setCvc(e.target.value)}
            />
          </div>
        </div>
        <div>
          <button className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">
            <i className="mdi mdi-lock-outline mr-1"></i> PAY NOW
          </button>
        </div>
      </form>
    </div>
  );
}

export default PaymentForm;
