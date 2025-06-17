import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

export const yachtDetailData = createAsyncThunk(
  "yacht/fetchYachtData",
  async ({ id }: { id: number }, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://rizwan.thedevapp.online/yacht/v1/get-yacht-detail?id=${id}`
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

export interface YachtDetailGroup {
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
    };
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
  standardYachtEquipment:{
    equipment:{
      name:{
        textEN: string;
      };
    }
    
  }[];
}

interface YachtState {
  loading: boolean;
  yachtsdetail: YachtDetailGroup | null;
  error: string | null;
  hasFetched: boolean;
  fetchedIds: number[];
}

const initialState: YachtState = {
  loading: false,
  yachtsdetail: null,
  error: null,
  hasFetched: false,
  fetchedIds: [],
};

const yachtDetailSlice = createSlice({
  name: "yacht",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(yachtDetailData.pending, (state) => {
        state.loading = true;
        state.yachtsdetail = null;
        state.error = null;
      })
      .addCase(yachtDetailData.fulfilled, (state, action) => {
        state.loading = false;
        state.yachtsdetail = action.payload;
        state.hasFetched = true;
        const id = action.payload.id || null;
        if (id && !state.fetchedIds.includes(id)) {
          state.fetchedIds.push(id);
        }
        state.error = null;
      })
      .addCase(yachtDetailData.rejected, (state, action) => {
        state.loading = false;
        state.yachtsdetail = null;
        state.error = action.payload as string;
      });
  },
});

export default yachtDetailSlice.reducer;
