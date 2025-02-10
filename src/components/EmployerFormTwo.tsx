'use client';
import React, { useState, useEffect } from 'react';

const EmployerFormTwo = () => {
  // State for CAPTCHA
  const [captcha, setCaptcha] = useState<string>('');
  const [userInput, setUserInput] = useState('');

  // Function to generate CAPTCHA
  function generateCaptcha() {
    return Math.floor(100000 + Math.random() * 900000).toString();
  }

  // Set CAPTCHA on component mount
  useEffect(() => {
    setCaptcha(generateCaptcha());
  }, []);

  // Function to refresh CAPTCHA
  const refreshCaptcha = () => {
    setCaptcha(generateCaptcha());
    setUserInput(''); // Clear user input
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userInput !== captcha) {
      alert('Incorrect CAPTCHA. Please try again.');
      refreshCaptcha();
    } else {
      alert('Form submitted successfully!');
    }
  };

  // Handle CAPTCHA input change
  const handleCaptchaInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  return (
    <div className="relative pb-8 bg-[#00094a] text-white">
      {/* Red Patch */}
      <div className="absolute inset-y-1/3 left-0 w-1/3 h-1/3 bg-gradient-to-tl from-red-500 to-transparent opacity-40 transform -translate-x-1/2 rounded-full"></div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="text-center mb-10">
         
          <h1 className="text-4xl font-bold pt-12">
            {' '}
            Expert Accounting and Finance Staffing Solutions for <br /> New Jersey
            Businesses
          </h1>
          <p className="text-gray-300 mt-2 max-w-2xl mx-auto">
            At A1 Staffing Pro LLC, we understand that finding skilled
            accounting professionals and finance talent is crucial for the
            success of local businesses in New Jersey. That’s why we’re
            committed to connecting businesses with top accounting staffing
            solutions and talented individuals who bring expertise, precision,
            and reliability to the table. Whether you need support with
            bookkeeping staffing services, financial analysis, or tax
            preparation staff, our custom finance staffing solutions ensure you
            get the right fit for your team. With A1 Staffing Pro, you can focus
            on growing your business while we handle the complexities of finding
            top-tier finance professionals in New Jersey.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-6">
                About the Position
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  className="p-3 bg-white text-black rounded"
                  type="text"
                  placeholder="Position For Hiring"
                  required
                />
                <input
                  className="p-3 bg-white text-black rounded"
                  type="text"
                  placeholder="Work Location"
                  required
                />
                <select className="p-3 bg-white text-black rounded">
                  <option>Position Type</option>
                  <option>Permanent Hire</option>
                  <option>Contract Hire</option>
                  <option>Project Base</option>
                  <option>Temporary Hire</option>
                </select>
              </div>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                <div>
                  <label className="block mb-2 font-medium">Your Resume</label>
                  <input
                    className="block w-full p-3 bg-white text-black rounded"
                    type="file"
                    required
                  />
                </div>
                <div className="flex items-center pt-6">
                  <input type="checkbox" className="mr-2 w-8 h-8" />
                  <span className="text-xl">Remote Position</span>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                <div>
                  <label className="block mb-2 font-medium">CAPTCHA</label>
                  <div className="flex items-center">
                    <div
                      className="bg-gray-200 text-black px-4 py-3 rounded flex-grow select-none"
                      style={{ userSelect: 'none' }}
                    >
                      {captcha || 'Loading...'}
                    </div>
                    <button
                      type="button"
                      onClick={refreshCaptcha}
                      className="px-4 py-3 bg-indigo-500 rounded text-white font-bold hover:bg-indigo-600 ml-2"
                    >
                      Refresh
                    </button>
                  </div>
                </div>
                <div className="flex items-center pt-8">
                  <input
                    className="block w-full px-4 py-3 bg-white text-black rounded flex-grow"
                    type="text"
                    placeholder="Enter Captcha"
                    value={userInput}
                    onChange={handleCaptchaInput}
                    required
                  />
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-6">
                Contact Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  className="p-3 bg-white text-black rounded"
                  type="text"
                  placeholder="Your Name"
                  required
                />
                <input
                  className="p-3 bg-white text-black rounded"
                  type="email"
                  placeholder="Business Email"
                  required
                />
                <input
                  className="p-3 bg-white text-black rounded"
                  type="tel"
                  placeholder="Business Phone"
                  required
                />
                <input
                  className="p-3 bg-white text-black rounded"
                  type="text"
                  placeholder="Company Name"
                  required
                />
                <select className="p-3 bg-white text-black rounded">
                  <option>Company Sectors</option>
                  <option>Admin Support</option>
                  <option>Finance/Accounting</option>
                  <option>Human Resource Management</option>
                  <option>Health Care</option>
                  <option>IT Jobs</option>
                  <option>Other</option>
                </select>

                <input
                  className="p-3 bg-white text-black rounded"
                  type="text"
                  placeholder="Your Role"
                  required
                />
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <button
              type="submit"
              className="px-8 py-4 bg-red-500 rounded-lg text-white font-bold text-lg hover:bg-red-600"
            >
              Submit Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmployerFormTwo;
