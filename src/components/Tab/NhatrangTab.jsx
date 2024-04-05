// NhatrangTab.js
import React from 'react';
import ImageComponent from './ImageComponent';
const NhatrangTab = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', gap: '10px', flexWrap: 'wrap', marginTop: '20px'}}>
      <ImageComponent
  src="/langchai.jpg"
  alt="Image 1"
  text="Tour 3 đảo"
  description="Minibeach – Làng Chài – Hòn Tằm"
  price="780.000"
  oldPrice="880.000"
  salePercentage="11"
  link="/mienbac"
/>
<ImageComponent
  src="/tour3.jpg"
  alt="Image 3"
  text="Đảo Bình Hưng"
  description="hòn đảo nổi tiếng với vẻ đẹp hoang sơ"
  price="750.000"
  oldPrice="830.000"
  salePercentage="10"
  link="/miennam"
/>
      <ImageComponent
  src="/phuquoc.jpg"
  alt="Image 3"
  text="ĐIỆP SƠN – KDL DỐC LẾT"
  description=""
  price="750.000"
  oldPrice="900.000"
  salePercentage="13"
  link="/miennam"
/>
    </div>
  );
};

export default NhatrangTab;
