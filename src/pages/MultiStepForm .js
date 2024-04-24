import React, { useState } from "react";
import { Check } from 'lucide-react';
import "./multipage/Stepper.css";
import Account from "./multipage/Account";
import Details from "./multipage/Details";
import Payment from "./multipage/Payment";
import Final from "./multipage/Final";



const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [complete, setComplete] = useState(false);
  const [formData, setFormData] = useState({});

  const CHECKOUT_STEPS = [
    {
      name: "Customer Info",
      Component: ({ updateFormData }) =><Account updateFormData={updateFormData}/>,
    },
    {
      name: "Shipping Info",
      Component: ({ updateFormData }) => <Details updateFormData={updateFormData}/>,
    },
    {
      name: "Payment",
      Component: () => <Payment/>,
    },
    {
      name: "Delivered",
      Component: () => <Final/>,
    },
  ];
console.log(formData);
const updateFormData = (data) => {
  setFormData(prevData => ({
    ...prevData,
    ...data
  }));
};

  const handleNext = () => {
    if (currentStep === CHECKOUT_STEPS.length - 1) {
      setComplete(true);
    } else {
      setCurrentStep(prevStep => prevStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(prevStep => prevStep - 1);
    }
  };

  return (
    
   
    <div className="w-full mx-auto max-w-screen-lg flex justify-center items-center flex-col p-4 ">
  <div className="flex justify-center items-center">
        {CHECKOUT_STEPS.map((step, index) => (
          <div
            key={index}
            className={ `step-item ${currentStep === index && "active"} ${
              index < currentStep || complete ? "complete" : ""
            }`}
          >
            <div className="step">
              {index < currentStep || complete ? <Check /> : index + 1}
            </div>
            <p className="text-gray-500 px-2 hidden md:block ">{step.name}</p>

            {/* <div className=" w-full mt-2  flex justify-center">
              <step.Component/>
            </div> */}
          </div>
         
            
            
        ))}
      </div>

      <hr className="border border-gray-300 w-full my-4 rounded-full" />

      <div className=" w-full mt-2  flex justify-center">
        {
        CHECKOUT_STEPS[currentStep].Component({ updateFormData })
         }
      </div>

      <div className={`flex justify-${currentStep === 0 ? "center" : "between"} w-full max-w-sm mt-4`}>
        {!complete && currentStep > 0 && (
          <button className="btn" onClick={handlePrevious}>
            Previous
          </button>
        )}
        {!complete && (
          <button className="btn" onClick={handleNext}>
            {currentStep === CHECKOUT_STEPS.length - 1 ? "Finish" : "Next"}
          </button>
        )}
      </div>
     
      {complete && (
        <button className="btn">
          Continue Shopping
        </button>
      )}
    </div>
  );
};

export default MultiStepForm;
