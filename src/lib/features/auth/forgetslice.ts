import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

export const forgetUser = createAsyncThunk(
  "user/forgetUser",
  async (credentials: { email: string }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `https://rizwan.thedevapp.online/users/user/v1/send-otp`,
        credentials
      );
      if(response?.data.error){
        throw new Error(response?.data?.error?.message || "Something went wrong");
      }
      localStorage.setItem("user", JSON.stringify(response.data));
      return response.data;
    } catch (error: unknown) {
      const axiosError = error as AxiosError<{ message: string }>;
      const message = axiosError.message;
      return rejectWithValue(message);
    }
  }
);

interface User {
  id: string;
  email: string;
}

interface AuthState {
  loading: boolean;
  user: User | null;
  error: string | null;
}

interface CustomErrorPayload {
  error: {
    message: string;
  };
}

const initialState: AuthState = {
  loading: false,
  user: null,
  error: null,
};

const forgetSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(forgetUser.pending, (state) => {
        state.loading = true;
        state.user = null;
        state.error = null;
      })
      .addCase(forgetUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(forgetUser.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        const payload = action.payload as CustomErrorPayload;
        state.error = payload.error.message;
      });
  },
});

export default forgetSlice.reducer;
