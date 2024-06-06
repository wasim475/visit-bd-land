import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import MyProfile from './My profile/MyProfile';
import MeetOGuides from '../../../pages/Torism and travel section/Meet our guides/MeetOGuides';

const Dashboard = () => {
  let [activeSection, setActiveSection] = useState('welcome');
  
  let Navlinks = (
    <>
      <li className="mb-4">
        <NavLink to="/my-profile">My Profile</NavLink>
      </li>
      <li className="mb-4">
        <NavLink to="/my-bookings">My Bookings</NavLink>
      </li>
      <li className="mb-4">
        <NavLink to="/my-wishlist">My Wishlist</NavLink>
      </li>
      <li className="mb-4">
        <NavLink to="/request-to-admin">Request to Admin</NavLink>
      </li>   
    </>
  );

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
              {Navlinks}
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