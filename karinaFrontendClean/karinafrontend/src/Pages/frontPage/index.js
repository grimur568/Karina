import React from 'react';

import './../../index.css';
import ContentBox from '../../components/contentBox';
import FrontpageContent from '../../components/frontpageContent';
import ImageUpload from '../../components/imageUpload';
import DisplayImage from '../../components/displayImage';
import ImageGallery from '../../components/imageGallery';
import ServiceDetails from '../../components/serviceDetail';
const FrontPage = () => {
  return (
    <div>
 {/*      <ImageUpload /> */}
{/*       <DisplayImage imageId={"6E63C585-81C3-468F-31F4-08DC45C5242E"}/> */}
{/*       <ImageGallery /> */}

      <ServiceDetails id='e3513d66-828c-4dfc-ae49-17b3861055fd' />
{/*       <FrontpageContent /> */}
    </div>
  );
};

export default FrontPage;
