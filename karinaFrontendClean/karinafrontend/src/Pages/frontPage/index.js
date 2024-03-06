import React from 'react';
import Excavator from '../../images/Karina_Verkatar_Logo_trans.png';
import './../../index.css';
import ContentBox from '../../components/contentBox';
import Title from '../../components/title';

const FrontPage = () => {
  return (
    <div
      className="bg-white   h-screen"
      style={{

      }}
    >
      
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
        }}
      >
        {/* Display the excavator image */}
        <img className="" src={Excavator} alt="Excavator" style={{ width: '50%', height: '' }} />
      </div>
      <div className="bg-white h-screen">
        <ContentBox />
      </div>
    </div>
  );
};

export default FrontPage;
