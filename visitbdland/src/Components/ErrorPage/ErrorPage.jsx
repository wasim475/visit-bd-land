import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <>
            <div className="text-center bg-errorImg h-[98vh]">
                <h1 className=" text-4xl lg:text-9xl font-extrabold mt-3 text-blue-500 font-playfair fill-red-600"> Oooops!</h1>
                <h2 className=" text-2xl lg:text-3xl font-bold mt-4">404 - PAGE NOT FOUND</h2>
                <p className="mt-4 mb-4">The page you are looking for might have been removed or is temporarily unavilable.</p>
                <button className="border px-4 py-2 rounded-full bg-blue-700">
                    <Link className="font-blod text-white" to='/'>Go Back to Home.</Link>
                </button>
            </div>
        </>
    );
};

export default ErrorPage;