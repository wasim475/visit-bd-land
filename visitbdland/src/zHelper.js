import React, { useState } from 'react';

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('welcome');

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white py-4">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold">Tourist Dashboard</h1>
        </div>
      </header>
      <div className="container mx-auto mt-8">
        <div className="flex flex-col md:flex-row">
          <nav className="md:w-1/4 bg-white p-4 rounded shadow-md">
            <ul>
              <li className="mb-4">
                <button
                  onClick={() => setActiveSection('profile')}
                  className={`text-blue-600 hover:underline ${activeSection === 'profile' && 'font-bold'}`}
                >
                  My Profile
                </button>
              </li>
              <li className="mb-4">
                <button
                  onClick={() => setActiveSection('bookings')}
                  className={`text-blue-600 hover:underline ${activeSection === 'bookings' && 'font-bold'}`}
                >
                  My Bookings
                </button>
              </li>
              <li className="mb-4">
                <button
                  onClick={() => setActiveSection('wishlist')}
                  className={`text-blue-600 hover:underline ${activeSection === 'wishlist' && 'font-bold'}`}
                >
                  My Wishlist
                </button>
              </li>
              <li className="mb-4">
                <button
                  onClick={() => setActiveSection('request')}
                  className={`text-blue-600 hover:underline ${activeSection === 'request' && 'font-bold'}`}
                >
                  Request to Admin
                </button>
              </li>
            </ul>
          </nav>
          <main className="md:w-3/4 bg-white p-8 rounded shadow-md md:ml-4 mt-4 md:mt-0">
            {activeSection === 'welcome' && <Welcome />}
            {activeSection === 'profile' && <Profile />}
            {activeSection === 'bookings' && <Bookings />}
            {activeSection === 'wishlist' && <Wishlist />}
            {activeSection === 'request' && <Request />}
          </main>
        </div>
      </div>
    </div>
  );
};

const Profile = () => (
  <div>
    <h2 className="text-xl font-bold mb-4">My Profile</h2>
    <p>Profile details go here...</p>
  </div>
);

const Bookings = () => (
  <div>
    <h2 className="text-xl font-bold mb-4">My Bookings</h2>
    <p>Booking details go here...</p>
  </div>
);

const Wishlist = () => (
  <div>
    <h2 className="text-xl font-bold mb-4">My Wishlist</h2>
    <p>Wishlist details go here...</p>
  </div>
);

const Request = () => (
  <div>
    <h2 className="text-xl font-bold mb-4">Request to Admin</h2>
    <p>Request form goes here...</p>
  </div>
);

const Welcome = () => (
  <div>
    <h2 className="text-xl font-bold mb-4">Welcome to Your Dashboard</h2>
    <p>Select an option from the menu to get started.</p>
  </div>
);

export default Dashboard;
