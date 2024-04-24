import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup";
import {Eye,EyeOff,AtSign  } from "lucide-react";




const schema = yup.object({

  username: yup.string().min(3, 'Username must be at least 3 characters').max(20, 'Username must be at most 20 characters').required('Username is required'),

  email:yup.string().email('Invalid email address').matches(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/, 'Invalid email address').required('email is required'),

  password:yup.string().min(6, 'Password must be at least 6 characters').matches(/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, "password will be combination of(Aa@123)").required("password is required"),

  Cpassword:yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required("Please confirm your password"),

  country:yup.string().required("please select country"),

  state:yup.string().required("please select state"),

  city:yup.string().required("please select city"),

  phone:yup.string().matches(/^\+?(91)?[6-9]\d{9}$/, 'Invalid phone number').required("phone number is required"),

  gender:yup.string().required("please select gender"),

  address:yup.string().required("please enter address"),

  skill:yup.array().transform((value, originalValue) => {
    return originalValue === false ? [] : value;
  }).min(1, 'At least one skill is required').of(yup.string().required('Please select a skill')).required("please choose skill")
 
});

const ReactHookForm = () => {
  const { register, handleSubmit, formState: { errors }, watch} = useForm({
    resolver: yupResolver(schema),
  });

  const [datas, setDatas] = useState([]);
  const [showPassword,setShowPassword]=useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  const togglePasswordVisibility =()=>{
    setShowPassword(!showPassword)
  }
  const toggleCPasswordVisibility =()=>{
    setShowConfirmPassword(!showConfirmPassword)
  }


  useEffect(() => {
    const fetchdata = async () => {
      try {
        const req = await fetch(
          "https://deshdesham.github.io/countries_states_cities/Countries_States_Cities.json"
        );
        const res = await req.json();
        // console.log(res.Countries_States_Cities);
        setDatas(res.Countries_States_Cities);
      } catch (error) {
        console.log("could not fetchdata", error.message);
      }
    };
    fetchdata();
  }, []);
  // console.log(datas);

  const onsubmit = (data) => {
    console.log(data);
  };
  return (
    
    <div className="container flex justify-center items-center flex-col">
      <h1 className="text-2xl mb-2">Registration Form</h1>
      <form className="form-container grid grid-cols-2 gap-4" onSubmit={handleSubmit(onsubmit)}>

        {/* usename */}

        <div className="form-group">
          <label className="block">Username <span className="text-red-500">*</span></label>
          <input className="w-[240px] leading-tight h-[40px] focus:outline-none border rounded shadow-sm hover:border-gray-500 p-2" type="text" {...register("username")}/>
         

          {/* error username */}

        <div>

          <span className="text-red-500 text-sm">{errors.username?.message} </span>
        </div>
        </div>

        {/* Email */}
        
        <div className="form-group">
          <label className="block">Email <span className="text-red-500">*</span></label>
          <div className=" relative w-[240px]">
          <input className="w-[240px] leading-tight h-[40px] focus:outline-none border rounded shadow-sm hover:border-gray-500 p-2" type="text" {...register("email")}/>
          <span className=" absolute right-0 inset-y-2 mr-2 text-gray-500">{<AtSign/>}</span>
          </div>

         

          {/* error Email */}

          <div>

          <span className="text-red-500 text-sm">{errors.email?.message} </span>
        
          </div>
          </div>

   

        {/* Password */}

        <div className="form-group">
          <label className="block">Password <span className="text-red-500">*</span></label>
          <div className=" relative w-[240px]">
          <input className="w-[240px] leading-tight h-[40px] focus:outline-none border rounded shadow-sm hover:border-gray-500 p-2" type={showPassword ? "text" :"password"} {...register("password")}/>
          <span className="text-gray-500 absolute inset-y-2 right-0 flex items-center px-2.5 cursor-pointer" onClick={togglePasswordVisibility} > {showPassword ? <Eye/> : <EyeOff />}</span>
          </div>
       

          {/* error Password */}

          <div>

          <span className="text-red-500 text-sm">{errors.password?.message} </span>

          </div>
          </div>

       

         {/* conform Password */}

           <div className="form-group">
          <label className="block">Conform Password <span className="text-red-500">*</span></label>
          <div className=" relative w-[240px]">
          <input className="w-[240px] leading-tight h-[40px] focus:outline-none border rounded shadow-sm hover:border-gray-500 p-2" type={showConfirmPassword ? "text" :"password"} {...register("Cpassword")}/>
          <span className="text-gray-500 absolute inset-y-2 right-0 flex items-center px-2.5 cursor-pointer" onClick={toggleCPasswordVisibility} > {showConfirmPassword ? <Eye/> : <EyeOff />}</span>
          </div>
         

          {/* error confirm password */}

          <div>

          <span className="text-red-500 text-sm">{errors.Cpassword?.message} </span>
          
          </div>
          </div>

          {/* country */}

       <div className="form-group">
         <label className="block">Country <span className="text-red-500">*</span></label>
         <select
           className="appearance-none w-[240px] leading-tight h-[40px] border rounded shadow-sm hover:border-gray-500 p-2 text-gray-500"
           {...register("country")}
        >
            <option value="" className="flex justify-center items-center">
              Select Country
            </option>
           {datas.map((country) => (
             <option key={country.name} value={country.name} className="p-2">
               {country.name}
             </option>
           ))}
         </select>
         
       

       {/* error Country */}

       <div>
       <span className="text-red-500 text-sm">{errors.country?.message} </span>
       
       </div>
       </div>

       {/* state */}

       <div className="form-group">
           <label className="block">State <span className="text-red-500">*</span></label>
           <select
             className="appearance-none w-[240px] leading-tight h-[40px] border rounded shadow-sm hover:border-gray-500 p-2 text-gray-500"
             {...register("state")}
           >
             <option value="" className="">
               Select State
             </option>
             {watch("country") &&
               datas
                 .find((country) => country.name === watch("country"))
                 .states.map((state) => (
                   <option key={state.name} value={state.name} className="p-2">
                     {state.name}
                   </option>
                 ))}
           </select>

           {/* error State */}

           <div>
           <span className="text-red-500 text-sm">{errors.state?.message} </span>

          </div>
          </div>

          {/* city */}

           <div className="form-group">
           <label className="block">City <span className="text-red-500">*</span></label>
           <select
             className="appearance-none w-[240px] leading-tight h-[40px] border rounded shadow-sm hover:border-gray-500 p-2 text-gray-500"
             {...register("city")}
           >
             <option value="">Select city</option>
             {watch("country") &&
               watch("state") &&
               datas
                 .find((country) => country.name === watch("country"))
                 .states.find((state) => state.name === watch("state"))
                 .cities.map((city) => (
                   <option key={city.name} value={city.name} className="p-2">
                     {city.name}
                   </option>
                 ))}
           </select>

           {/* error City */}

           <div>
           <span className="text-red-500 text-sm">{errors.city?.message} </span>

        </div>
         </div>

         {/* phone */}

          <div className="form-group">
           <label className="block">Phone <span className="text-red-500">*</span></label>
           <input
             className="w-[240px] leading-tight h-[40px] focus:outline-none border rounded shadow-sm hover:border-gray-500 p-2"
             type="number"
             {...register("phone")}
           />

           {/* error phone */}

           <div>

           <span className="text-red-500 text-sm">{errors.phone?.message} </span>
           
         </div>
         </div>

         {/* gender */}

          <div className="form-group">
           <label className="block">Gender <span className="text-red-500">*</span></label>
           <select
             className="appearance-none w-[240px] leading-tight h-[40px] border rounded shadow-sm hover:border-gray-500 p-2 text-gray-500"
             {...register("gender")}
           >
             <option value="" className="">Select Gender</option>
             <option value="Male">Male</option>
             <option value="Female">Female</option>
             <option value="Other">Other</option>
           </select>

           {/* error gender */}

           <div>

           <span className="text-red-500 text-sm">{errors.gender?.message} </span>
           
         </div>
         </div>

         {/* address */}

         <div className="form-group">
          <label className="block">Address <span className="text-red-500">*</span></label>
           <textarea className="input h-[40px] w-[240px] hover:border-gray-500 resize border rounded shadow-sm p-2 resize-y" {...register("address")} />

           {/* error address */}
           
           <div>

           <span className="text-red-500 text-sm">{errors.address?.message} </span>

          </div>
          </div>

          {/* skill */}

           < div className="form-group ">
           <label className="block">Skill <span className="text-red-500">*</span></label>
         <div className="w-[240px] h-[40px] border flex justify-center items-center space-x-2 rounded shadow-sm hover:border-gray-500 ">

            <input type="checkbox" id="html" value="Html" {...register("skill")} className=" appearance-none h-[16px] w-[16px] bg-white  rounded border-green-700 border-2 checked:bg-black" />
           <label htmlFor="html">Html</label>

           <input type="checkbox" id="css" value="Css" {...register("skill",{ required: true })} className="appearance-none h-[16px] w-[16px] bg-white  rounded border-green-700 border-2 checked:bg-black" />
           <label htmlFor="html">Css</label>

           <input type="checkbox" id="javascript" value="Javascript" {...register("skill")} className="appearance-none h-[16px] w-[16px] bg-white  rounded border-green-700 border-2 checked:bg-black " />
               <label htmlFor="javascript">JavaScript</label>
        
           
         
         </div>
         
         <span className="text-red-500 text-sm">{errors.skill?.message} </span>
         </div>

         



        
        
          <button type="submit" className="px-8 py-2 border-none bg-green-300 rounded shadow-sm hover:border-green-700 hover:bg-green-100 hover:border text-green-700 mt-2">Register</button>
          
      </form>
     


    </div>
    
  );
};

export default ReactHookForm;
