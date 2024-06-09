import React from 'react'

const Community = () => {
  return (
    <>
      <section className="py-12 px-4 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-8">Join Our Community</h2>
        <h3 className="text-2xl font-semibold text-center text-yellow-200 mb-4">
          Connect with Fellow Travelers: Share Experiences, Get Tips, and Discover New Adventures in Bangladesh
        </h3>
        <p className="text-center text-white mb-8">
          Welcome to the Visit BD Land Community! This section is dedicated to bringing together travelers, explorers,
          and adventure enthusiasts who share a passion for discovering the beauty and culture of Bangladesh. Here, you
          can connect with fellow travelers, share your experiences, get valuable travel tips, and find inspiration for
          your next adventure.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">Traveler Stories</h4>
            <p>Read and share personal travel experiences, from thrilling adventures in the Sundarbans to serene moments on the beaches of Cox's Bazar.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">Travel Tips</h4>
            <p>Get practical advice on planning your trips, including the best times to visit, must-see attractions, and local customs.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">Forums</h4>
            <p>Participate in discussions on various travel topics, ask questions, and exchange insights with other community members.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">Photo Galleries</h4>
            <p>Share your travel photos and explore stunning images posted by other travelers. See the beauty of Bangladesh through the eyes of your fellow explorers.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">Events and Meetups</h4>
            <p>Stay informed about upcoming travel-related events, meetups, and group tours. Connect with other travelers and make new friends.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">Local Insights</h4>
            <p>Gain valuable insights from locals and frequent travelers about hidden gems, cultural nuances, and the best places to eat and stay.</p>
          </div>
        </div>

        <div className="text-center mt-8">
          <h4 className="text-lg font-semibold text-yellow-200 mb-2">How to Join:</h4>
          <p className="text-white mb-4">
            Becoming a part of the Visit BD Land Community is easy! Simply sign up with your email address and create a
            profile. Once you're a member, you can start contributing to the community, posting your stories and photos,
            and joining discussions.
          </p>
          <h4 className="text-lg font-semibold text-yellow-200 mb-2">Community Guidelines:</h4>
          <ul className="list-disc list-inside text-white">
            <li>Be respectful and considerate of others.</li>
            <li>Share accurate and honest information.</li>
            <li>Avoid posting spam or promotional content.</li>
            <li>Report any inappropriate behavior to the moderators.</li>
          </ul>
        </div>
        
        <div className="text-center mt-8">
          <p className="text-white">We look forward to having you in our community and hearing about your incredible journeys across Bangladesh. Together, let's explore and celebrate the wonders of this beautiful country!</p>
        </div>
      </div>
    </section>
    </>
  )
}

export default Community