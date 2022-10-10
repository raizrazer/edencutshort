import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    fullname:"",
    display:"",
    workspacename:"",
    workspaceurl:"",
    plan:"For Myself",
  },
};

export const loginDataSlice = createSlice({
  name: "loginData",
  initialState,
  reducers: {
    updateLoginData: (state, action) => {
      const { tagValue, inputValue } = action.payload;
      state.value[tagValue] = inputValue
    },
    updatePlan: (state,action) =>{
      const {planName} = action.payload;
      state.value.plan = planName
    }
  },
});

export const { updateLoginData,updatePlan } = loginDataSlice.actions;

export default loginDataSlice.reducer;
