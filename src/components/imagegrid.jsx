"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ImageComponent = ({ src, alt, text, link }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Link href={link} passHref>
      <div
        style={{
          position: 'relative',
          borderRadius: '5%',
          overflow: 'hidden',
          transition: 'transform 0.3s',
          transform: hovered ? 'scale(1.1)' : 'scale(1)',
          zIndex: hovered ? '1' : '0',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Image src={src} alt={alt} width={300} height={200} />
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            width: '100%',
            color: hovered ? '#000' : '#fff',
            backgroundColor: hovered ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)',
            transition: 'background-color 0.3s, color 0.3s',
            padding: '10px',
            borderRadius: '5%',
            boxSizing: 'border-box',
            fontSize: '1.5rem',
            fontWeight: 'bold',
          }}
        >
          {text}
        </div>
      </div>
    </Link>
  );
};

const ImageGallery = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', gap: '10px', flexWrap: 'wrap' }}>
      <ImageComponent src="/mienbac.jpg" alt="Image 1" text="Miền Bắc" link="/mienbac" />
      <ImageComponent src="/mientrung.jpg" alt="Image 2" text="Miền Trung" link="/mientrung" />
      <ImageComponent src="/miennam.jpg" alt="Image 3" text="Miền Nam" link="/miennam" />
      <ImageComponent src="/servicetour.jpg" alt="Image 4" text="Dịch vụ" link="/dichvu" />
    </div>
  );
};

export default ImageGallery;
