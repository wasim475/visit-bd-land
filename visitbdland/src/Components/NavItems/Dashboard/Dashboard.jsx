import React, { useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import MyProfile from './My profile/MyProfile';
import MeetOGuides from '../../../pages/Torism and travel section/Meet our guides/MeetOGuides';
import UseAdmin from '../../../Providers/Hooks/Use Admin/UseAdmin';
import UseGuest from '../../../Providers/Hooks/Use Guest/UseGuest';

const Dashboard = () => {
  const [isAdmin] = UseAdmin()
  const [izGuest] = UseGuest()
  
  let userNavlinks = (
    <ul id='sidebar'>
      <li className="mb-4">
        <NavLink to="/dashboard/my-profile">My Profile</NavLink>
      </li>
      <li className="mb-4">
        <NavLink to="/dashboard/my-bookings">My Bookings</NavLink>
      </li>
      <li className="mb-4">
        <NavLink to="/dashboard/wishlist">My Wishlist</NavLink>
      </li>
      <li className="mb-4">
        <NavLink to="/dashboard/admin-request">Request to Admin</NavLink>
      </li>   
    </ul>
  );
  let AdminNavlinks = (
    <ul id='sidebar'>
      <li className="mb-4">
        <NavLink to="/dashboard/admin">My Profile</NavLink>
      </li>
      <li className="mb-4">
        <NavLink to="/dashboard/add-packages">Add Packages</NavLink>
      </li>
      <li className="mb-4">
        <NavLink to="/dashboard/manage-users">Manage Users</NavLink>
      </li>   
    </ul>
  );
  let GuideNavlinks = (
    <ul id='sidebar'>
      <li className="mb-4">
        <NavLink to="/dashboard/guide"
          className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }

        >My Profile</NavLink>
      </li>
      <li className="mb-4">
        <NavLink to="/dashboard/my-assigned-tours">My Assigned Tours</NavLink>
      </li>   
    </ul>
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white py-4">
        <div className="container mx-auto flex gap-x-20">
          <Link to="/" className=" font-bold text-sm">Back to <span className='bg-blue-400 text-lg border-2 text-green-900 px-2 rounded-xl'>VisitBDLand</span></Link>
          <h1  className="text-2xl font-bold">{
            isAdmin
            ?
            "Admin Dashboard"
            :
            izGuest
            ?
            "Guest Dashboard"
            :
             "User Dashboard"
          }</h1>
        </div>
      </header>
      <div className="container mx-auto mt-8">
        <div className="flex flex-col md:flex-row">
          <nav className="md:w-1/4 bg-white p-4 rounded shadow-md">
            <ul>
              {
                izGuest
                ? 
                GuideNavlinks
                :
                isAdmin
                ?
                AdminNavlinks
                :
                userNavlinks
              }
            </ul>
          </nav>
          <main className="md:w-3/4 bg-white p-8 rounded shadow-md md:ml-4 mt-4 md:mt-0">
          
          <div className="flex-1 p-4">
              <Outlet></Outlet>
        </div>
          </main>
        </div>
      </div>
      
    </div>
  );
};



export default Dashboard