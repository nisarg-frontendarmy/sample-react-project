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

export const fetchSingleStudentAsync = createAsyncThunk(
  "students/fetchSingleStudent",
  async (studentId) => {
    const response = await axios.get(
      `https://reqres.in/api/users/${studentId}`
    );
    return response.data;
  }
);

const initialState = {
  students: [],
  singleStudent: null,
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
    [fetchSingleStudentAsync.pending]: (state) => {
      state.loading = "pending";
    },
    [fetchSingleStudentAsync.fulfilled]: (state, { payload }) => {
      state.loading = "idle";

      if (payload) {
        state.singleStudent = payload.data;
      }
    },
    [fetchSingleStudentAsync.rejected]: (state, action) => {
      state.loading = "pending";
      state.error = action.error.message;
    },
  },
});

// export const selectSingleStudent = (state) => state.students.singleStudent;

export default studentSlice.reducer;
