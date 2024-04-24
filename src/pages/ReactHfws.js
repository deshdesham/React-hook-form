import React, { useState } from 'react';
import { UndoDot } from 'lucide-react';
import { useForm } from "react-hook-form";
import { Check } from 'lucide-react';

const ReactHfws = () => {
  const [formstep, Setformstep] = useState(0);
  const [formData, setFormData] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const { register, formState: { errors, touchedFields, isValid }, handleSubmit, watch } = useForm();
  const totalstep = 3;

  const handlenext = () => {
    Setformstep(formstep + 1);
  }

  const handleprev = () => {
    Setformstep(formstep - 1);
  }

  const onSubmit = (data) => {
    if (formstep < totalstep - 1) {
      setFormData({ ...formData, ...data });
      handlenext();
    } else {
      setFormData({ ...formData, ...data });
      setFormSubmitted(true);
      console.log(data);
    }
  }

  const personalInfo = watch();
  const billingInfo = watch(['cardDetails', 'pin']);
  const shippingInfo = watch(["Address", "City", "Country"]);

  return (
    <div className='h-[100vh] bg-green-900 flex flex-col items-center justify-center'>
      <div className='space-x-2'>
        <span className='text-black font-bold text-2xl'>Welcome to</span>
        <span className='text-orange-400 font-bold text-2xl'>the Club</span>
      </div>
      <p className='text-sm text-gray-600 font-semibold'>Become a new Member in 3 step</p>

      <div className='mt-6'>
        <div className='bg-white w-[380px] rounded-md flex flex-col items-center '>
          {formSubmitted ? (
            <div className='flex flex-col p-6 justify-center items-center w-full'>
        <span className='w-10 h-10 rounded-full bg-green-600 flex justify-center items-center text-white mb-2'>{<Check/>}</span>
        <h2 className=' font-semibold text-xl mb-2'>Thank you for ordering!</h2>
        <p className='text-gray-400 text-sm mb-2'>We will be sending you an email confirmation to example@cotact.com shortly</p>
        <div className='flex justify-between items-center space-x-6'>
          <button className='px-4 py-2 bg-green-600 rounded-md text-white'>VIEW ORDER</button>
          <button className='px-4 py-2 bg-orange-300 rounded-md text-white t'>CONTINUE SHOPPING</button>
        </div>
        </div>
          ) : (
            <>
              <div className='flex  items-center w-full pl-6 space-x-2'>
                {formstep > 0 &&
                  <UndoDot className='w-8 h-8 border bg-green-400 rounded-full p-2' onClick={handleprev} />
                }
                <p className=' h-8 flex items-center'>{formstep + 1} / {totalstep}</p>
              </div>
              <form className='mt-3 flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                {formstep === 0 && (
                  <>
                    <h3 className='mt-2 text-2xl font-semibold text-gray-900'>Personal Information</h3>
                    <label className='block text-sm text-gray-600 mb-2'>Username</label>
                    <input type='text' className='focus:outline-none border mb-2 rounded px-2 py-2 hover:border-gray-950 transition duration-300 ease-in-out'
                      {...register("username", { required: true })}
                      aria-invalid={touchedFields.username && errors.username ? "true" : "false"} />
                    {touchedFields.username && errors.username && <span>This field is required</span>}
                    <label className='block text-sm text-gray-600 mb-2'>Password</label>
                    <input type='text' className='focus:outline-none border mb-2 rounded px-2 py-2 hover:border-gray-950 transition duration-300 ease-in-out'
                      {...register("password", { required: true })}
                      aria-invalid={touchedFields.password && errors.password ? "true" : "false"} />
                    {touchedFields.password && errors.password && <span>This field is required</span>}
                  </>
                )}
                {formstep === 1 && (
                  <>
                    <h3 className='mt-2 text-2xl font-semibold text-gray-900'>Billing Information</h3>
                    <label className='block text-sm text-gray-600 mb-2'>Card Details</label>
                    <input type='text' className='focus:outline-none border mb-2 rounded px-2 py-2 hover:border-gray-950 transition duration-300 ease-in-out'
                      {...register("cardDetails", { required: true })} />
                    {errors.cardDetails && <span>This field is required</span>}
                    <label className='block text-sm text-gray-600 mb-2'>PIN</label>
                    <input type='text' className='focus:outline-none border mb-2 rounded px-2 py-2 hover:border-gray-950 transition duration-300 ease-in-out'
                      {...register("pin", { required: true })} />
                    {errors.pin && <span>This field is required</span>}
                  </>
                )}
                {formstep === 2 && (
                  <>
                    <h3 className='mt-2 text-2xl font-semibold text-gray-900'>Shipping Information</h3>
                    <label className='block text-sm text-gray-600 mb-2'>Address</label>
                    <input type='text' className='focus:outline-none border mb-2 rounded px-2 py-2 hover:border-gray-950 transition duration-300 ease-in-out'
                      {...register("Address", { required: true })} />
                    {errors.Address && <span>This field is required</span>}
                    <label className='block text-sm text-gray-600 mb-2'>City</label>
                    <input type='text' className='focus:outline-none border mb-2 rounded px-2 py-2 hover:border-gray-950 transition duration-300 ease-in-out'
                      {...register("City", { required: true })} />
                    {errors.City && <span>This field is required</span>}
                    <label className='block text-sm text-gray-600 mb-2'>Country</label>
                    <input type='text' className='focus:outline-none border mb-2 rounded px-2 py-2 hover:border-gray-950 transition duration-300 ease-in-out'
                      {...register("Country", { required: true })} />
                    {errors.Country && <span>This field is required</span>}
                  </>
                )}
                <button type="submit" className={`border mb-2 rounded px-2 py-2 text-white bg-green-500 hover:bg-orange-500 transition duration-300 ease-in-out ${!isValid && "cursor-not-allowed opacity-50"}`} disabled={!isValid} >{formstep === totalstep - 1 ? "Submit" : "Next"}</button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default ReactHfws;