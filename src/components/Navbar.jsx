import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full bg-black p-4">
      <div className="container mx-auto px-10 flex justify-between items-center">
        <span className="text-white text-lg font-bold">MovieApp</span>
        <ul>
          <li>
            <Link to="/" className="text-white">
              Home
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
