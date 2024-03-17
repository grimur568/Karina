import React from 'react';
import facebook from '../../images/logo/FacebookLogo.png';
import instagram from '../../images/logo/instagramLogo.png';
import frontpageLogo from '../../images/logo/FrontPageLogo.png';

const Footer = () => {
  return (
    <footer className="bg-white text-black p-6">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        {/* Company Info */}
        <div className="text-left flex flex-col justify-center mb-6 md:mb-0">
          <h2 className="text-xl font-semibold">Karína ehf.</h2>
          <p className="text-sm">Breiðahvarf 5, 203 Kópavogur</p>
          <p className="text-sm">+354 899 0012</p>
          <p className="text-sm">Karina@simnet.is</p>
        </div>

        {/* Centered Logo */}
        <div className="flex-1 flex justify-center items-center mb-6 md:mb-0 ml-28">
          <img src={frontpageLogo} alt="Frontpage Logo" className="h-32" />
        </div>

        {/* Enhanced Social Media Links */}
        <div className="flex justify-center md:justify-end space-x-4">
          <a href="https://www.facebook.com/profile.php?id=61556653542825" target="_blank" rel="noopener noreferrer" 
            className="flex items-center bg-blue-600 text-white rounded-full px-4 py-2 hover:bg-blue-700 transition duration-300 ease-in-out">
            <img src={facebook} alt="Facebook" className="w-6 mr-2" />
            Facebook
          </a>

          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" 
            className="flex items-center bg-pink-600 text-white rounded-full px-4 py-2 hover:bg-pink-700 transition duration-300 ease-in-out">
            <img src={instagram} alt="Instagram" className="w-6 mr-2" />
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
