import { PayloadAction, createSlice } from "@reduxjs/toolkit";




type SplashState = {
    signin: boolean,
    signup: boolean,
    dashboard: boolean,
    landing: boolean,
    company: boolean,
    standard: boolean,
    custom: boolean,
}


const initialState = {
    value: {
        signin: false,
        signup: false,
        dashboard: false,
        company: false,
        standard: false,
        custom: false,
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
        },
        setSplashCompany: (state, action: PayloadAction<boolean>) => {
            return {
                value: {
                    ...state.value,
                    company: action.payload
                }
            }
        } ,
        setSplashStandard: (state, action: PayloadAction<boolean>) => {
            return {
                value: {
                    ...state.value,
                    standard: action.payload
                }
            }
        } ,
        setSplashCustom: (state, action: PayloadAction<boolean>) => {
            return {
                value: {
                    ...state.value,
                    custom: action.payload
                }
            }
        }  
    }
})

export const { setSplashSignUp, setSplashSignIn, setSplashDashboard, setSplashLanding, setSplashCompany, setSplashStandard, setSplashCustom } = splash.actions
export default splash.reducer