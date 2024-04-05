"use client"
import React, { useState, useEffect } from 'react';

const Slideshow = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % 5); // Change 5 to the number of images
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slideshow">
      {[1, 2, 3, 4, 5].map((num, idx) => (
        <img
          key={idx}
          src={`/slide${num}.jpg`} // Change extension if your images have different extensions
          alt={`Slide ${num}`}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            position: 'absolute',
            transition: 'opacity 1s ease',
            opacity: idx === index ? 1 : 0,
            borderRadius: '5%'
          }}
        />
      ))}
    </div>
  );
};

export default Slideshow;
