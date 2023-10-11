import { configureStore } from "@reduxjs/toolkit";
import studentslice from "../features/slice/studentslice";

export const store = configureStore({
  reducer: {
    studentslice: studentslice,
    singleStudent: studentslice,
  },
});
