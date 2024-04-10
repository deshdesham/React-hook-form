import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";


const ReactHookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    watch,
  } = useForm();

  const [datas, setDatas] = useState([]);
  



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
          <input className="w-[240px] leading-tight h-[40px] focus:outline-none border rounded shadow-sm hover:border-gray-500" type="text" {...register("username", {required: true,maxLength: 20,minLength: 3,
           })}/>
         

          {/* error username */}

        <div>

          {errors.username?.type === "required" && (<span className="text-red-500">Username is required</span>)}
          {errors.username?.type === "minLength" && (<span className="text-red-500">Username must be at least 3 characters</span>)}
          {errors.username?.type === "maxLength" && (<span className="text-red-500">Username must be less than 20 characters</span>)}

        </div>
        </div>

        {/* Email */}
        
        <div className="form-group">
          <label className="block">Email <span className="text-red-500">*</span></label>
          <input className="w-[240px] leading-tight h-[40px] focus:outline-none border rounded shadow-sm hover:border-gray-500" type="text" {...register("email", {required: true,pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/})}/>

         

          {/* error Email */}

          <div>

          {errors.email?.type === "required" && (<span className="text-red-500">email is required</span>)}
          {errors.email?.type === "pattern" && (<span className="text-red-500">email is invalid</span>)}
        
          </div>
          </div>

   

        {/* Password */}

        <div className="form-group">
          <label className="block">Password <span className="text-red-500">*</span></label>
          <input className="w-[240px] leading-tight h-[40px] focus:outline-none border rounded shadow-sm hover:border-gray-500" type="password" {...register("password", {required: true,pattern:
                /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,})}/>
       

          {/* error Password */}

          <div>

          {errors.password?.type === "required" && (<span className="text-red-500">password is required</span>)}
          {errors.password?.type === "pattern" && (<span className="text-red-500">password should be 8 charcter with special</span>)}

          </div>
          </div>

       

         {/* conform Password */}

           <div className="form-group">
          <label className="block">Conform Password <span className="text-red-500">*</span></label>
          <input className="w-[240px] leading-tight h-[40px] focus:outline-none border rounded shadow-sm hover:border-gray-500" type="password" {...register("Cpassword", {required: true,validate: (val) => {
            const { password } = getValues();
            return password === val;},
             })}/>
         

          {/* error confirm password */}

          <div>

          {errors.Cpassword?.type === "required" && (<span className="text-red-500">conform password is required</span>)}
          {errors.Cpassword?.type === "validate" && (<span className="text-red-500">Passwords should match!</span>)}
          
          </div>
          </div>

          {/* country */}

       <div className="form-group">
         <label className="block">Country <span className="text-red-500">*</span></label>
         <select
           className="appearance-none w-[240px] leading-tight h-[40px] border rounded shadow-sm hover:border-gray-500"
           {...register("country", { required: true })}
        >
            <option value="" className="flex justify-center items-center">
              Select Country
            </option>
           {datas.map((country) => (
             <option key={country.name} value={country.name}>
               {country.name}
             </option>
           ))}
         </select>
         
       

       {/* error Country */}

       <div>
       {errors.country?.type === "required" && (<span className="text-red-500">please select country</span>)}
       </div>
       </div>

       {/* state */}

       <div className="form-group">
           <label className="block">State <span className="text-red-500">*</span></label>
           <select
             className="appearance-none w-[240px] leading-tight h-[40px] border rounded shadow-sm hover:border-gray-500"
             {...register("state", { required: true })}
           >
             <option value="" className="">
               Select State
             </option>
             {watch("country") &&
               datas
                 .find((country) => country.name === watch("country"))
                 .states.map((state) => (
                   <option key={state.name} value={state.name}>
                     {state.name}
                   </option>
                 ))}
           </select>

           {/* error State */}

           <div>
    
           {errors.state?.type === "required" && (<span className="text-red-500">please select state</span>)}

          </div>
          </div>

          {/* city */}

           <div className="form-group">
           <label className="block">City <span className="text-red-500">*</span></label>
           <select
             className="appearance-none w-[240px] leading-tight h-[40px] border rounded shadow-sm hover:border-gray-500"
             {...register("city", { required: true })}
           >
             <option value="">Select city</option>
             {watch("country") &&
               watch("state") &&
               datas
                 .find((country) => country.name === watch("country"))
                 .states.find((state) => state.name === watch("state"))
                 .cities.map((city) => (
                   <option key={city.name} value={city.name}>
                     {city.name}
                   </option>
                 ))}
           </select>

           {/* error City */}

           <div>
    
         {errors.city?.type === "required" && (<span className="text-red-500">please select city</span>)}

        </div>
         </div>

         {/* phone */}

          <div className="form-group">
           <label className="block">Phone <span className="text-red-500">*</span></label>
           <input
             className="w-[240px] leading-tight h-[40px] focus:outline-none border rounded shadow-sm hover:border-gray-500"
             type="number"
             {...register("phone", {
               required: true,
               minLength: 10,
               maxLength: 12,
             })}
           />

           {/* error phone */}

           <div>

           {errors.phone?.type === "required" && (<span className="text-red-500">please enter phone no.</span>)}
           {errors.phone?.type === "maxLength" && (<span className="text-red-500">invalid no</span>)}
           {errors.phone?.type === "minLength" && (<span className="text-red-500">invalid no</span>)}
           
         </div>
         </div>

         {/* gender */}

          <div className="form-group">
           <label className="block">Gender <span className="text-red-500">*</span></label>
           <select
             className="appearance-none w-[240px] leading-tight h-[40px] border rounded shadow-sm hover:border-gray-500"
             {...register("gender", { required: true })}
           >
             <option value="">Select Gender</option>
             <option value="Male">Male</option>
             <option value="Female">Female</option>
             <option value="Other">Other</option>
           </select>

           {/* error gender */}

           <div>

           {errors.gender?.type === "required" && (<span className="text-red-500">please select gender</span>)}
           
         </div>
         </div>

         {/* address */}

         <div className="form-group">
          <label className="block">Address <span className="text-red-500">*</span></label>
           <textarea className="input h-[40px] w-[240px] hover:border-gray-500 resize border rounded shadow-sm" {...register("address",{ required: true })} />

           {/* error address */}
           
           <div>

           {errors.address?.type === "required" && (<span className="text-red-500">please enter address</span>)}

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
         {errors.skill?.type === "required" && ( <span className="text-red-500">Please select at least one skill</span>)}
         </div>

         



        
        
          <button type="submit" className="px-8 py-2 border-none bg-green-300 rounded shadow-sm hover:border-green-700 hover:bg-green-100 hover:border text-green-700 mt-2">Register</button>
          
      </form>
     


    </div>
    
  );
};

export default ReactHookForm;
