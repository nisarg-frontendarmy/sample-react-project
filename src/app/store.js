import { combineReducers, configureStore } from "@reduxjs/toolkit";
import studentslice, { updateStudent } from "../features/slice/studentslice";

export const store = configureStore({
  reducer: combineReducers( {
    studentslice: studentslice,
    singleStudent: studentslice,
  }),
});
