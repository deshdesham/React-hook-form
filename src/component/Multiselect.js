import React, { useState } from 'react';

function Multiselect({ SendData }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const options = ['Apple', 'Orange', 'Banana', 'Nuts'];

  const handleSelect = (item) => {
    setSelectedItems([...selectedItems, item]);
    setSearchTerm("");
    setIsDropdownOpen(false); // Close dropdown after item is selected
    sendDataToParent([...selectedItems, item]); // Send updated data to parent
  }

  const handleDeselect = (item) => {
    const updatedItems = selectedItems.filter(selectedItem => selectedItem !== item);
    setSelectedItems(updatedItems);
    sendDataToParent(updatedItems); // Send updated data to parent
  }

  const handleSearchClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  }

  const sendDataToParent = (data) => {
    SendData(data);
  }

  return (
    <div className=''>
      <div className="flex relative">
        <div className='w-[100%] flex items-center gap-4 p-[5px] border border-yellow-500 rounded '>

          <div>
            {selectedItems.map((item, index) => (
              <span key={index} className="border-green-300 inset-0 m-1 inline-flex items-center border px-1 rounded-full cursor-pointer hover:text-red-500 " onClick={() => handleDeselect(item)}>{item} &times;</span>
            ))}
          </div>

          <input
            type="text"
            placeholder="Type to search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onClick={handleSearchClick}
            className='border-none h-[20px] p-[5px] focus:outline-none'
            
          />
        </div>
      </div>
      {isDropdownOpen && (
        <ul className='border-gray-500 border my-1'>
          {options.map((item, index) => (
            !selectedItems.includes(item) &&
            item.toLowerCase().includes(searchTerm.toLowerCase()) &&
            <li key={index} onClick={() => handleSelect(item)} className='border pl-5 hover:bg-slate-300'>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Multiselect;



