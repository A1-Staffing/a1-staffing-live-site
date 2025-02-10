'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS styles

const TypeOfJob: React.FC = () => {
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
            <h2 className="text-1xl font-bold">Types Of Jobs</h2>
          </div>
        </div>

        {/* Unlocking Your Access to Top Talent */}
        <div className="text-center mb-8">
          <h3 className="text-white text-4xl font-extrabold">
            Affordable Staffing Solutions
          </h3>
        </div>

        {/* Description Text */}
        <div className="text-center mb-16">
          <p className="text-white text-lg max-w-4xl mx-auto">
            Whether you&apos;re a small business or a large corporation, our
            flexible staffing options and exceptional candidate matching ensure
            that you find
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
              OFFICE SERVICES
            </h4>
            <p className="text-white mb-4 text-sm sm:text-base">
              Clerical Positions, Receptionist, Customer Service Representative,
              Call Center, Office Manager, Data Entry, Executive Assistant, and
              more.
            </p>
            <a
              href="#"
              className="inline-block text-[#ffffff] hover:text-black font-bold py-2 px-4 border-2 border-[#02043f] rounded-md mt-8"
            >
              Read More
            </a>
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
            <h4 className="text-white font-bold text-xl mb-4 mt-16">
              LIGHT INDUSTRIAL
            </h4>
            <p className="text-white mb-4 text-sm sm:text-base">
              Assembler, General Labor, Maintenance Worker, Shipping/Receiving
              Clerk, Warehouse Worker, Production, and more. Read More
            </p>
            <a
              href="#"
              className="inline-block text-[#ffffff] hover:text-black font-bold py-2 px-4 border-2 border-[#02043f] rounded-md mt-8"
            >
              Read More
            </a>
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
                width={70}
                height={80}
                style={{ width: 'auto', height: 'auto' }} // Maintain aspect ratio
              />
            </div>
            <h4 className="text-white font-bold text-xl mb-4 mt-16">
              PROFESSIONAL
            </h4>
            <p className="text-white mb-4 text-sm sm:text-base">
              Accounting and Financial, Information Technology, Engineering,
              Manufacturing, Technical, Sales, Marketing, Advertising, Human
              Resources, Legal, and more.
            </p>
            <a
              href="#"
              className="inline-block text-[#ffffff] hover:text-black font-bold py-2 px-4 border-2 border-[#02043f] rounded-md mt-8"
            >
              Read More
            </a>
          </div>
          {/* card 4 */}
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
            <h4 className="text-white font-bold text-xl mb-4 mt-16">
              SKILLED TRADES
            </h4>
            <p className="text-white mb-4 text-sm sm:text-base">
              CNC Machinist, Forklift Driver, MIG Welder, TIG Welder, Mechanic,
              HVAC Technician, Facilities Maintenance, Millwright, Pipefitter,
              Lathe Machinist, Mill Machinist, and more.
            </p>
            <a
              href="#"
              className="inline-block text-[#ffffff] hover:text-black font-bold py-2 px-4 border-2 border-[#02043f] rounded-md mt-8"
            >
              Read More
            </a>
          </div>
          {/* caed 5  */}
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
            <h4 className="text-white font-bold text-xl mb-4 mt-16">
              MANUFACTURING
            </h4>
            <p className="text-white mb-4 text-sm sm:text-base">
              Production Operator, Material Handler, Crane Operator, Industrial
              Painter, Procurement Clerk, Accounts Payable, Manufacturing
              Engineer, CAD Draftsman, and more.
            </p>
            <a
              href="#"
              className="inline-block text-[#ffffff] hover:text-black font-bold py-2 px-4 border-2 border-[#02043f] rounded-md mt-8"
            >
              Read More
            </a>
          </div>
          {/* card 6 */}
          <div
            className="bg-[#1c1e53] hover:bg-[#bf0a30] p-6 sm:p-8 rounded-lg relative"
            data-aos="fade-up"
            style={{ height: 'auto' }} // Ensure the box adapts to content size
          >
            <div className="absolute left-0 top-0 bg-white p-2 rounded-full">
              <Image
                src="/service2-iocn2.png"
                alt="Logo 2"
                width={80}
                height={80}
                style={{ width: 'auto', height: 'auto' }} // Maintain aspect ratio
              />
            </div>

            <h4 className="text-white font-bold text-xl mb-4 mt-16">
              LOGISTICS
            </h4>
            <p className="text-white mb-4 text-sm sm:text-base">
              Fleet Manager, Forklift Mechanic, Driver Helper, E-commerce Agent,
              Lift Truck Operator, Import/Export Clerk, Purchasing Assistant,
              Freight Forwarding Agent, Cargo Agent, Warehouse Manager, and
              more.
            </p>
            <a
              href="#"
              className="inline-block text-[#ffffff] hover:text-black font-bold py-2 px-4 border-2 border-[#02043f] rounded-md mt-8"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TypeOfJob;
