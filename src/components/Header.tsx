'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-[#000029]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
        {/* Logo */}
        <Link href="/">
          <div className="cursor-pointer flex items-center">
            <Image
              src="/logo-white.png"
              alt="A1 Staffing Pro LLC Logo"
              width={160}
              height={40} // Match the natural aspect ratio
              style={{ width: 'auto', height: 'auto' }} // Ensure aspect ratio is maintained
              className="object-contain"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden sm:flex space-x-6 text-white text-sm font-medium">
          {[
            { name: 'HOME', href: '/' },
            { name: 'ABOUT US', href: '/aboutus' },
            { name: 'EMPLOYER', href: '/employer' },
            { name: 'JOB SEEKER', href: '/jobseeker' },
            { name: 'LOCATION', href: '/location' },
            { name: 'BLOG', href: '/blog' },
          ].map((link) => (
            <Link key={link.name} href={link.href}>
              <span className="hover:text-[#bf0a30]">{link.name}</span>
            </Link>
          ))}
        </nav>

        {/* Contact Us Button */}
        <Link
          href="/contact"
          className="hidden sm:inline-block bg-[#bf0a30] text-white text-sm font-medium py-4 px-12 rounded hover:bg-opacity-80"
        >
          CONTACT US
        </Link>

        {/* Hamburger Menu */}
        <button
          className="sm:hidden text-blue-500 text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="sm:hidden bg-white text-black text-sm font-medium space-y-4 py-4 px-6">
          {[
            { name: 'HOME', href: '/' },
            { name: 'ABOUT US', href: '/aboutus' },
            { name: 'EMPLOYER', href: '/employer' },
            { name: 'JOB SEEKER', href: '/jobseeker' },
            { name: 'LOCATION', href: '/location' },
            { name: 'BLOG', href: '/blog' },
          ].map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block hover:text-gray-600"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="block bg-[#bf0a30] text-white text-center py-2 rounded hover:bg-opacity-80"
          >
            CONTACT US
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
