import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    value:1,
}

export const progressTrackSlice = createSlice({
    name:'progressTrack',
    initialState,
    reducers:{
        increment:(state) =>{
            if(state.value<4){
                state.value += 1;
            }
        },
        update:(state, action) =>{
            state.value=action.payload
        },
    },
})

export const {increment,update} = progressTrackSlice.actions

export default progressTrackSlice.reducer