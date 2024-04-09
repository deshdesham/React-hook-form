import React, { useState,useRef,useEffect } from 'react';

function SelectWithSearch({ country_options, country_selectedOption, country_setSelectedOption, setState ,isOpen, onToggle}) {

  const [searchTerm, setSearchTerm] = useState('');
  const inputRef = useRef(null);
  

  const filteredOptions = country_options.filter(option =>
    option.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    if (isOpen) {
      inputRef.current.focus(); // Focus on the input field when the dropdown is opened
    }
  }, [isOpen]);

  const handleSelectOption = async (country) => {
    // console.log(country.id);
    country_setSelectedOption(country.name);
    // setIsOpen(false);
    onToggle();
    try {
      const fetchstate = await fetch(`https://csc.sidsworld.co.in/api/states/${country.id}`);
      const res = await fetchstate.json()
      // console.log(res);
      setState(res.states)

    } catch (err) {
      console.log("could not fetch state", err.message);
    }
  };


  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="bg-white border border-green-300 rounded-md shadow-sm px-4 py-2 w-[280px] text-sm leading-tight text-gray-700 flex justify-between items-center focus:outline-none"
          onClick={onToggle}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
        >
          {country_selectedOption || 'Select an option'}

        </button>
      </div>
      {isOpen && (
        <div className="origin-top-right overflow-y-scroll  mt-2 w-[280px] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <input
            type="text"
            ref={inputRef}
            className="border border-yellow-300 rounded-t-md w-full py-2 focus:outline-none"
            placeholder="Search..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
          <ul className="max-h-[180px]">
            {filteredOptions.map((country, index) => (
              <li
                key={index}
                className="text-gray-900 cursor-pointer select-none relative py-2 px-4 hover:bg-indigo-100"
                onClick={e => handleSelectOption(country)}
                value={country.name}
              >
                {country.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

function SelectState({ state_options, state_selectedOption, state_setSelectedOption,setCity,isOpen, onToggle }) {

  const [searchTerm, setSearchTerm] = useState('');
  const inputRef = useRef(null);
  // const [isOpen, setIsOpen] = useState(false);

  const filteredOptions = state_options.filter(option =>
    option.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    if (isOpen) {
      inputRef.current.focus(); // Focus on the input field when the dropdown is opened
    }
  }, [isOpen]);

  const handleSelectOption = async (state) => {
    // console.log(state.id);

    state_setSelectedOption(state.name);
    // setIsOpen(false);
    onToggle();
    try {
      const fetchstate = await fetch(`https://csc.sidsworld.co.in/api/cities/${state.id}`);
      const res = await fetchstate.json()
      // console.log(res);
      setCity(res.cities)

    } catch (err) {
      console.log("could not fetch city", err.message);
    }
  };


  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="bg-white border border-green-300 rounded-md shadow-sm px-4 py-2 w-[280px] text-sm leading-tight text-gray-700 flex justify-between items-center"
          onClick={onToggle}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
        >
          {state_selectedOption || 'Select State'}

        </button>
      </div>
      {isOpen && (
        <div className="origin-top-right  overflow-y-scroll mt-2 w-[280px] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <input
            type="text"
            ref={inputRef}
            className="border border-yellow-300 rounded-t-md w-full px-3 py-2 focus:outline-none"
            placeholder="Search..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
          <ul className="max-h-[180px]">
            {filteredOptions.map((state, index) => (
              <li
                key={index}
                className="text-gray-900 cursor-pointer select-none relative py-2 px-4 hover:bg-indigo-100"
                onClick={e => handleSelectOption(state)}
                value={state.name}
              >
                {state.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};






function SelectCity({ city_options, city_selectedOption, city_setSelectedOption, isOpen, onToggle }) {
  const [searchTerm, setSearchTerm] = useState('');
  // const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const inputRef = useRef(null);

  const filteredOptions = city_options.filter(option =>
    option.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelectOption = async (city) => {
    city_setSelectedOption(city.name);
    onToggle();
  };

  useEffect(() => {
    if (isOpen) {
      inputRef.current.focus(); // Focus on the input field when the dropdown is opened
    }
  }, [isOpen]);

 

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="bg-white border border-green-300 rounded-md shadow-sm px-4 py-2 w-[280px] text-sm leading-tight text-gray-700 flex justify-between items-center"
          onClick={onToggle}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
        >
          {city_selectedOption || 'Select city'}
        </button>
      </div>
      {isOpen && (
        <div className="origin-top-right overflow-y-scroll mt-2 w-[280px] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <input
            type="text"
            ref={inputRef}
            className="border border-gray-300 rounded-t-md w-full px-3 py-2 focus:outline-none "
            placeholder="Search..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            
          />
          <ul className="max-h-[180px]">
            {filteredOptions.map((city, index) => (
              <li
                key={index}
                className='text-gray-900 cursor-pointer select-none relative py-2 px-4 hover:bg-indigo-100 bg-indigo-100'
                onClick={() => handleSelectOption(city)}
                value={city.name}
              >
                {city.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SelectCity;




export {SelectWithSearch,SelectState,SelectCity}