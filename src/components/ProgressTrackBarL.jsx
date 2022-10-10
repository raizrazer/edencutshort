import React from "react";
import {update} from "../reduxstore/slices/progressTrack"
import { useDispatch, useSelector } from "react-redux";

function ProgressTrackBarL({current}) {
  const progressStyle = {
    width: "calc(100%/6)",
  }
  const progressTrack = useSelector((state) => state.progressTrack.value);

  (progressTrack === 1) ? progressStyle.width = `calc((20%))` :
  (progressTrack === 2) ? progressStyle.width = `calc((50%))` :
  (progressTrack === 3) ? progressStyle.width = `calc((80%))` :
   progressStyle.width = `calc((100%))` ;

  const dispatch = useDispatch()
  return (
    <div className="flex mx-auto w-[90%] px-10">
      <div className="progress flex justify-between py-10 md:py-16">
        <div className="progressbar shadowbar"></div>
        <div style={progressStyle} className="progressbar"></div>
        <div onClick={()=>{dispatch(update(1))}} className={`trackdigit ${(current>=1) ? 'active' : ""}`}>1</div>
        <div onClick={()=>{dispatch(update(2))}} className={`trackdigit ${(current>=2) ? 'active' : ""}`}>2</div>
        <div onClick={()=>{dispatch(update(3))}} className={`trackdigit ${(current>=3) ? 'active' : ""}`}>3</div>
        <div onClick={()=>{dispatch(update(4))}} className={`trackdigit ${(current>=4) ? 'active' : ""}`}>4</div>
      </div>
    </div>
  );
}

export default ProgressTrackBarL;
