import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState: any = {
  number: '',
  name: '',
  dueDate: '',
  cvv: '',
  sendingPost: false,
  fetchStatus: '',
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
    SendingPostRegister: (state) => {
      state.sendingPost = true;
    },
    FetchDoneRegister: (state) => {
      state.fetchStatus = 'done';
    },
    FetchFailedRegister: (state) => {
      state.fetchStatus = 'failed';
    }
  },
})

export const { ChangeRegisterNumber, ChangeRegisterName, ChangeRegisterDueDate, ChangeRegisterCvv, SendingPostRegister, FetchDoneRegister, FetchFailedRegister } = RegisterSlice.actions
export default RegisterSlice.reducer