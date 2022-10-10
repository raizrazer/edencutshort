import React from "react";
import TitleDescriptionL from "../TitleDescriptionL";
import InputFieldsL from "../InputFieldsL";
import ButtonL from "../ButtonL";
import { useSelector } from "react-redux";

function Page1() {
  const loginData = useSelector((state) => state.loginData.value)
  
  const disableButtonFunctionality = () =>{
    if(loginData.fullname !== "" && loginData.display !== ""){
      console.log(`Now filled`);
      return false
    }
    else{
      console.log(`Please fill`);
      return true
    }
  }
  return (
    <div className="Prompt1 flex flex-col items-center">
      <TitleDescriptionL
        title={"Welcome! First things first..."}
        description={"You can always change them later."}
      />
      <section className="data-section">
        <InputFieldsL formHelper={"Full Name"} placeHolderText={"Steve Jobs"} />
        <InputFieldsL formHelper={"Display"} placeHolderText={"Steve"} />
        <ButtonL disable={disableButtonFunctionality()} btnName={"Create Workspace"} />
      </section>
    </div>
  );
}

export default Page1;
