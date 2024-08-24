import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Church of Pentecost</Link>
        <div>
          <Link to="/attendance" className="mr-4">Attendance</Link>
          <Link to="/admin">Admin</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;