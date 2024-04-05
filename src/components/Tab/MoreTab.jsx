// MoreTab.js
"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ImageComponent from './ImageComponent';

const MoreTab = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', gap: '10px', flexWrap: 'wrap', marginTop: '20px'}}>
      <ImageComponent
  src="/diatrunghai.jpg"
  alt="Image 1"
  text="Địa Trung Hải"
  description="Trải nghiệm tour cano 3 đảo"
  price="800.000"
  oldPrice="900.000"
  salePercentage="20"
  link="/mienbac"
/>
<ImageComponent
  src="/captreohonthom.jpg"
  alt="Image 3"
  text="Hòn Thơm"
  description="Tour cano 4 Đảo – Cáp treo"
  price="1.200.000"
  oldPrice="1.450.000"
  salePercentage="17"
  link="/miennam"
/>
      <ImageComponent
  src="/phuquoc.jpg"
  alt="Image 3"
  text="Nam Đảo"
  description="Check in 6 địa điểm hot nhất"
  price="690.000"
  oldPrice="790.000"
  salePercentage="13"
  link="/miennam"
/>
    </div>
  );
};

export default MoreTab;
