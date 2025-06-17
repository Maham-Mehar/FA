import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DateRangeState {
  start: Date | null;
  end: Date | null;
}

const initialState: DateRangeState = {
  start: null,
  end: null,
};

const dateRangeSlice = createSlice({
  name: "dateRange",
  initialState,
  reducers: {
    setStartDate(state, action: PayloadAction<Date | null>) {
      state.start = action.payload;
    },
    setEndDate(state, action: PayloadAction<Date | null>) {
      state.end = action.payload;
    },
    setDateRange(state, action: PayloadAction<{ start: Date | null; end: Date | null }>) {
      state.start = action.payload.start;
      state.end = action.payload.end;
    },
  },
});

export const { setStartDate, setEndDate, setDateRange } = dateRangeSlice.actions;
export default dateRangeSlice.reducer;
