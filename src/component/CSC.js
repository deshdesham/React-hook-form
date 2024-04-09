// import React, { useEffect, useState } from 'react';

// const CSC = () => {
//     const [data, setData] = useState([]);
//     const [State,setState]=useState([])
//     const [City, setCity] = useState([]);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const req = await fetch("https://deshdesham.github.io/countries_states_cities/Countries_States_Cities.json");
//                 const res = await req.json();
//                 setData(res.Countries_States_Cities);
//             } catch (error) {
//                 console.error("Error fetching data:", error);
//             }
//         };

//         fetchData();
//     }, []);

//     const handleCountryChange = (e) => {
//         const selectedCountry = data.find(country => country.name === e.target.value);
//         if (selectedCountry) {
//             const countryObject = selectedCountry.states;
//             setState(countryObject ? countryObject : []);
//         } else {
//             setState([]); // Reset State if no country is selected
//         }
//     };
//     console.log(City);
    
//     const handleStateChange = (e) => {
//         const selectedState = State.find(state => state.name === e.target.value);
//         if (selectedState) {
//             const stateCities = selectedState.cities;
//             setCity(stateCities ? stateCities : []);
//         } else {
//             setCity([]); // Reset City if no state is selected
//         }
//     };
    

  
    

//     return (
//         <>
//             <div className='bg-gray-200 p-4 rounded-md shadow-md'>
//                 <input type="text" list='countryList' className='border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500' onChange={(e)=>handleCountryChange(e)} placeholder='Select a country'/>
//             {data.length > 0 && (
//                 <li id='countryList' className=''>
//                     {data.map((country, index) => (
//                         <option key={index} value={country.name} >{country.name}</option>
//                     ))}
//                 </li>
//             )}
//             </div>

//             <div className='bg-gray-200 p-4 rounded-md shadow-md'>
//                 <input type='text' list='stateList' className='border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500' onChange={(e)=>handleStateChange(e)} placeholder='Select a State'/>
//                 {
//                     data.length>0 && (
//                         <datalist id='stateList'>
                          
//                             {
//                                 State.map((state,index)=>(
//                                     <option key={index} className='bg-red-300' value={state.name}>{state.name}</option>
//                                 ))
//                             }
//                         </datalist>
//                     )
//                 }
//             </div>

//             <div className='bg-gray-200 p-4 rounded-md shadow-md'>
//                 <input type='text' list='cityList' className='border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500' placeholder='Select a City'/>
//                 {
//                     City.length>0 && (
//                         <datalist id='cityList'>
                          
//                             {
//                                 City.map((state,id)=>(
//                                     <option key={id} value={state.name}>{state.name}</option>
//                                 ))
//                             }
//                         </datalist>
//                     )
//                 }
//             </div>
           
//         </>
//     );
// };

// export default CSC;

// ------------------------------------

import React, { useEffect, useState } from 'react';
import { SelectWithSearch, SelectState, SelectCity } from './SelectWithSearch ';

const CSC = ({ onCountrySelect, onStateSelect, onCitySelect }) => {
  const [city, setCity] = useState([]);
  const [state, setState] = useState([]);
  const [country, setCountry] = useState([]);

  const [selectedOption, setSelectedOption] = useState('');
  const [stateOption, setStateOption] = useState('');
  const [cityOption, setCityOption] = useState('');

  const [countryDropdownOpen, setCountryDropdownOpen] = useState(false);
  const [stateDropdownOpen, setStateDropdownOpen] = useState(false);
  const [cityDropdownOpen, setCityDropdownOpen] = useState(false);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const req = await fetch("https://csc.sidsworld.co.in/api/countries");
        const res = await req.json();
        setCountry(res.countries);
      } catch (err) {
        console.log("could not fetch data", err);
      }
    };
    fetchdata();
  }, []);

  const handleCountryDropdownToggle = () => {
    setCountryDropdownOpen(!countryDropdownOpen);
    setStateDropdownOpen(false);
    setCityDropdownOpen(false);
  };

  const handleStateDropdownToggle = () => {
    setStateDropdownOpen(!stateDropdownOpen);
    setCountryDropdownOpen(false);
    setCityDropdownOpen(false);
  };

  const handleCityDropdownToggle = () => {
    setCityDropdownOpen(!cityDropdownOpen);
    setCountryDropdownOpen(false);
    setStateDropdownOpen(false);
  };

  const handleCountrySelect = (selectedCountry) => {
    setSelectedOption(selectedCountry);
    onCountrySelect(selectedCountry); // Pass selected country to parent component
  };

  const handleStateSelect = (selectedState) => {
    setStateOption(selectedState);
    onStateSelect(selectedState); // Pass selected state to parent component
  };

  const handleCitySelect = (selectedCity) => {
    setCityOption(selectedCity);
    onCitySelect(selectedCity); // Pass selected city to parent component
  };

  return (
    <div className="flex space-x-5">
      <SelectWithSearch 
        country_options={country}
        country_selectedOption={selectedOption}
        country_setSelectedOption={handleCountrySelect}
        setState={setState}
        isOpen={countryDropdownOpen}
        onToggle={handleCountryDropdownToggle}
        
      />

      <SelectState
        state_options={state}
        state_selectedOption={stateOption}
        state_setSelectedOption={handleStateSelect}
        setCity={setCity}
        isOpen={stateDropdownOpen}
        onToggle={handleStateDropdownToggle}
      />
      <SelectCity
        city_options={city}
        city_selectedOption={cityOption}
        city_setSelectedOption={handleCitySelect}
        isOpen={cityDropdownOpen}
        onToggle={handleCityDropdownToggle}
      />
    </div>
  );
};

export default CSC;
