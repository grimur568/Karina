import React from 'react';
import Hyundai from '../../images/hyundai.JPEG';
import Man from '../../images/man.JPEG';
import Lib from '../../images/matti.JPEG';
import volvo from '../../images/volvo.JPG';
import logo from '../../images/logo/FrontPageLogo.png';

const FrontpageContent = () => {
  return (
    <div className="relative bg-white h-[calc(100vh-4rem)] overflow-hidden"> {/* Adjust 4rem to match your navbar's height */}

      {/* Top images container */}
      <div className="flex justify-between items-center h-1/2">
        <img src={volvo} alt="Volvo" className="w-1/2 h-full object-cover" />
        <img src={Man} alt="Man" className="w-1/2 h-full object-cover" />
      </div>

      {/* Logo centered in the viewport */}
      <img src={logo} alt="Logo" className="absolute w-2/12 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2" style={{ zIndex: 10 }} />

      {/* Bottom images container */}
      <div className="flex justify-between items-center h-1/2">
        <img src={Lib} alt="Lib" className="w-1/2 h-full object-cover" />
        <img src={Hyundai} alt="Hyundai" className="w-1/2 h-full object-cover" />
      </div>
    </div>
  );
};

export default FrontpageContent;

