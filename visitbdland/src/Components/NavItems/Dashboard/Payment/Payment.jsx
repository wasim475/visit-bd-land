import  { useContext, useEffect, useState } from 'react';
import HeadingTitle from '../../../Re-use componets/Heading and title/HeadingTitle';
import {loadStripe} from '@stripe/stripe-js';
import { useLoaderData, useParams } from 'react-router-dom';
import {Elements} from '@stripe/react-stripe-js';
import ChackOutForm from './ChackOut Form/ChackOutForm';


const stripePromise = loadStripe(import.meta.env.VITE_payment_getway)
const Payment = () => {
  
  const touristInfos = useLoaderData()
  let { id } = useParams();

  
    const touristInfo = touristInfos.find((booking)=>booking._id===id)
//    const { guideName, price, title} = touristInfo
   console.log(id);
    return (
        <div>
            <section>
                <HeadingTitle
                    heading={"Payment"}
                />
            </section>
            {/* <section>
            <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
       
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">{touristInfo?.title}</h2>
        
       
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-600">Guide Name:</p>
          <p className="text-gray-800 font-semibold">{touristInfo?.guideName}</p>
        </div>
        
   
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-600">Price:</p>
          <p className="text-green-600 font-semibold">{touristInfo?.price}</p>
        </div>

      
        <div className="text-center">
          <button className="bg-green-600 text-white py-3 px-8 rounded-lg font-semibold hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50">Pay Now</button>
        </div>
      </div>
    </div>
            </section> */}
            <section>
                <Elements stripe={stripePromise}>
                    <ChackOutForm/>
                </Elements>
            </section>
        </div>
    );
};

export default Payment;