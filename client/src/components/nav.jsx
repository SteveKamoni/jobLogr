import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-4 shadow-md bg-white dark:bg-gray-900">
      <div className="text-2xl font-bold text-blue-600">
        <Link to="/">JobTrackr</Link>
      </div>

      <div className="hidden md:flex space-x-6 text-gray-700 dark:text-gray-300">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/why-us">Why Us</Link>
        <Link to="/features">Features</Link>
      </div>

      <div>
        <Link
          to="/login"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
