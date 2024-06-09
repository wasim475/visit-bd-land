import React from 'react'

const AboutUs = () => {
  return (
    <>
       <section id="about-us" className="py-12 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">About Us</h2>
        <p className="text-center text-gray-700 mb-8">
          Visit BD Land is dedicated to offering the best travel experiences in Bangladesh. Our mission is to showcase the beauty and culture of Bangladesh through meticulously curated tours and personalized service.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-green-600 mb-2">Our Mission</h3>
            <p>
              Our mission is to provide exceptional travel experiences that create lasting memories. We aim to offer tours that highlight the rich cultural heritage, stunning natural beauty, and warm hospitality of Bangladesh.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-green-600 mb-2">Our Vision</h3>
            <p>
              Our vision is to be the leading travel agency in Bangladesh, known for our commitment to quality, sustainability, and customer satisfaction. We strive to promote responsible tourism that benefits both travelers and local communities.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-green-600 mb-2">Our Team</h3>
            <p>
              Our team consists of passionate travel experts who are dedicated to providing the best service to our clients. With extensive knowledge of Bangladesh's destinations and a deep love for travel, our team is here to help you plan the perfect trip.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-green-600 mb-2">Our Values</h3>
            <p>
              We believe in integrity, customer focus, innovation, and sustainability. Our values guide our operations and ensure that we always put our customers first, provide innovative solutions, and promote eco-friendly travel practices.
            </p>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default AboutUs