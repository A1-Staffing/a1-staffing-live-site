'use client';

import React, { useState, useEffect } from 'react';

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    // Show button when page is scrolled down by 300px
    setIsVisible(window.scrollY > 300);
  };

  const scrollToTop = () => {
    // Smoothly scroll back to the top
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <button
      className={`fixed bottom-20 right-5 w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center shadow-lg transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={scrollToTop}
      aria-label="Back to Top"
    >
      <span className="text-2xl">&uarr;</span>
    </button>
  );
};

export default BackToTop;
