import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../authContext';
import { useSelector } from 'react-redux';
import NavBarLogo from '../../images/logo/NavBarLogo.png';

function MenuBar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate()

  const isAuthenticated = useSelector((state) => state.loginStateSlice.token);
  // Check login state based on 'jwtToken' in sessionStorage
  useEffect(() => {
    const token = sessionStorage.getItem('jwtToken');
    console.log("auth",isAuthenticated)
    setIsLoggedIn(!!token); // Convert truthy/falsy value to boolean
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem('jwtToken');
    setIsLoggedIn(false);
    window.location.reload();
    navigate('/');
    
    // Optionally, redirect user or refresh page
  };

  return (
    <nav className="bg-black text-black ">
      <div className="mx-auto px-4 flex justify-between items-center bg-white">
        <div className="flex space-x-4 ">
          {/* Logo or brand name */}
          <a href="#" className="flex items-center py-5 px-2 text-gray-200 hover:text-gray-400">
            <img className="size-10/12" src={NavBarLogo}/>
          </a>
          </div>
          {/* Primary Nav */}
          <div className="hidden md:flex items-center space-x-40">
            <a href="/" className="font-sans text-xl py-5 px-3 hover:text-gray-400">HEIM</a>
       
            <div>
            <a href="/Service" className="font-sans text-xl py-5 px-3 hover:text-gray-400">ÞJÓNUSTA</a>
            </div>
            <div>
            <a href="/Machines" className="font-sans text-xl py-5 px-3 hover:text-gray-400">TÆKJAKOSTUR</a>
            </div>
            <div>
            <a href="/Assignments" className="font-sans text-xl py-5 px-3 hover:text-gray-400">VERKEFNI</a>
            </div>
          </div>
        
        
        {/* Login/Logout Section */}
        <div className="relative">
          {isAuthenticated ? (
            <>
              <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="py-2 px-4 hover:bg-gray-700 transition duration-300">
                Account <svg className="w-4 h-4 inline ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
                    <a href="/MS" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200">My Site</a>
                  <a href="/profile" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200">Profile</a>
                  <a href="/settings" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200">Settings</a>
                  <hr />
                  <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-gray-200">
                    Logout
                  </button>
                </div>
              )}
            </>
          ) : (
            <a href="/login" className="text-2xl py-2 px-4 hover:bg-gray-700 transition duration-300">
              Login
            </a>
          )}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} type="submit" className="mobile-menu-button">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        {/* Mobile navigation links */}
      </div>
    </nav>
  );
}

export default MenuBar;
