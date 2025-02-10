'use client';

import Image from 'next/image';
import React, { useState } from 'react';

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    // Handle form submission here (e.g., send it to a server)
  };

  return (
    <div className="bg-[#02043f] text-white flex flex-col lg:flex-row relative py-8">
      {/* Left Div */}
      <div className="flex-1 relative pl-4 lg:pl-60 pr-0">
        {/* Top Left Box */}
        <div className="absolute top-0 left-10 lg:left-60 bg-[#7b7d9d] text-white font-bold px-4 py-2 rounded-md">
          CONTACT US
        </div>

        {/* Main Content */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-4">
            Get in Touch <br /> Let&apos;s Start the Conversation
          </h2>

          <p className="text-lg mb-8 text-justify">
            We&apos;re here to help you find the right staffing solutions for
            your needs. <br /> Whether you&apos;re a company looking to hire top
            talent or a candidate <br />
            seeking your next career opportunity.
          </p>

          {/* Contact Cards */}
          <div className="space-y-4 pr-4 sm:pr-8">
  {/* Card 1 */}
  <div className="flex items-center bg-[#7b7d9d] text-white p-2 w-full lg:w-96 h-28 rounded-md">
    <div className="w-16 h-16 bg-[#d3bea8] rounded-full flex items-center justify-center mr-3">
      <Image
        src="/contact-icon1.png"
        alt="Logo"
        width={50}
        height={50}
      />
    </div>
    <div>
      <p className="font-bold text-sm flex items-center">
        Give us a Call
      </p>
      <p className="text-xl">
        <a href="tel:+18889733410" className="text-white hover:underline">
          888 973 3410
        </a>
      </p>
    </div>
  </div>

  {/* Card 2 */}
  <div className="flex items-center bg-[#7b7d9d] text-white p-2 w-full lg:w-96 h-28 rounded-md">
    <div className="w-16 h-16 bg-[#d3bea8] rounded-full flex items-center justify-center mr-3">
      <Image
        src="/contact-icon2.png"
        alt="Logo"
        width={50}
        height={50}
      />
    </div>
    <div>
      <p className="font-bold text-sm flex items-center">
        Send us Mail
      </p>
      <p className="text-xl">
        <a href="mailto:info@a1staffingpro.com" className="text-white hover:underline">
          info@a1staffingpro.com
        </a>
      </p>
    </div>
  </div>
</div>
        </div>
      </div>

      {/* Right Div - Form Section */}
      <div className="flex-1 p-6 lg:p-8">
        <div className="w-full max-w-xl bg-white p-8 rounded-md shadow-lg">
          <h3 className="text-[#90acd0] text-2xl font-bold mb-4">
            Send us a Message
          </h3>
          <p className="text-lg mb-8 text-[#000000]">
            Feel free to reach out to us with any questions, inquiries, or
            staffing requirements you may have.
          </p>

          <form onSubmit={handleSubmit}>
            {/* Name Fields */}
            <div className="flex flex-col lg:flex-row gap-4 mb-6">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className="w-full lg:w-1/2 p-3 border border-gray-300 rounded-md"
                value={formData.firstName}
                onChange={handleChange}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="w-full lg:w-1/2 p-3 border border-gray-300 rounded-md"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>

            {/* Email and Phone Fields */}
            <div className="flex flex-col lg:flex-row gap-4 mb-6">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full lg:w-1/2 p-3 border border-gray-300 rounded-md"
                value={formData.email}
                onChange={handleChange}
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone No"
                className="w-full lg:w-1/2 p-3 border border-gray-300 rounded-md"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            {/* Subject */}
            <div className="mb-6">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="w-full p-3 border border-gray-300 rounded-md"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>

            {/* Message */}
            <div className="mb-6">
              <textarea
                name="message"
                placeholder="Your Message"
                className="w-full p-3 border border-gray-300 rounded-md"
                rows={4}
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-[#bf0a30] text-white py-3 px-8 rounded-md hover:bg-[#a4082b]"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
