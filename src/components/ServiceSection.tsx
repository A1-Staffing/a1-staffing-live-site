'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS styles

const ServiceSection: React.FC = () => {
  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Animate only once when the element comes into view
    });
  }, []);

  return (
    <section className="py-16 bg-[#02043f]">
      <div className="container mx-auto px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <div className="inline-block bg-gray-500 text-white px-6 py-2 rounded-md">
            <h2 className="text-1xl font-bold">OUR SERVICES</h2>
          </div>
        </div>

        {/* Unlocking Your Access to Top Talent */}
        <div className="text-center mb-8">
          <h3 className="text-white text-4xl font-extrabold">
            Unlocking Your Access to Top Talent
          </h3>
        </div>

        {/* Description Text */}
        <div className="text-center mb-16">
          <p className="text-white  text-lg max-w-4xl mx-auto">
            Our tailored services include talent acquisition, recruitment
            expertise, and industry-specific staffing solutions to help you
            build high-performing teams.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div
            className="bg-[#1c1e53] hover:bg-[#bf0a30] p-6 sm:p-8 rounded-lg relative"
            data-aos="fade-up"
            style={{ height: 'auto' }} // Ensure the box adapts to content size
          >
            <div className="absolute left-1/2 transform -translate-x-1/2 -top-12 bg-white p-2 rounded-full">
              <Image
                src="/service2-iocn1.png" // Replace with the actual logo path
                alt="Logo 1"
                width={80}
                height={80}
                style={{ width: 'auto', height: 'auto' }} // Ensure aspect ratio is maintained
              />
            </div>
            <h4 className="text-white font-bold text-xl mb-4 mt-16">
              Temp And Temp To Perm
            </h4>
            <p className="text-white text-justify mb-4 text-sm sm:text-base">
              For many companies, dedicating their entire recruiting team and
              substantial resources to find the right candidates for short-term
              assignments, whether lasting a week or a few months, may not be
              practical. This is where A1 Staffing Pro steps in.
            </p>
           
          </div>

          {/* Card 2 */}
          <div
            className="bg-[#1c1e53] hover:bg-[#bf0a30] p-6 sm:p-8 rounded-lg relative"
            data-aos="fade-up"
            style={{ height: 'auto' }} // Ensure the box adapts to content size
          >
            <div className="absolute left-1/2 transform -translate-x-1/2 -top-12 bg-white p-2 rounded-full">
              <Image
                src="/service2-iocn2.png"
                alt="Logo 2"
                width={80}
                height={80}
                style={{ width: 'auto', height: 'auto' }} // Maintain aspect ratio
              />
            </div>
            <h4 className="text-white font-bold text-justify text-xl mb-4 mt-16">
            Direct Hire
            </h4>
            <p className="text-white mb-4 text-sm sm:text-base">
            A1 Staffing Pro’s unique &quot;Know Your Client&quot; approach enables our Customer Success Managers to deeply understand our clients’ needs. We thoroughly explore aspects such as required skills, management styles, personalities, company culture, team dynamics.
            </p>
          
          </div>

          {/* Card 3 */}
          <div
            className="bg-[#1c1e53] hover:bg-[#bf0a30] p-6 sm:p-8 rounded-lg relative"
            data-aos="fade-up"
            style={{ height: 'auto' }} // Ensure the box adapts to content size
          >
            <div className="absolute left-1/2 transform -translate-x-1/2 -top-12 bg-white p-2 rounded-full">
              <Image
                src="/service2-iocn3.png" // Replace with the actual logo path
                alt="Logo 3"
                width={80}
                height={80}
                style={{ width: 'auto', height: 'auto' }} // Maintain aspect ratio
              />
            </div>
            <h4 className="text-white font-bold text-xl mb-4 mt-16">
            Talent Aquisition Consulting
            </h4>
            <p className="text-white mb-4 text-justify text-sm sm:text-base">
            At A1 Staffing Pro, we offer more than just standard staffing solutions. Our Talent Acquisition Consulting services are tailored to enhance your workforce by delivering complete support throughout hiring process.
            </p>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
