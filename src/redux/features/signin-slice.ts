import { PayloadAction, createSlice } from "@reduxjs/toolkit";


type InitialState = {
    value: AuthState
}

type AuthState = {
    role: string,
    email: string,
    password: string
}

const initialState = {
    value: {
        role: "",
        email: "",
        password: ""
    } as AuthState
} as InitialState

export const signin = createSlice({
    name: 'signin',
    initialState,
    reducers: {
        logOut: () => {
            return initialState
        },
        signIn: (state, action: PayloadAction<AuthState>) => {
            return {
                value: {
                    role: action.payload.role,
                    email: action.payload.email,
                    password: action.payload.password
                }
            }
        }
    }
})

export const { logOut, signIn } = signin.actions
export default signin.reducer