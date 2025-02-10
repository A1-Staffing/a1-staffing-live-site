'use client';
import React, { useState, useEffect } from 'react';

const JobSeekersForm = () => {
  // State for CAPTCHA
  const [captcha, setCaptcha] = useState<string>('');
  const [userInput, setUserInput] = useState('');

  // Function to generate CAPTCHA
  function generateCaptcha() {
    return Math.floor(100000 + Math.random() * 900000).toString();
  }

  // Set CAPTCHA on the client
  useEffect(() => {
    setCaptcha(generateCaptcha());
  }, []);

  // Function to refresh CAPTCHA
  const refreshCaptcha = () => {
    setCaptcha(generateCaptcha());
    setUserInput(''); // Clear user input
  };

  // Function to handle CAPTCHA input
  const handleCaptchaInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  // Function to handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userInput === captcha) {
      alert('Form submitted successfully!');
      setCaptcha(generateCaptcha()); // Generate a new CAPTCHA after submission
      setUserInput(''); // Clear user input
    } else {
      alert('Please re-enter CAPTCHA.');
      refreshCaptcha(); // Refresh CAPTCHA and clear input
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative pb-8 bg-[#00094a] text-white"
    >
      {/* Red Patch on the Right */}
      <div className="absolute inset-y-1/3 right-0 w-1/6 bg-red-500 opacity-40 transform translate-x-1/6 rounded-l-full"></div>

      <div className="container mx-auto px-4 py-1 relative z-10">
        <div className="text-center mb-10">
          <span className="inline-block bg-[#28284d] px-4 py-2 text-sm rounded-none mb-2">
            Form For Job Seekers
          </span>

          <h1 className="text-4xl font-bold">Job Seekers Form</h1>
          <p className="text-gray-300 mt-2 max-w-2xl mx-auto">
            Change happens. Sometimes when least expected. A1 Staffing Pro helps
            organizations actively manage workflow changes and capture new
            opportunities on a timely basis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-6">About the Position</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                className="p-3 bg-white text-black rounded"
                type="text"
                placeholder="Job Role"
              />
              <select className="p-3 bg-white text-black rounded">
                <option>Your Qualification</option>
                <option>Ph. D</option>
                <option>Master&apos;s</option>
                <option>Bachelor&apos;s</option>
                <option>Diploma</option>
                <option>High School</option>
              </select>
              <input
                className="p-3 bg-white text-black rounded"
                type="text"
                placeholder="Experience"
              />
              <select className="p-3 bg-white text-black rounded">
                <option>Company Sectors</option>
                <option>Admin Support</option>
                <option>Finance/Accounting</option>
                <option>Human Resource Management</option>
                <option>Healthcare</option>
                <option>IT Jobs</option>
                <option>Other</option>
              </select>
            </div>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
              <div>
                <label className="block mb-2 font-medium">Your Resume</label>
                <input
                  className="block w-full p-3 bg-white text-black rounded"
                  type="file"
                />
              </div>
              <div className="flex items-center pt-6">
                <input type="checkbox" className="mr-2 w-8 h-8" />
                <span>Remote Position</span>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
              <div>
                <label className="block mb-2 font-medium">CAPTCHA</label>
                <div className="flex items-center">
                  <div
                    className="bg-gray-200 text-black px-4 py-3 rounded flex-grow select-none"
                    style={{ userSelect: 'none' }}
                    onContextMenu={(e) => e.preventDefault()}
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
                />
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                className="p-3 bg-white text-black rounded"
                type="text"
                placeholder="Your Name"
              />
              <input
                className="p-3 bg-white text-black rounded"
                type="email"
                placeholder="Your Email"
              />
              <input
                className="p-3 bg-white text-black rounded"
                type="tel"
                placeholder="Your Phone"
              />
              <input
                className="p-3 bg-white text-black rounded"
                type="text"
                placeholder="Your Address"
              />
              <select className="p-3 bg-white text-black rounded">
                <option>Your Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
              <input
                className="p-3 bg-white text-black rounded"
                type="date"
                placeholder="dd-mm-yyyy"
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
      </div>
    </form>
  );
};

export default JobSeekersForm;
