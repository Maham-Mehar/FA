import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

export const otpUser = createAsyncThunk(
  "user/otpUser",
  async (
    {email, otp, mode}: { email: string; otp: number; mode: "signup" | "forget" },
    { rejectWithValue }
  ) => {
    try {
      const endpoint =
        mode === "signup"
          ? "/users/user/v1/varify-signup"
          : "/users/user/v1/varify-otp";
      const response = await axios.post(
        `https://rizwan.thedevapp.online/${endpoint}`,
        {email, otp}
      );
      if (response?.data.error) {
        throw new Error(
          response?.data?.error?.message || "Something went wrong"
        );
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
  otp: number;
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

const otpSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(otpUser.pending, (state) => {
        state.loading = true;
        state.user = null;
        state.error = null;
      })
      .addCase(otpUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(otpUser.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        const payload = action.payload as CustomErrorPayload;
        state.error = payload.error.message;
      });
  },
});

export default otpSlice.reducer;
