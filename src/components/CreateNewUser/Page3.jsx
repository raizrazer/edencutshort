import React from "react";
import TitleDescriptionL from "../TitleDescriptionL";
import ButtonL from "../ButtonL";
import PlanSelector from "../PlanSelector";
import oneperson from "../../resources/oneperson.png"
import multipleperson from "../../resources/multipleperson.png"
import { useSelector } from "react-redux";
function Page3() {
  const loginData = useSelector((state) => state.loginData.value)
  
  const disableButtonFunctionality = () =>{
    if(loginData.plan !== ""){
      return false
    }
    else{
      return true
    }
  }
  return (
    <div className="Prompt1 flex flex-col items-center">
      <TitleDescriptionL
        title={"How are you planning to use Eden"}
        description={"We will streamline your setup accordingly."}
      />
      <section className="data-section">
        <div className="planning-section flex flex-wrap">
          <PlanSelector icon={oneperson} title={"For Myself"} description={"Write better. Think more clearly. Stay organized."}/>
          <PlanSelector icon={multipleperson} title={"With my team"} description={"Wikis, docs, tasks & projects, all in one place."}/>
        </div>
        <ButtonL disable={disableButtonFunctionality()} btnName={"Create Workspace"} />
      </section>
    </div>
  );
}

export default Page3;
