import React, { useState } from 'react';
export function WorkspaceForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    location: ''
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };
  return <div className="bg-white rounded-3xl p-8 shadow-xl max-w-md w-full">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Discover Your Next Workspace
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* First Name and Last Name */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-900 mb-2">
              First Name
            </label>
            <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" className="w-full px-4 py-3 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent" />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-900 mb-2">
              Last Name
            </label>
            <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" className="w-full px-4 py-3 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent" />
          </div>
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
            Email
          </label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" className="w-full px-4 py-3 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent" />
        </div>

        {/* Location */}
        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-900 mb-2">
            Location
          </label>
          <input type="text" id="location" name="location" value={formData.location} onChange={handleChange} placeholder="Location Name" className="w-full px-4 py-3 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent" />
        </div>

        {/* Submit Button */}
        <button type="submit" className="w-full bg-gray-900 text-white py-4 rounded-full font-medium hover:bg-gray-800 transition-colors mt-6">
          Get Started
        </button>
      </form>
    </div>;
}