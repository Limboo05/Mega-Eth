import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { HiMenuAlt3 } from 'react-icons/hi';
import { RxCross1 } from 'react-icons/rx';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Check login state from localStorage
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, [location.pathname]);

  // helper function to check active path
  const isActive = (path) =>
    location.pathname === path
      ? 'text-orange-400 underline underline-offset-8'
      : 'hover:text-orange-400 hover:underline underline-offset-8';

  // logout handler
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <nav className="bg-black text-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="flex justify-between items-center px-6 md:px-12 h-20">
        
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="https://www.fluffle.tools/_next/image?url=%2Fmegalogo.png&w=384&q=75&dpl=dpl_E6piLAoCvFr9NxYkcRjWPtXFXLBj"
            alt="Quiz Logo"
            className="h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 rounded-full object-cover"
          />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-10 items-center">
          <li>
            <Link
              to="/"
              className={`text-lg font-light transition duration-300 ${isActive('/')}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/quiz"
              className={`text-lg font-light transition duration-300 ${isActive('/quiz')}`}
            >
              Mega-Eth Quiz
            </Link>
          </li>
          {isLoggedIn && (
            <li>
              <Link
                to="/leaderboard"
                className={`text-lg font-light transition duration-300 ${isActive('/leaderboard')}`}
              >
                Leaderboard
              </Link>
            </li>
          )}
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-4">
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="px-5 py-2 rounded-md text-lg font-light bg-red-600 hover:bg-red-500 transition duration-300"
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                to="/login"
                className={`px-5 py-2 rounded-md text-lg font-light transition duration-300 ${
                  location.pathname === '/login'
                    ? 'bg-gray-600 text-orange-400'
                    : 'bg-gray-700 hover:bg-gray-600'
                }`}
              >
                Login
              </Link>
              <Link
                to="/signup"
                className={`px-5 py-2 rounded-md text-lg font-light transition duration-300 ${
                  location.pathname === '/signup'
                    ? 'bg-orange-500'
                    : 'bg-orange-600 hover:bg-orange-500'
                }`}
              >
                Register
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setMenuOpen(true)} className="md:hidden text-white">
          <HiMenuAlt3 size={26} />
        </button>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 z-40"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-gray-900 z-50 transform transition-transform duration-300 ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setMenuOpen(false)} className="text-white">
            <RxCross1 size={26} />
          </button>
        </div>

        <div className="flex flex-col items-center space-y-6 mt-10">
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className={`text-lg ${isActive('/')}`}
          >
            Home
          </Link>
          <Link
            to="/quiz"
            onClick={() => setMenuOpen(false)}
            className={`text-lg ${isActive('/quiz')}`}
          >
            Mega-Eth Quiz
          </Link>
          {isLoggedIn && (
            <Link
              to="/leaderboard"
              onClick={() => setMenuOpen(false)}
              className={`text-lg ${isActive('/leaderboard')}`}
            >
              Leaderboard
            </Link>
          )}
          {!isLoggedIn ? (
            <>
              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
                className={`w-40 text-center px-4 py-2 rounded-md text-lg transition ${
                  location.pathname === '/login'
                    ? 'bg-gray-600 text-orange-400'
                    : 'bg-gray-700 hover:bg-gray-600'
                }`}
              >
                Login
              </Link>
              <Link
                to="/signup"
                onClick={() => setMenuOpen(false)}
                className={`w-40 text-center px-4 py-2 rounded-md text-lg transition ${
                  location.pathname === '/signup'
                    ? 'bg-orange-500'
                    : 'bg-orange-600 hover:bg-orange-500'
                }`}
              >
                Register
              </Link>
            </>
          ) : (
            <button
              onClick={() => {
                handleLogout();
                setMenuOpen(false);
              }}
              className="w-40 text-center px-4 py-2 rounded-md text-lg bg-red-600 hover:bg-red-500 transition"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
