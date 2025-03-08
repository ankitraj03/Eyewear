import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Header({ globalUsername, setGlobalUsername }) {
  const [signedIn, setSignedIn] = useState(false);

  useEffect(() => {
    if (globalUsername) {
      setSignedIn(true);
    } else {
      setSignedIn(false);
    }
  }, [globalUsername]);

  const handleSignOut = () => {
    localStorage.removeItem("user");
    setGlobalUsername(""); // ✅ Clears username globally
    setSignedIn(false);
  };

  return (
    <div className="Navbar flex items-center justify-between px-6 py-4 bg-white text-gray-800 sticky top-0 z-50 shadow-md">
      <Link to="/Section" className="flex items-center space-x-2">
        <div className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">
          Chasma<span className="text-orange-500">WALA</span>
        </div>
      </Link>

      <div className="flex space-x-6">
        <button className="px-4 py-2 text-black rounded-lg hover:bg-gray-300 transition duration-300">
          Track Order
        </button>
        <Link to="/Wishlist">
          <button className="px-4 py-2 text-black rounded-lg hover:bg-gray-300 transition duration-300">
            Wishlist
          </button>
        </Link>
        <button className="px-4 py-2 text-black rounded-lg hover:bg-gray-300 transition duration-300">
          Cart
        </button>
        {signedIn ? (
          <div className="flex items-center space-x-4">
            <span className="px-4 py-2 bg-gray-300 text-black rounded-lg">
              {globalUsername}
            </span>
            <button
              onClick={handleSignOut}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <Link
            to="/signin"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
}

export default Header;
