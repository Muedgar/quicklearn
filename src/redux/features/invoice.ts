import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


const createInvoice = createAsyncThunk(
  'invoice/create',
  async (data: object, thunkAPI) => {
    const response = await fetch("http://localhost:3001/standard/invoice", {
        
    })
    return response
  }
)

interface InvoiceState {
  invoice: {}
  loading: 'idle' | 'pending' | 'succeeded' | 'failed'
}

const initialState = {
  invoice: {},
  loading: 'idle',
} as InvoiceState

// Then, handle actions in your reducers:
const invoiceSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder.addCase(createInvoice.fulfilled, (state, action) => {
     state = {
        invoice: action.payload,
        loading: 'succeeded'
      }
    })
  },
})
