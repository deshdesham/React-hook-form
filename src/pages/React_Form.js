import React, { useState } from 'react';
import Multiselect from '../component/Multiselect';
import CSC from '../component/CSC';

const React_Form = () => {
    const [formData, setFormData] = useState({
        UserName: "",
        Email:"",
        Age: "",
        Password: "",
        ConfirmPassword: "",
        Occupation: "",
        Language: [],
        Food:[],
        Country:"",
        State:"",
        City:"",
        tnc:false
    });

    const [errors, setErrors] = useState({});

    const handledata = (data) => {
        setFormData({
            ...formData,
            Food: data
        });
        setErrors({
            ...errors,
            Food: ""
        });
    }

    const onChangeHandler = (event) => {
        const { name, value, type, checked } = event.target;
    
        // Handle special cases like Age, Language, and Password validation
        if (type === "checkbox") {
            if (name === "Language") {
                const selectedLanguages = formData.Language.includes(value)
                    ? formData.Language.filter(lang => lang !== value)
                    : [...formData.Language, value];
    
                setFormData({
                    ...formData,
                    Language: selectedLanguages
                });
            } else if (name === "tnc") { // Check if it's the terms and conditions checkbox
                setFormData({
                    ...formData,
                    tnc: checked // Update tnc directly with checked value
                });
            }
        
        }else if (name === "Age") {
            const ageNumber = parseInt(value);
            if (!isNaN(ageNumber)) {
                setFormData({
                    ...formData,
                    [name]: ageNumber
                });
            }
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    
        // Clear error message when user starts typing again
        setErrors({
            ...errors,
            [name]: ""
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validate form data
        const validationErrors = validateForm(formData);
        // setIsTncChecked(formData.tnc); // Update isTncChecked with the value of formData.tnc
        if (Object.keys(validationErrors).length > 0 || !formData.tnc) {
            setErrors(validationErrors);
        } else {
            console.log("formData", formData);
            // Reset form after successful submission
            setFormData({
                UserName: "",
                Email:"",
                Age: "",
                Password: "",
                ConfirmPassword: "",
                Occupation: "",
                Language: [],
                Food:[],
                Country:"",
                State:"",
                City:"",
                tnc:false
            });
            // setIsTncChecked(false);
        }
    }

    const validateForm = (data) => {
        let errors = {};

        // Username validation
        if (!data.UserName.trim()) {
            errors.UserName = "Username is required";
        } else if (data.UserName.length < 3 || data.UserName.length > 8) {
            errors.UserName = "Username must be between 3 and 8 characters";
        }

        //Email validation

        if(!data.Email===""){
            errors.Email="Email is required"
        }else{
            let regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;


            if(!regex.test(formData.Email)){
                errors.Email="Please Enter valid Email"
            }
        }

        // Age validation
        if (data.Age === "") {
            errors.Age = "Age is required";
        }

        // Password validation
        if (data.Password === "") {
            errors.Password = "Password is required";
        } else {
            const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/;
            if (!regex.test(data.Password)) {
                errors.Password = "Password must contain at least one uppercase letter, one lowercase letter, one digit, one special character, and be 8-10 characters long.";
            }
        }

        // Confirm Password validation
        if (data.ConfirmPassword === "") {
            errors.ConfirmPassword = "Confirm Password is required";
        } else if (data.Password !== data.ConfirmPassword) {
            errors.ConfirmPassword = "Passwords do not match";
        }

        // Occupation validation
        if (data.Occupation === "") {
            errors.Occupation = "Occupation is required";
        }

        // Language validation
        if (data.Language.length === 0) {
            errors.Language = "At least one language must be selected";
        }

        //Food validation
        if (data.Food.length === 0) {
            errors.Food = "At least one food item must be selected";
        }

        // Country validation
        if (!data.Country) {
            errors.Country = "Country is required";
        }

        // State validation
        if (!data.State) {
            errors.State = "State is required";
        }

        // City validation
        if (!data.City) {
            errors.City = "City is required";
        }

        //tnc validations
        if (!data.tnc) { // Check if tnc checkbox is checked
            errors.tnc = "Please accept terms and conditions";
        }

        return errors;
    }

    const handleCountrySelect = (selectedCountry) => {
        setFormData({ ...formData, Country: selectedCountry });
        // Clear error message when country is selected
        setErrors({
            ...errors,
            Country: ""
        });
    };

    const handleStateSelect = (selectedState) => {
        setFormData({ ...formData, State: selectedState });
        // Clear error message when state is selected
        setErrors({
            ...errors,
            State: ""
        });
    };

    const handleCitySelect = (selectedCity) => {
        setFormData({ ...formData, City: selectedCity });
        // Clear error message when city is selected
        setErrors({
            ...errors,
            City: ""
        });
    };

    return (
        <div className=' flex justify-center items-center '>
            <form onSubmit={handleSubmit}>
                <div className='form_group flex flex-col mt-2'>
                    <label htmlFor='UserName' className=' text-sm mb-2'>UserName:</label>
                    <input type='text' name='UserName' onChange={onChangeHandler} value={formData.UserName} className='border w-[280px] h-[40px] focus:outline-none rounded shadow leading-tight hover:border-gray-500'/>
                    {errors.UserName && <span className=" text-red-500 text-sm">{errors.UserName}</span>}
                </div>

                <div className='form_group flex flex-col mt-2'>
                    <label htmlFor='Email' className=' text-sm mb-2'>Email:</label>
                    <input type='text' name='Email' onChange={onChangeHandler} value={formData.Email} className='border w-[280px] h-[40px] focus:outline-none rounded shadow leading-tight hover:border-gray-500' />
                    {errors.Email && <span className=" text-red-500 text-sm">{errors.Email}</span>}
                </div>

                <div className='form_group flex flex-col mt-2'>
                    <label htmlFor='Age' className=' text-sm mb-2'>Age:</label>
                    <input type='number' name='Age' onChange={onChangeHandler} value={formData.Age} className=' border w-[280px] h-[40px] focus:outline-none rounded shadow leading-tight hover:border-gray-500'/>
                    {errors.Age && <span className=" text-red-500 text-sm">{errors.Age}</span>}
                </div>

                <div className='form_group flex flex-col mt-2'>
                    <label htmlFor='Password' className='text-sm mb-2'>Password:</label>
                    <input type='password' name='Password' onChange={onChangeHandler} value={formData.Password} className='border w-[280px] h-[40px] focus:outline-none rounded shadow leading-tight hover:border-gray-500' />
                    {errors.Password && <span className=" text-red-500 text-sm">{errors.Password}</span>}
                </div>

                <div className='form_group flex flex-col mt-2' >
                    <label htmlFor='ConfirmPassword' className='text-sm mb-2 '>Confirm Password:</label>
                    <input type='password' name='ConfirmPassword' onChange={onChangeHandler} value={formData.ConfirmPassword} className='border w-[280px] h-[40px] focus:outline-none rounded shadow leading-tight hover:border-gray-500'/>
                    {errors.ConfirmPassword && <span className=" text-red-500 text-sm">{errors.ConfirmPassword}</span>}
                </div>

                <div className="form_group flex flex-col mt-2">
                    <label htmlFor="Occupation" className="text-sm mb-2">Occupation:</label>
                    <div className="relative">
                <select name="Occupation" onChange={onChangeHandler} value={formData.Occupation} className=" appearance-none w-[280px] border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none">    

                   <option value="">- Choose option -</option>
                   <option value="Student">Student</option>
                   <option value="Employee">Employee</option>
                   <option value="Other">Other</option>
                </select>
        
                </div>
                 {errors.Occupation && <span className="text-red-500 text-sm">{errors.Occupation}</span>}
                </div>


                <div className="form_group flex flex-col mt-2">
    <label htmlFor="Language" className="text-sm mb-2">Language:</label>
    <div className="space-y-2">
        <div className="flex items-center">
            <input type="checkbox" name="Language" value="Html" onChange={onChangeHandler} checked={formData.Language.includes("Html")} className="form-checkbox h-5 w-5 text-[#4a5568] rounded border-gray-300 focus:ring-indigo-500 focus:border-indigo-500" />

            <label htmlFor="Html" className="ml-2">Html</label>
        </div>
        <div className="flex items-center">
            <input
                type="checkbox"
                name="Language"
                value="Css"
                onChange={onChangeHandler}
                checked={formData.Language.includes("Css")}
                className="form-checkbox h-5 w-5 text-[#4a5568] rounded border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
            />
            <label htmlFor="Css" className="ml-2">Css</label>
        </div>
        <div className="flex items-center">
            <input
                type="checkbox"
                name="Language"
                value="Javascript"
                onChange={onChangeHandler}
                checked={formData.Language.includes("Javascript")}
                className="form-checkbox h-5 w-5 text-[#4a5568] rounded border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
            />
            <label htmlFor="Javascript" className="ml-2">Javascript</label>
        </div>
    </div>
    {errors.Language && <span className="text-red-500 text-sm">{errors.Language}</span>}
</div>


               <div className="form_group flex flex-col mt-2">
    <label htmlFor="Food" className="text-sm mb-2">Food:</label>
    <div className="relative">
        <Multiselect SendData={handledata} className="border rounded-md focus:ring-indigo-500 focus:border-indigo-500 w-full px-3 py-2 text-sm border-gray-300" />
        {/* If Multiselect component doesn't support className prop, you can wrap it with a div and apply Tailwind CSS classes to that div */}
        {/* <div className="border rounded-md focus:ring-indigo-500 focus:border-indigo-500 w-full px-3 py-2 text-sm border-gray-300">
            <Multiselect SendData={handledata} />
        </div> */}
    </div>
    {errors.Food && <span className="text-red-500 text-sm">{errors.Food}</span>}
</div>


                <div className='form_group flex flex-col mt-2'>
                    <label htmlFor='Csc' className=' text-sm mb-2'>Csc:</label>
                    <CSC 
                        onCountrySelect={(selectedCountry) => handleCountrySelect(selectedCountry)}
                        onStateSelect={(selectedState) => handleStateSelect(selectedState)}
                        onCitySelect={(selectedCity) => handleCitySelect(selectedCity)}
                        />
                        {errors.Country && <span className="text-red-500 text-sm">{errors.Country}</span>}
                    {errors.State && <span className="text-red-500 text-sm">{errors.State}</span>}
                    {errors.City && <span className="text-red-500 text-sm">{errors.City}</span>}
                </div>
               

                <div className='form_group flex flex-col mt-2'>
                <div className="flex items-center">
    <input
      type="checkbox"
      name="tnc"
      onChange={onChangeHandler}
      checked={formData.tnc}
      className="form-checkbox h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
    />
    <span className="ml-2 text-sm">I agree to the terms and conditions</span>
  </div>
  {errors.tnc && (
    <span className="text-red-500 text-sm">{errors.tnc}</span>
  )}
</div>

<button
  type="submit"
  disabled={!formData.tnc}
  className={`border mt-3 mb-2 rounded shadow-md px-8 py-2 ${
    formData.tnc
      ? 'bg-green-500 text-white hover:bg-green-600'
      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
  }`}
>
  Submit
</button>

            </form>
        </div>
    );
}

export default React_Form;
