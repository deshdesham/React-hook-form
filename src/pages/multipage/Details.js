import React, { useState, useEffect } from 'react';

function Details({ updateFormData }) {
  const [formData, setFormData] = useState({
    address: '',
    city: '',
    country: ''
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
        htmlFor="address"
        className="text-sm mb-2 font-medium leading-none"
      >
        Address
      </label>
      <input
        type="text"
        id="address"
        name="address"
        value={formData.address || ''} // Ensure value is always defined
        onChange={handleChange}
        className="flex h-10 mb-2 rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1"
        placeholder="Enter your address"
      />

      <label
        htmlFor="city"
        className="text-sm mb-2 font-medium leading-none"
      >
        City
      </label>
      <input
        type="text"
        id="city"
        name="city"
        value={formData.city || ''} // Ensure value is always defined
        onChange={handleChange}
        className="flex h-10 mb-2 rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1"
        placeholder="Enter your city"
      />

      <label
        htmlFor="country"
        className="text-sm mb-2 font-medium leading-none"
      >
        Country
      </label>
      <input
        type="text"
        id="country"
        name="country"
        value={formData.country || ''} // Ensure value is always defined
        onChange={handleChange}
        className="flex h-10 rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1"
        placeholder="Enter your country"
      />
    </div>
  );
}

export default Details;
