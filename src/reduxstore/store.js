import { configureStore } from '@reduxjs/toolkit'
import progressTrackReducer from './slices/progressTrack'
import loginDataReducer from './slices/loginData'

export const store = configureStore({
  reducer: {
    progressTrack: progressTrackReducer,
    loginData: loginDataReducer,
  },
})