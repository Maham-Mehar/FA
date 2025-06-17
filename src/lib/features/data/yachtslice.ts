import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

export const yachtData = createAsyncThunk(
  "yacht/fetchYachtData",
  async (
    { page, limit }: { page: number; limit: number },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.get(
        `https://rizwan.thedevapp.online/yacht/v1/get-all-yachts?page=${page}&limit=${limit}`
      );
      return response.data.data;
    } catch (error: unknown) {
      const axiosError = error as AxiosError<{ message: string }>;
      const message =
        axiosError.response?.data?.message ||
        axiosError.message ||
        "Something went wrong";
      return rejectWithValue({ error: { message } });
    }
  }
);

export interface YachtGroup {
  id: number;
  picturesURL: string[];
  maxPersons: number;
  crewedCharterType: string;
  cabins: number;
  berthsCabin: number;
  launchedYear: number;
  location: {
    name: {
      textEN: string;
    }
  };
  name: string;
  seasonSpecificData: {
    prices: {
      price: number;
      type: string;
    }[];
  }[];
  price: number;
  type: string;
}

interface YachtState {
  loading: boolean;
  yachts: YachtGroup[];
  error: string | null;
  hasFetched: boolean;
  currentPage: number;
  totalPages: number;
}

const initialState: YachtState = {
  loading: false,
  yachts: [],
  error: null,
  hasFetched: false,
  currentPage: 1,
  totalPages: 1,
};

const yachtSlice = createSlice({
  name: "yacht",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(yachtData.pending, (state) => {
        state.loading = true;
        state.yachts = [];
        state.error = null;
      })
      .addCase(yachtData.fulfilled, (state, action) => {
        state.loading = false;
        state.yachts = action.payload.data;
        state.currentPage = Number(action.payload.currentPage);
        state.totalPages = action.payload.totalPages;
        state.hasFetched = true;
        state.error = null;
      })
      .addCase(yachtData.rejected, (state, action) => {
        state.loading = false;
        state.yachts = [];
        state.error = action.payload as string;
      });
  },
});

export default yachtSlice.reducer;
