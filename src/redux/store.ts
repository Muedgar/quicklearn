import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth-slice";
import signinReducer from "./features/signin-slice";
import splashReducer from "./features/splash"
import standardNav from "./features/standard-nav";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const store = configureStore({
    reducer: {
        authReducer,
        signinReducer,
        splashReducer,
        standardNav
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;