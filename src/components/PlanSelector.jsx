import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { updatePlan } from "../reduxstore/slices/loginData";
function PlanSelector({icon,title,description}) {
  const loginData = useSelector((state) => state.loginData.value);
  const dispatch = useDispatch();
  return (
    <div tabIndex="0" onClick={()=>{dispatch(updatePlan({planName : title}))}} className={`plan-selector rounded-lg border-violet-400 ${(title === loginData.plan) ? `border-2` : `border-0`} basis-1/2 flex flex-col p-5`}>
        <img className='icon w-[35px] mb-5 aspect-square' src={icon} alt="icon"></img>
        <h6 className='text-normal mb-2 font-semibold'>{title}</h6>
        <p className='text-[0.9rem] font-medium text-gray-600'>{description}</p>        
    </div>
  )
}

export default PlanSelector