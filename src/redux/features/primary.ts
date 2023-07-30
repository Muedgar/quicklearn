import { PayloadAction, createSlice } from "@reduxjs/toolkit";




type CompanyUserState = {
    email: string,
    password: string,
    firstname: string,
    lastname: string,
    role: string,
    permissions: string[],
    phone: string,
}


const initialState = {
    value: {
        email: "",
        password: "",
        firstname: "",
        lastname: "",
        role: "",
        permissions: [],
        phone: "",
    } as CompanyUserState,
}

export const primary = createSlice({
    name: 'primary',
    initialState,
    reducers: {
        addCompanyUser: (state, action: PayloadAction<boolean>) => {
            return {
                value: {
                    ...state.value,
                    signup: action.payload
                }
            }
        },
        getCompanyUsers: (state, action: PayloadAction<boolean>) => {
            return {
                value: {
                    ...state.value,
                    signin: action.payload
                }
            }
        },
        getCompanyUser: (state, action: PayloadAction<boolean>) => {
            return {
                value: {
                    ...state.value,
                    dashboard: action.payload
                }
            }
        },
        editCompanyUser: (state, action: PayloadAction<boolean>) => {
            return {
                value: {
                    ...state.value,
                    landing: action.payload
                }
            }
        },
        deleteCompanyUser: (state, action: PayloadAction<boolean>) => {
            return {
                value: {
                    ...state.value,
                    company: action.payload
                }
            }
        }
    }
})

export const { addCompanyUser, getCompanyUsers, getCompanyUser, editCompanyUser, deleteCompanyUser } = primary.actions
export default primary.reducer