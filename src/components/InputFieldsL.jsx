import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateLoginData } from "../reduxstore/slices/loginData";
function InputFieldsL({ formHelper, placeHolderText }) {
  const dispatch = useDispatch();
  const tagValue = (formHelper.replace(" ","")).toLowerCase();
  const loginData = useSelector((state) => state.loginData.value);
  const checkInputFieldValue = () => {
    if (loginData[tagValue] === "") {
      return (
        <label className="text-sm ml-1 text-red-400">
          Please enter {formHelper}
        </label>
      );
    }
  };
  return (
    <form className="py-1 md:py-2" onSubmit={(e) => e.preventDefault()}>
      <div className="input flex flex-col">
        <label className="formHelper text-sm font-semibold text-gray-600 ">
          {formHelper}
        </label>
        <input
          className="py-3 px-4 w-full border-[2px] rounded-lg focus:outline-violet-400 "
          placeholder={placeHolderText}
          value={loginData[tagValue]}
          onChange={(e) => {
            const inputValue = e.target.value
            dispatch(updateLoginData( { tagValue , inputValue }));
          }}
        ></input>
        {checkInputFieldValue()}
      </div>
    </form>
  );
}

export default InputFieldsL;
