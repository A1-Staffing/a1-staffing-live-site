import React from 'react';

interface ContactDetailsProps {
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  formData: {
    name: string;
    email: string;
    phone: string;
    address: string;
    gender: string;
    dob: string;
  };
}

const ContactDetails: React.FC<ContactDetailsProps> = ({ handleInputChange, formData }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          className="p-3 bg-white text-black rounded"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Your Name"
        />
        <input
          className="p-3 bg-white text-black rounded"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Your Email"
        />
        <input
          className="p-3 bg-white text-black rounded"
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          placeholder="Your Phone"
        />
        <input
          className="p-3 bg-white text-black rounded"
          type="text"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
          placeholder="Your Address"
        />
        <select
          className="p-3 bg-white text-black rounded"
          name="gender"
          value={formData.gender}
          onChange={handleInputChange}
        >
          <option>Your Gender</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>
        <input
          className="p-3 bg-white text-black rounded"
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default ContactDetails;
