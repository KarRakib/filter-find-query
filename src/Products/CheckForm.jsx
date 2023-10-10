import React from 'react';

function PaymentForm() {
    return (
        <div className="min-w-screen min-h-screen bg-gray-200 flex items-center justify-center px-5 pb-10 pt-16">
            <div className="w-full mx-auto rounded-lg bg-white shadow-lg p-5 text-gray-700" style={{ maxWidth: '600px' }}>
                <div className="w-full pt-1 pb-5">
                    <div className="bg-indigo-500 text-white overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg flex justify-center items-center">
                        <i className="mdi mdi-credit-card-outline text-3xl"></i>
                    </div>
                </div>
                <div className="mb-10">
                    <h1 className="text-center font-bold text-xl uppercase">Secure payment info</h1>
                </div>
                <div className="mb-3 flex -mx-2">
                    <div className="px-2">
                        <label htmlFor="type1" className="flex items-center cursor-pointer">
                            <input type="radio" className="form-radio h-5 w-5 text-indigo-500" name="type" id="type1" checked />
                            <img src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png" className="h-8 ml-3" alt="Type 1" />
                        </label>
                    </div>
                    <div className="px-2">
                        <label htmlFor="type2" className="flex items-center cursor-pointer">
                            <input type="radio" className="form-radio h-5 w-5 text-indigo-500" name="type" id="type2" />
                            <img src="https://www.sketchappsources.com/resources/source-image/PayPalCard.png" className="h-8 ml-3" alt="Type 2" />
                        </label>
                    </div>
                </div>
                <div className="mb-3">
                    <label className="font-bold text-sm mb-2 ml-1">Name on card</label>
                    <div>
                        <input
                            className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                            placeholder="John Smith"
                            type="text"
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
                        />
                    </div>
                </div>
                <div className='flex justify-stretch'>
                <div className="mb-3  flex items-start">
                    <div className="px-2 w-full">
                        <label className="font-bold text-sm mb-2 ml-1">Expiration date</label>
                        <div className="input_text relative w-full"> 
                        <input type="text" className="h-12 pl-7 bg-slate-100 outline-none px-2 focus:border-blue-900 transition-all w-full border-b " placeholder="mm/yyyy" data-slots="my" />
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
                        />
                    </div>
                </div>
                </div>
                <div>
                    <button className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">
                        <i className="mdi mdi-lock-outline mr-1"></i> PAY NOW
                    </button>
                </div>
            </div>
            {/* <div className="mt-8 flex gap-5 ">
                <div className="input_text relative w-full"> <input type="text" className="h-12 pl-7 outline-none px-2 focus:border-blue-900 transition-all w-full border-b " placeholder="mm/yyyy" data-slots="my" /> <span className="absolute left-0 text-sm -top-4">Expiry</span> <i className="absolute left-2 top-4 text-gray-400 fa fa-calendar-o"></i> </div>
                <div className="input_text relative w-full"> <input type="text" className="h-12 pl-7 outline-none px-2 focus:border-blue-900 transition-all w-full border-b " placeholder="000" data-slots="0" data-accept="\d" size="3" /> <span className="absolute left-0 text-sm -top-4">CVV</span> <i className="absolute left-2 top-4 text-gray-400 fa fa-lock"></i> </div>
            </div>
            <p className="text-lg text-center mt-4 text-gray-600 font-semibold">Payment amount:$12.98</p>
            <div className="flex justify-center mt-4"> <button className="outline-none pay h-12 bg-orange-600 text-white mb-3 hover:bg-orange-700 rounded-lg w-1/2 cursor-pointer transition-all">Pay</button> </div> */}
        </div>
    );
}

export default PaymentForm;
