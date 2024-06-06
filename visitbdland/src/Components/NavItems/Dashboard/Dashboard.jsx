import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MyProfile from './My profile/MyProfile';
import MeetOGuides from '../../../pages/Torism and travel section/Meet our guides/MeetOGuides';

const Dashboard = () => {
  let [activeSection, setActiveSection] = useState('welcome');
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white py-4">
        <div className="container mx-auto">
          <h1  className="text-2xl font-bold">Tourist Dashboard</h1>
        </div>
      </header>
      <div className="container mx-auto mt-8">
        <div className="flex flex-col md:flex-row">
          <nav className="md:w-1/4 bg-white p-4 rounded shadow-md">
            <ul>
              <li className="mb-4">
                <Link to="/my-profile" className="text-blue-600 hover:underline">My Profile</Link>
              </li>
              <li className="mb-4">
                <Link to="/bookings" className="text-blue-600 hover:underline">My Bookings</Link>
              </li>
              <li className="mb-4">
                <Link to="/wishlist" className="text-blue-600 hover:underline">My Wishlist</Link>
              </li>
              <li className="mb-4">
                <Link to="/request" className="text-blue-600 hover:underline">Request to Admin</Link>
              </li>
            </ul>
          </nav>
          <main className="md:w-3/4 bg-white p-8 rounded shadow-md md:ml-4 mt-4 md:mt-0">
          
              <MyProfile/>
          </main>
        </div>
      </div>
    </div>
  );
};



export default Dashboard