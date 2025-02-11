"use client";
import React, { useState, useEffect } from "react";

const EmployerForm = () => {
  const [captcha, setCaptcha] = useState<string>("");
  const [userInput, setUserInput] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    role: "",
    position: "",
    workLocation: "",
    positionType: "Position Type",
    isRemote: false,
    jobDetails: "",
    companySector: "Company Sectors",
  });

  useEffect(() => {
    setCaptcha(generateCaptcha());
  }, []);

  function generateCaptcha() {
    return Math.floor(100000 + Math.random() * 900000).toString();
  }

  const refreshCaptcha = () => {
    setCaptcha(generateCaptcha());
    setUserInput("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prevData) => ({ ...prevData, jobDetails: file.name }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    if (userInput !== captcha) {
      alert("Incorrect CAPTCHA. Please try again.");
      refreshCaptcha();
      return;
    }
  
    try {
      const response = await fetch("/api/employer-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      const result = await response.json();
      
      if (response.ok) {
        alert("Form submitted successfully!");
      } else {
        alert("Failed to submit form: " + result.error);
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("An error occurred while submitting the form.");
    }
  };
  

  return (
    <div className="relative pb-8 bg-[#00094a] text-white">
      <div className="absolute inset-y-1/3 left-0 w-1/3 h-1/3 bg-gradient-to-tl from-red-500 to-transparent opacity-40 transform -translate-x-1/2 rounded-full"></div>
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="text-center mb-10">
          <span className="inline-block bg-[#28284d] px-4 py-2 text-sm rounded-none mb-2">Form For Employer</span>
          <h1 className="text-4xl font-bold">Employers Form</h1>
          <p className="text-gray-300 mt-2 max-w-2xl mx-auto">
            Change happens. Sometimes when least expected. A1 Staffing Pro helps organizations actively manage workflow changes and capture new opportunities on a timely basis.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-6">About the Position</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input className="p-3 bg-white text-black rounded" type="text" name="position" placeholder="Position For Hiring" required onChange={handleChange} />
                <input className="p-3 bg-white text-black rounded" type="text" name="workLocation" placeholder="Work Location" required onChange={handleChange} />
                <select className="p-3 bg-white text-black rounded" name="positionType" onChange={handleChange}>
                  <option>Position Type</option>
                  <option>Permanent Hire</option>
                  <option>Contract Hire</option>
                  <option>Project Base</option>
                  <option>Temporary Hire</option>
                </select>
              </div>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                <div>
                  <label className="block mb-2 font-medium">Job Details</label>
                  <input className="block w-full p-3 bg-white text-black rounded" type="file" onChange={handleFileChange} />
                </div>
                <div className="flex items-center pt-6">
                  <input type="checkbox" className="mr-2 w-8 h-8" name="isRemote" onChange={handleChange} />
                  <span className="text-xl">Remote Position</span>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                <div>
                  <label className="block mb-2 font-medium">CAPTCHA</label>
                  <div className="flex items-center">
                    <div className="bg-gray-200 text-black px-4 py-3 rounded flex-grow select-none">{captcha || "Loading..."}</div>
                    <button type="button" onClick={refreshCaptcha} className="px-4 py-3 bg-indigo-500 rounded text-white font-bold hover:bg-indigo-600 ml-2">Refresh</button>
                  </div>
                </div>
                <div className="flex items-center pt-8">
                  <input className="block w-full px-4 py-3 bg-white text-black rounded flex-grow" type="text" placeholder="Enter Captcha" value={userInput} onChange={(e) => setUserInput(e.target.value)} required />
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input className="p-3 bg-white text-black rounded" type="text" name="name" placeholder="Your Name" required onChange={handleChange} />
                <input className="p-3 bg-white text-black rounded" type="email" name="email" placeholder="Business Email" required onChange={handleChange} />
                <input className="p-3 bg-white text-black rounded" type="tel" name="phone" placeholder="Business Phone" required onChange={handleChange} />
                <input className="p-3 bg-white text-black rounded" type="text" name="company" placeholder="Company Name" required onChange={handleChange} />
                <select className="p-3 bg-white text-black rounded" name="companySector" onChange={handleChange}>
                  <option>Company Sectors</option>
                  <option>Admin Support</option>
                  <option>Finance/Accounting</option>
                  <option>Human Resource Management</option>
                  <option>Health Care</option>
                  <option>IT Jobs</option>
                  <option>Other</option>
                </select>
                <input className="p-3 bg-white text-black rounded" type="text" name="role" placeholder="Your Role" required onChange={handleChange} />
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <button type="submit" className="px-8 py-4 bg-red-500 rounded-lg text-white font-bold text-lg hover:bg-red-600">Submit Now</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmployerForm;
