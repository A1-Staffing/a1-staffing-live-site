'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Import the Link component

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full py-24 xl:py-32">
      {/* Full Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero5-bg.png" // Full background image
          alt="Full Background Image"
          fill // Fills the parent container
          className="object-cover" // Apply CSS class to control object-fit
        />
      </div>

      {/* Content Overlay */}
      <div className="flex flex-col xl:flex-row items-center justify-between px-8 md:px-16 lg:px-60 2xl:px-52 h-full relative z-10 xl:gap-14">
        {/* Left Content */}
        <div className="flex flex-col justify-center items-center xl:items-start space-y-6 w-full xl:w-1/2 xl:text-left">
          <h1 className="text-white bg-[#28284d] text-sm sm:text-md px-4 py-1 flex justify-center items-center rounded-md w-fit">
            CHOOSE THE BEST FROM THE BEST
          </h1>
          <h2 className="text-white text-3xl sm:text-5xl 2xl:text-7xl font-bold">
            Welcome to A1 <br />
            Staffing (<span className="text-[#bf0a30]">Pro</span>LLC)
          </h2>

          <p className="text-gray-300 text-sm 2xl:text-lg leading-relaxed">
            A staffing firm tailored to meet the demands of today’s job market.
            Whether you&apos;re looking to hire top talent or land your next
            career opportunity.
          </p>
          <div className="flex flex-col justify-center items-center sm:flex-row gap-4">
            {/* Employer Button */}
            <Link href="/employer">
              <button className="bg-[#bf0a30] text-white px-12 py-4 rounded hover:bg-[#d43a50] transition">
                Employer
              </button>
            </Link>
            {/* Jobseeker Button */}
            <Link href="/jobseeker">
              <button className="border border-white text-white px-12 py-4 rounded bg-[#000132] hover:bg-[#bf0a30] hover:text-white transition">
                Jobseeker
              </button>
            </Link>
          </div>
        </div>

        {/* Right Div with Nested Background and Image */}
        <div className="w-full xl:w-1/2 mt-8 xl:mt-0">
          {/* Right side images */}
          <div className="relative w-full">
            {/* Background Image (placed normally in the content flow) */}
            <Image
              src="/hero2-main-shape-bg.png"
              alt="Large Image"
              width={900} // Set image width
              height={600} // Set image height
              className="object-contain h-[650px]" // Apply CSS class to control object-fit
            />

            {/* Second Image (Positioned Absolutely in Center) */}
            {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <Image
                src="/hero2-main-img.png"
                alt="Small Image"
                width={700} 
                height={700} 
                className="object-contain transition-all duration-500 ease-in-out"
              />
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
