import React from "react";
import TitleDescriptionL from "../TitleDescriptionL";
import InputFieldsL from "../InputFieldsL";
import ButtonL from "../ButtonL";
import InputFieldsWebsiteL from "../InputFieldsWebsiteL";
import { useSelector } from "react-redux";
function Page2() {
  const loginData = useSelector((state) => state.loginData.value)
  
  const disableButtonFunctionality = () =>{
    if(loginData.workspacename !== ""){
      return false
    }
    else{
      return true
    }
  }

  return (
    <div className="Prompt1 flex flex-col items-center">
      <TitleDescriptionL
        title={"Let's setup a home for all your work"}
        description={"You can always create another workspace later."}
      />
      <section className="data-section">
        <InputFieldsL formHelper={"Workspace Name"} placeHolderText={"Eden"} />
        <InputFieldsWebsiteL formHelper={"Workspace URL"} optional={true} placeHolderText={"Example"} />
        <ButtonL disable={disableButtonFunctionality()} btnName={"Create Workspace"} />
      </section>
    </div>
  )
}

export default Page2