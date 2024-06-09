import React from 'react'

const ContactUs = () => {
  return (
    <>
       <section id="contact-us" className="py-12 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Contact Us</h2>
        <p className="text-center text-gray-700 mb-8">
          We’d love to hear from you! Whether you have a question about our tours, need assistance, or just want to talk, we’re here for you.
        </p>
        <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
              <input type="text" id="name" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-600" placeholder="Your Name" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
              <input type="email" id="email" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-600" placeholder="Your Email" />
            </div>
            <div className="mb-4">
              <label htmlFor="subject" className="block text-gray-700 font-semibold mb-2">Subject</label>
              <input type="text" id="subject" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-600" placeholder="Subject" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
              <textarea id="message" rows="5" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-600" placeholder="Your Message"></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </section>
    </>
  )
}

export default ContactUs