import React from "react";
import TitleDescriptionL from "../TitleDescriptionL";
import ButtonL from "../ButtonL";
import { TiTick } from 'react-icons/ti'
import { useSelector } from "react-redux";

function Page4() {
  const loginData = useSelector((state) => state.loginData.value);
  const showCollectedData = () =>{
    alert("Check console for the data collected")
    console.log(JSON.parse(JSON.stringify(loginData)))
  }
  return (
    <div className="Prompt1 flex flex-col items-center">
      <div className="tick p-4 my-10 rounded-full">
        <TiTick className="text-white text-2xl"/>
      </div>
      <TitleDescriptionL
        title={`Congragulation, ${loginData.display}`}
        description={"You have completed onboarding, you can start using the Eden!"}
      />
      <section className="data-section">
        <ButtonL btnName={`Launch Eden`} handleClick={showCollectedData} />
      </section>
    </div>
  )
}

export default Page4