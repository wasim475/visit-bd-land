import React from 'react';
import Swal from 'sweetalert2'
import HeadingTitle from '../../../../Re-use componets/Heading and title/HeadingTitle';

const AddPackages = () => {
    const handleSubmit =(e)=>{
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Create pack Successfully",
            showConfirmButton: false,
            timer: 1500
          });
    }
    return (
        <>
            <div>
                <section>
                    <HeadingTitle
                        heading={"Add a New Package"}
                    />
                </section>
                <section>
                <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
          <form onSubmit={handleSubmit}>
           <section className='flex justify-between'>
           <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Catagory Name</label>
              <select className="select select-bordered w-full max-w-xs">
                <option selected>Adventure</option>
                <option>Beach</option>
                <option>Cultural</option>
                <option>Relaxation</option>
                </select>
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Title</label>
              <input type="email" id="email" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-600" placeholder="Pack title" />
            </div>
           </section>

           <section className='flex justify-between'>
           <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Price per person</label>
              <input type="email" id="email" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-600" placeholder="Package Price per person" />
            </div>
           <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Cover photo url</label>
              <input type="email" id="email" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-600" placeholder="Package cover photo link" />
            </div>
           </section>
           <section className='flex'>
                <div className='w-full'>
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2"> Photo urls for tourist spot</label>
                <textarea className="textarea textarea-bordered w-full" placeholder="write links with comma separated"></textarea>
                </div>
           </section>
           <section className='flex justify-between'>

           </section>
           <section className='flex justify-between'>

           </section>
           <section className='flex justify-between'>

           </section>
           <section className='flex justify-between'>

           </section>
           <section className='flex justify-between'>

           </section>
           <section className='flex justify-between'>

           </section>
           <section className='flex justify-between'>

           </section>
           <section className='flex justify-between'>

           </section>
           <section className='flex justify-between'>

           </section>
            
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Package Details</label>
              <textarea id="message" rows="5" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-600" placeholder=" Write Package Details using comma(,) separating"></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50">Create Package</button>
            </div>
          </form>
        </div>
                </section>
            </div>
        </>
    );
};

export default AddPackages;