import React, { useState ,useRef,useEffect} from 'react'
import { Check } from 'lucide-react';

const CheckoutStepper = ({stepsConfig=[]}) => {
    const [currentStep,setCurrentStep]=useState(1)
    const [isComplete,setIsComplete]=useState(false)
    const [margins, setMargins] = useState({
        marginLeft: 0,
        marginRight: 0,
      });
      const stepRef = useRef([]);
    
      useEffect(() => {
        setMargins({
          marginLeft: stepRef.current[0].offsetWidth / 2,
          marginRight: stepRef.current[stepsConfig.length - 1].offsetWidth / 2,
        });
      }, [stepRef, stepsConfig.length]);

    if(!stepsConfig.length){
        return <></>;
    }
    const handleNext=()=>{
        setCurrentStep(prevStep=>{
            if(prevStep===stepsConfig.length){
                setIsComplete(true)
                return prevStep
            }else{
                return prevStep + 1
            }
        })

    }
    const calculateProgressBarWidth=()=>{
        return ((currentStep-1/(stepsConfig.length-1)))*100
    }
    const ActiveComponent=stepsConfig[currentStep-1] ?.Component


  return (
    <>
    <div className=' items-center flex justify-between relative mb-[20px] w-[100%]'  >
        {
            stepsConfig.map((step,index)=>{
                return(
                    <div key={step.name} className='border flex flex-col items-center' ref={(el) => (stepRef.current[index] = el)}>
                      <div className={`flex flex-col justify-center items-center w-[30px] h-[30px] rounded-full bg-[#ccc] mb-[5px] z-[2] ${currentStep >index+1 || isComplete ? "bg-green-600":""} ${currentStep===index+1 ? "bg-blue-600":""} `}>
  {currentStep > index+1 || isComplete ? (
    <span className="text-white">{<Check/>}</span>
  ) : (
    index + 1
  )}
</div>


                        <div className=' text-[14px] font-medium '>{step.name}</div>
                    </div>
                )
            })
        }
        <div className=' absolute top-[25%] left-0 h-[4px] bg-[#ccc] w-[100%] ' >
            <div className=' h-[100%] bg-[#28a745] transition-all duration-200 ease-in-out'    style={{
            width: `${calculateProgressBarWidth()}`,
            marginLeft: margins.marginLeft,
            marginRight: margins.marginRight,
          }}></div>
        </div>
    </div>
    <ActiveComponent/>
    {
        !isComplete && (

            <button onClick={handleNext}>{currentStep===stepsConfig.length ?"Finish":"Next"}</button>
        )
    }
    </>
  )
}

export default CheckoutStepper;



