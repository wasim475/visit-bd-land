import React from 'react'

const Blogs = () => {
  return (
    <>
       <section className="py-12 px-4 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Discover Our Travel Blogs</h2>
        <h3 className="text-2xl font-semibold text-center text-gray-600 mb-4">
          Insights, Tips, and Stories from Our Travel Experts
        </h3>
        <p className="text-center text-gray-700 mb-8">
          Our travel blogs provide a wealth of information and inspiration for your next adventure. Explore detailed guides, personal experiences, and practical tips to make the most of your travels in Bangladesh. Whether you're a first-time visitor or a seasoned explorer, our blogs are designed to enhance your journey.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">Destination Guides</h4>
            <p>Comprehensive guides on top destinations, including the best time to visit, must-see attractions, and local experiences.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">Travel Tips</h4>
            <p>Practical advice on travel planning, packing, and staying safe. Learn from the experiences of other travelers to make your trip smoother.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">Personal Stories</h4>
            <p>Read personal travel stories and experiences from our community. Discover unique perspectives and memorable moments.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">Cultural Insights</h4>
            <p>Learn about the rich cultural heritage of Bangladesh, including festivals, traditions, and local customs.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">Food and Cuisine</h4>
            <p>Explore the diverse culinary landscape of Bangladesh. Get recommendations for the best local dishes and where to find them.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">Adventure Stories</h4>
            <p>Get inspired by thrilling adventure stories, from trekking in the hills to exploring the mangroves of the Sundarbans.</p>
          </div>
        </div>

        <div className="text-center mt-8">
          <h4 className="text-lg font-semibold text-green-600 mb-2">Contribute to Our Blog</h4>
          <p className="text-gray-700 mb-4">
            Do you have an interesting travel story or valuable tips to share? Join our community of bloggers and contribute to the Visit BD Land blog. Your insights and experiences can inspire and help fellow travelers discover the beauty of Bangladesh.
          </p>
          <h4 className="text-lg font-semibold text-green-600 mb-2">How to Start:</h4>
          <ul className="list-disc list-inside text-gray-700">
            <li>Sign up and create a profile on our website.</li>
            <li>Submit your blog post along with any relevant photos.</li>
            <li>Our team will review and publish your post on our blog.</li>
          </ul>
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-700">Join us in creating a vibrant and informative travel blog that showcases the best of Bangladesh. Your stories and insights are valuable to our community!</p>
        </div>
      </div>
    </section>
    </>
  )
}

export default Blogs