import { PayloadAction, createSlice } from "@reduxjs/toolkit";


type InitialState = {
    value: AuthState
}

type AuthState = {
    isAuth: boolean,
    email: string,
    password: string,
    confirmPassword: string
}


const initialState = {
    value: {
        isAuth: false,
        email: "",
        password: "",
        confirmPassword: ""
    } as AuthState,
} as InitialState

export const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logOut: () => {
            return initialState
        },
        signUp: (state, action: PayloadAction<AuthState>) => {
            return {
                value: {
                    isAuth: true,
                    email: action.payload.email,
                    password: action.payload.password,
                    confirmPassword: action.payload.confirmPassword
                }
            }
        }
    }
})

export const { logOut, signUp } = auth.actions
export default auth.reducer