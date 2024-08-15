// pages/account.js
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import React from 'react';

const AccountPage = () => {
  const likedActivities = [
    "Sunset Cruise",
    "Rainforest Hike",
    "Beach Volleyball",
    "Cultural Food Tour",
  ];

  const todoList = [
    "Book a scuba diving session",
    "Visit the local market",
    "Plan a day trip to nearby islands",
  ];

  return (
    <div className="min-h-screen bg-base-200 p-4">
      <Navbar/>
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="bg-slate-200 text-slate-900 p-6 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold">Mon compte</h1>
          <p className="text-lg mt-2">Welcome back, John Doe!</p>
        </div>

        {/* Liked Activities Section */}
        <div className="mt-6 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Activités aimés</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
            {likedActivities.map((activity, index) => (
              <div key={index} className="card bg-neutral text-neutral-content p-4 rounded-sm shadow-md">
                <h3 className="card-title text-lg">{activity}</h3>
                <p className="text-sm">Details about the {activity}...</p>
                <button className="btn btn-primary btn-sm mt-2">Remove</button>
              </div>
            ))}
          </div>
        </div>

        {/* To-Do List Section */}
        <div className="mt-6 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">My To-Do List</h2>
          <ul className="list-disc list-inside">
            {todoList.map((item, index) => (
              <li key={index} className="mt-2 text-lg">{item}</li>
            ))}
          </ul>
        </div>

        {/* Personal Information Section */}
        <div className="mt-6 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Informations personnelles</h2>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Nom</span>
            </label>
            <input type="text" placeholder="John Doe" className="input input-bordered w-full max-w-xs" />
          </div>
          <div className="form-control mt-4">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" placeholder="john.doe@example.com" className="input input-bordered w-full max-w-xs" />
          </div>
          <div className="form-control mt-4">
            <label className="label">
              <span className="label-text">Téléphone</span>
            </label>
            <input type="tel" placeholder="+1 234 567 890" className="input input-bordered w-full max-w-xs" />
          </div>
          <button className="btn btn-primary mt-6">Modifier Information</button>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default AccountPage;
