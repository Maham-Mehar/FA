import { configureStore } from "@reduxjs/toolkit";
import SignupReducer from "@/lib/features/auth/signupslice";
import SigninReducer from "@/lib/features/auth/signinslice";
import ForgetReducer from "@/lib/features/auth/forgetslice";
import OtpReducer from "@/lib/features/auth/otpslice";
import ResetReducer from "@/lib/features/auth/resetslice";
import YachtReducer from "@/lib/features/data/yachtslice";
import DateRangeReducer from "@/lib/features/data/dateRangeSlice";
import YachtDetailReducer from "@/lib/features/data/yachtdetailslice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      signup: SignupReducer,
      signin: SigninReducer,
      forget: ForgetReducer,
      otp: OtpReducer,
      reset: ResetReducer,
      yacht: YachtReducer,
      dateRange: DateRangeReducer,
      yachtdetail: YachtDetailReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });
};


export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];