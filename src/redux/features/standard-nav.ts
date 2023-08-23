import { PayloadAction, createSlice } from "@reduxjs/toolkit";




type StandardNavItemState = {
    currentNavItem: string
}


const initialState = {
    value: {
        currentNavItem: "Invoicing"
    } as StandardNavItemState,
}

export const standardnavitem = createSlice({
    name: 'standardnavitem',
    initialState,
    reducers: {
        setStandardNavItem: (state, action: PayloadAction<string>) => {
            return {
                value: {
                    ...state.value,
                    currentNavItem: action.payload
                }
            }
        }, 
    }
})

export const { setStandardNavItem } = standardnavitem.actions
export default standardnavitem.reducer