import React from 'react';
import {increment } from '../reduxstore/slices/progressTrack';
import { useDispatch } from 'react-redux';
function ButtonL({btnName,disable,handleClick}) {
  const buttonFunction = () =>{
    if(disable === false){
      dispatch(increment())
    }
    if(handleClick){
      handleClick()
    }
  }
  
  const dispatch = useDispatch()
  return (
    <button className="submitbutton mt-5" onClick={()=>buttonFunction()}>{btnName}</button>
  )
}

export default ButtonL