import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_BASE_URL = "https://reqres.in/api/users?per_page=12";

export const fetchStudentsAsync = createAsyncThunk(
  "students/fetchStudents",
  async () => {
    try {
      const response = await axios.get(API_BASE_URL);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

const initialState = {
  students: [],
  loading: "idle",
  error: null,
  statusCode: "",
};

const studentSlice = createSlice({
  name: "students",
  initialState,
  reducers: {
    // addStudent: (state) => {
    //   state.students.push(payload);
    // },
  },
  extraReducers: {
    [fetchStudentsAsync.pending]: (state) => {
      state.loading = "pending";
    },
    [fetchStudentsAsync.fulfilled]: (state, { payload }) => {
      state.loading = "idle";

      if (payload) {
        const { data } = payload || {};
        state.students = data;
      }
    },
    [fetchStudentsAsync.rejected]: (state, action) => {
      state.loading = "idle";
      state.error = action.error.message;
    },
  },
});


export default studentSlice.reducer;
