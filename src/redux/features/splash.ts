import { PayloadAction, createSlice } from "@reduxjs/toolkit";




type SplashState = {
    signin: boolean,
    signup: boolean,
    dashboard: boolean,
    landing: boolean
}


const initialState = {
    value: {
        signin: false,
        signup: false,
        dashboard: false,
        landing: false
    } as SplashState,
}

export const splash = createSlice({
    name: 'splash',
    initialState,
    reducers: {
        setSplashSignUp: (state, action: PayloadAction<boolean>) => {
            return {
                value: {
                    ...state.value,
                    signup: action.payload
                }
            }
        },
        setSplashSignIn: (state, action: PayloadAction<boolean>) => {
            return {
                value: {
                    ...state.value,
                    signin: action.payload
                }
            }
        },
        setSplashDashboard: (state, action: PayloadAction<boolean>) => {
            return {
                value: {
                    ...state.value,
                    dashboard: action.payload
                }
            }
        },
        setSplashLanding: (state, action: PayloadAction<boolean>) => {
            return {
                value: {
                    ...state.value,
                    landing: action.payload
                }
            }
        }  
    }
})

export const { setSplashSignUp, setSplashSignIn, setSplashDashboard, setSplashLanding } = splash.actions
export default splash.reducer