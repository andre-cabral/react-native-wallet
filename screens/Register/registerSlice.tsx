import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { Card } from '../../types'

const initialState: Card = {
  number: '',
  name: '',
  dueDate: '',
  cvv: ''
}

export const RegisterSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    ChangeRegisterNumber: (state, action: PayloadAction<string>) => {
      state.number = action.payload;
    },
    ChangeRegisterName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    ChangeRegisterDueDate: (state, action: PayloadAction<string>) => {
      state.dueDate = action.payload;
    },
    ChangeRegisterCvv: (state, action: PayloadAction<string>) => {
      state.cvv = action.payload;
    },
  },
})

export const { ChangeRegisterNumber, ChangeRegisterName, ChangeRegisterDueDate, ChangeRegisterCvv } = RegisterSlice.actions
export default RegisterSlice.reducer