import { configureStore } from '@reduxjs/toolkit'
import addrReducer from './Slices/addrSlice'

export const store = configureStore({
  reducer: {
    addr: addrReducer,
  },
})