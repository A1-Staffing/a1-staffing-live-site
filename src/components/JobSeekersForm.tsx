"use client";
import React, { useState, useEffect } from "react";
import PositionDetails from "./PositionDetails";
import ContactDetails from "./ContactDetails";

const JobSeekersForm = () => {
  const [captcha, setCaptcha] = useState<string>("");
  const [userInput, setUserInput] = useState("");
  const [resumeFile, setResumeFile] = useState<File | null>(null);

  const [formData, setFormData] = useState({
    jobRole: "",
    qualification: "",
    experience: "",
    companySector: "",
    isRemote: false,
    name: "",
    email: "",
    phone: "",
    address: "",
    gender: "",
    dob: "",
    captchaInput: "",
    resume: "", // Add this line
  });
  
  useEffect(() => {
    setCaptcha(generateCaptcha());
  }, []);

  const generateCaptcha = () => Math.floor(100000 + Math.random() * 900000).toString();

  const refreshCaptcha = () => {
    setCaptcha(generateCaptcha());
    setUserInput("");
    setFormData((prev) => ({ ...prev, captchaInput: "" }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setResumeFile(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (userInput !== captcha) {
      alert("CAPTCHA incorrect. Try again.");
      refreshCaptcha();
      return;
    }

    try {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value.toString());
      });

      if (resumeFile) {
        formDataToSend.append("resume", resumeFile);
      }

      const response = await fetch("/api/job-seekers", {
        method: "POST",
        body: formDataToSend,
      });

      const data = await response.json();
      if (data.success) {
        alert("Email sent successfully!");
        refreshCaptcha();
        setResumeFile(null);
        setFormData({
          jobRole: "",
          qualification: "",
          experience: "",
          companySector: "",
          isRemote: false,
          name: "",
          email: "",
          phone: "",
          address: "",
          gender: "",
          dob: "",
          captchaInput: "",
          resume: "", // ✅ Add this line to match the expected type
        });
      } else {
        alert("Failed to send email. Try again later.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative pb-8 bg-[#00094a] text-white" encType="multipart/form-data">
      <div className="container mx-auto px-4 py-1 relative z-10">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold">Job Seekers Form</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <PositionDetails
            captcha={captcha}
            userInput={userInput}
            refreshCaptcha={refreshCaptcha}
            handleCaptchaInput={(e) => setUserInput(e.target.value)}
            handleInputChange={handleInputChange}
            handleFileUpload={handleFileUpload}
            formData={formData}
          />
          <ContactDetails handleInputChange={handleInputChange} formData={formData} />
        </div>

        <div className="text-center mt-10">
          <button type="submit" className="px-8 py-4 bg-red-500 rounded-lg text-white font-bold text-lg hover:bg-red-600">
            Submit Now
          </button>
        </div>
      </div>
    </form>
  );
};

export default JobSeekersForm;
