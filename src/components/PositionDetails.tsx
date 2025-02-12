import React from 'react';

interface PositionDetailsProps {
  captcha: string;
  userInput: string;
  refreshCaptcha: () => void;
  handleCaptchaInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  handleFileUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  formData: {
    jobRole: string;
    qualification: string;
    experience: string;
    companySector: string;
    isRemote: boolean;
    resume: string;
  };
}

const PositionDetails: React.FC<PositionDetailsProps> = ({
  captcha,
  userInput,
  refreshCaptcha,
  handleCaptchaInput,
  handleInputChange,
  handleFileUpload,
  formData,
}) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">About the Position</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          className="p-3 bg-white text-black rounded"
          type="text"
          name="jobRole"
          value={formData.jobRole}
          onChange={handleInputChange}
          placeholder="Job Role"
        />
        <select
          className="p-3 bg-white text-black rounded"
          name="qualification"
          value={formData.qualification}
          onChange={handleInputChange}
        >
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
          name="experience"
          value={formData.experience}
          onChange={handleInputChange}
          placeholder="Experience"
        />
        <select
          className="p-3 bg-white text-black rounded"
          name="companySector"
          value={formData.companySector}
          onChange={handleInputChange}
        >
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
            onChange={handleFileUpload}
          />
        </div>
        <div className="flex items-center pt-6">
          <input
            type="checkbox"
            name="isRemote"
            checked={formData.isRemote}
            onChange={handleInputChange}
            className="mr-2 w-8 h-8"
          />
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
            name="captchaInput"
            placeholder="Enter Captcha"
            value={userInput}
            onChange={handleCaptchaInput}
          />
        </div>
      </div>
    </div>
  );
};

export default PositionDetails;
