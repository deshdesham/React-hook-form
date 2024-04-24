import React, { useState, useEffect } from 'react';

function Account({ updateFormData }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  // Call updateFormData whenever the form data changes
  useEffect(() => {
    updateFormData(formData);
  }, [formData]);

  return (
    <div className=" flex justify-center flex-col md:w-1/3">
      <label
        htmlFor="name"
        className="text-sm mb-2 font-medium leading-none"
      >
        Name
      </label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name || ''} // Ensure value is always defined
        onChange={handleChange}
        className="flex h-10 mb-2 rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1"
        placeholder="Enter your name"
      />

      <label
        htmlFor="email"
        className="text-sm mb-2 font-medium leading-none"
      >
        Email
      </label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email || ''} // Ensure value is always defined
        onChange={handleChange}
        className="flex h-10 mb-2 rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1"
        placeholder="Enter your email"
      />

      <label
        htmlFor="password"
        className="text-sm mb-2 font-medium leading-none"
      >
        Password
      </label>
      <input
        type="password"
        id="password"
        name="password"
        value={formData.password || ''} // Ensure value is always defined
        onChange={handleChange}
        className="flex h-10 rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1"
        placeholder="Enter your password"
      />
    </div>
  );
}

export default Account;
