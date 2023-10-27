import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiMenu, FiHome, FiUsers, FiBriefcase, FiMessageCircle, FiBell, FiSearch } from 'react-icons/fi';
import { BiMoviePlay } from 'react-icons/bi';


const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const goRoute = (route) => {
    navigate(route);
  };

  return (
    <nav className="bg-white shadow-md border border-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <button
          onClick={() => goRoute("/")}
          className="text-2xl font-bold text-blue-600"
        >
          LinkedIn
        </button>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-600 hover:text-blue-600 transition focus:outline-none"
          >
            <FiMenu size={24} />
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
             <button
            onClick={() => goRoute("/home")}
            className="text-gray-600 hover:text-blue-600 transition"
          >
            <FiSearch size={24} />
          </button>
       
          <button
            onClick={() => goRoute("/home")}
            className="text-gray-600 hover:text-blue-600 transition"
          >
            <FiHome size={24} />
            
          </button>
          <button
            onClick={() => goRoute("/network")}
            className="text-gray-600 hover:text-blue-600 transition"
          >
            <FiUsers size={24}  />
          
          </button>
          <button
            onClick={() => goRoute("/jobs")}
            className="text-gray-600 hover:text-blue-600 transition"
          >
            <FiBriefcase size={24} />
           
          </button>
          <button
            onClick={() => goRoute("/messaging")}
            className="text-gray-600 hover:text-blue-600 transition"
          >
            <FiMessageCircle size={24}/>
          
          </button>
          <button
            onClick={() => goRoute("/messaging")}
            className="text-gray-600 hover:text-blue-600 transition"
          >
            <BiMoviePlay size={24}/>
          
          </button>
          <button
            onClick={() => goRoute("/notifications")}
            className="text-gray-600 hover:text-blue-600 transition"
          >
            <FiBell size={24} />
            
          </button>
          <div className="flex items-center">
            <button
              className="mr-2 bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Post a Job
            </button>
            <img
              src="https://randomuser.me/api/portraits/men/1.jpg"
              alt="User"
              className="h-8 w-8 rounded-full cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="flex flex-col items-center py-4 bg-white">
            <button
              onClick={() => goRoute("/home")}
              className="text-gray-600 hover-text-blue-600 transition mb-2"
            >
              Home
            </button>
            <button
              onClick={() => goRoute("/network")}
              className="text-gray-600 hover-text-blue-600 transition mb-2"
            >
              My Network
            </button>
            <button
              onClick={() => goRoute("/jobs")}
              className="text-gray-600 hover-text-blue-600 transition mb-2"
            >
              Jobs
            </button>
            <button
              onClick={() => goRoute("/messaging")}
              className="text-gray-600 hover-text-blue-600 transition mb-2"
            >
              Messaging
            </button>
            <button
              onClick={() => goRoute("/notifications")}
              className="text-gray-600 hover-text-blue-600 transition mb-2"
            >
              Notifications
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
