import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateLoginData } from "../reduxstore/slices/loginData";
function InputFieldsWebsiteL({ formHelper, optional, placeHolderText }) {
  const dispatch = useDispatch();
  const tagValue = (formHelper.replace(" ","")).toLowerCase();
  const loginData = useSelector((state) => state.loginData.value);
  return (
    <form className="py-1 md:py-2" onSubmit={(e) => e.preventDefault()}>
      <div className="input flex flex-col">
        <div>
          <label className="formHelper text-sm font-semibold text-gray-600 ">
            {formHelper}
          </label>
          {optional ? <label className="optional">(optional)</label> : null}
        </div>
        <div className="websitepart flex items-center">
          <label htmlFor="website" className="website flex h-full"><p>www.eden.com/</p></label>
          <input
            id="website"
            name="website"
            className="py-3 px-4 w-full rounded-l-none rounded-lg focus:outline-violet-400 "
            placeholder={placeHolderText}
            value={loginData[tagValue]}
            onChange={(e) => {
              const inputValue = e.target.value
              dispatch(updateLoginData({ tagValue , inputValue }));
            }}
          >
          </input>
        </div>
      </div>
    </form>
  );
}

export default InputFieldsWebsiteL;
