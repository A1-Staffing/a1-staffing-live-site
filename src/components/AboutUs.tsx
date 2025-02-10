'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles

const AboutUs: React.FC = () => {
  const [imageHover, setImageHover] = useState(false);

  const handleImageHover = () => setImageHover(true);
  const handleImageLeave = () => setImageHover(false);

  // Initialize AOS when the component mounts
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true, // animation happens only once
    });
  }, []);

  return (
    <section className="py-16 bg-[#010239]">
      <div className="container mx-auto px-8">
        {/* Main Wrapper */}
        <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-0 justify-between">
          {/* Left and Middle Divs containing Cards */}
          <div className="w-full  lg:w-2/12 space-y-8 ">
            {/* Card 1 */}
            <div
              className="bg-white p-4 rounded-lg shadow-lg hover:bg-[#bf0a30] transition duration-300 relative max-w-48 max-h-48 mx-auto"
              onMouseEnter={handleImageHover}
              onMouseLeave={handleImageLeave}
              data-aos="fade-up"
            >
              {/* Centered Image Container */}
              <div className="w-20 h-20 flex justify-center items-center relative">
                <Image
                  src={imageHover ? '/choose1-icon2.png' : '/choose1-icon1.png'} // Change image on hover
                  alt="Card Image"
                  width={40} // Set width
                  height={40} // Set height
                  style={{ width: 'auto', height: 'auto' }} // Maintain aspect ratio
                  className="object-contain" // Use object-fit with CSS
                />
              </div>

              {/* Text Below Image */}
              <div className="mt-2 text-center">
                <p className="text-2xl font-bold text-black">{`98%`}</p>
                <p className="text-s text-black">Successful Clients</p>
              </div>
            </div>

            {/* Card 2 */}
            <div
              className="bg-white p-4 rounded-lg shadow-lg hover:bg-[#bf0a30] transition duration-300 relative max-w-48 max-h-48 mx-auto"
              onMouseEnter={handleImageHover}
              onMouseLeave={handleImageLeave}
              data-aos="fade-up"
            >
              {/* Centered Image Container */}
              <div className="w-20 h-20 flex justify-center items-center relative">
                <Image
                  src={imageHover ? '/about4-icon2.png' : '/choose1-icon3.png'} // Change image on hover
                  alt="Card Image"
                  width={40} // Set width
                  height={40} // Set height
                  className="object-contain" // Use object-fit with CSS
                />
              </div>

              {/* Text Below Image */}
              <div className="mt-2 text-center">
                <p className="text-2xl font-bold text-black">{`98%`}</p>
                <p className="text-s text-black">Team Advisors</p>
              </div>
            </div>

            {/* Card 3 */}
            <div
              className="bg-white p-4 rounded-lg shadow-lg hover:bg-[#bf0a30] transition duration-300 relative max-w-48 max-h-48 mx-auto"
              onMouseEnter={handleImageHover}
              onMouseLeave={handleImageLeave}
              data-aos="fade-up"
            >
              <div className="w-20 h-20 flex justify-center items-center relative">
                <Image
                  src={imageHover ? '/about5-icon1.png' : '/about5-icon2.png'} // Change image on hover
                  alt="Card Image"
                  width={40} // Set width
                  height={40} // Set height
                  className="object-contain" // Use object-fit with CSS
                />
              </div>
              <div className="mt-2 text-center">
                <p className="text-2xl font-bold text-black">{`12+`}</p>
                <p className="text-s text-black">Years Of Experience</p>
              </div>
            </div>
          </div>

          {/* Blank Div for YouTube Video and Content */}
          <div className="w-full lg:w-5/12 bg-[#010239] p-8 rounded-lg">
            {/* YouTube Video Embed */}
            <div className="mb-4 aspect-video">
              <iframe
                width="100%" // Set width to 100% to make it responsive
                height="100%" // Set height to auto for proportional scaling
                src="https://www.youtube.com/embed/JXUCbTLCXqc"
                title="Why A1staffing Pro ?"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="max-w-full" // Add max width and height constraints
              ></iframe>
            </div>

            {/* Heading */}
            <h2
              className="text-2xl font-bold text-white mb-4"
              data-aos="fade-up"
            >
              Why Work With A1 Staffing Pro LLC
            </h2>

            {/* Paragraph Text */}
            <p className="text-white text-base" data-aos="fade-up">
              At A1 Staffing Pro LLC, we connect businesses with top talent
              tailored to their specific needs. Our dedicated team brings
              extensive industry expertise, ensuring a seamless hiring process
              and exceptional candidate matches. We prioritize building lasting
              relationships, fostering a collaborative approach that drives
              success for both clients and candidates. Trust us to streamline
              your staffing solutions and elevate your workforce!
            </p>
          </div>

          {/* Blank Div for future content */}
          <div className="w-full lg:w-5/12 bg-[#010239] p-8 rounded-lg">
            {/* "About Us" section */}
            <div
              className="bg-[#28284d] text-white text-sm p-2 rounded-t-md mb-4 inline-block"
              data-aos="fade-up"
            >
              About Us
            </div>

            {/* Empowering Businesses text */}
            <div
              className="font-bold text-4xl mb-4 text-white"
              data-aos="fade-up"
            >
              Empowering Businesses, Advancing Careers
            </div>

            {/* Description */}
            <p className="mb-4 text-white" data-aos="fade-up">
              At A1 Staffing Pro LLC, we’re more than just a staffing agency. We
              are a company dedicated to truly caring for others. It might seem
              idealistic, but it’s this commitment that motivates us each day to
              turn our vision into reality.
            </p>

            {/* For Employers section */}
            <div className="flex items-center mb-4" data-aos="fade-up">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mr-2">
                <Image
                  src="/choose1-icon2.png" // Use your image source here
                  alt="Logo"
                  width={24} // Add required width
                  height={24} // Add required height
                  className="w-6 h-6" // Adjust the size of the logo
                />
              </div>
              <div>
                <p className="text-l font-medium text-white">For Employers</p>
                <p className="text-sm text-white">
                  We match you with candidates who seamlessly integrate into
                  your team.
                </p>
              </div>
            </div>

            {/* Repeat of For Employers section */}
            <div className="flex items-center" data-aos="fade-up">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mr-2">
                <Image
                  src="/choose1-icon3.png" // Use your image source here
                  alt="Logo"
                  width={24} // Add required width
                  height={24} // Add required height
                  className="w-6 h-6" // Adjust the size of the logo
                />
              </div>
              <div>
                <p className="text-l font-medium text-white">For Employers</p>
                <p className="text-sm text-white">
                  We match you with candidates who seamlessly integrate into
                  your team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
