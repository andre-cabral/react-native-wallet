import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState: any = {
  cardList: [],
  listFetched: false,
}

export const ListSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    SetCardList: (state, action: PayloadAction<Array<any>>) => {
      state.cardList = action.payload;
      state.listFetched = true;
    },
    ResetListState: (state) => {
      state.cardList = [];
      state.listFetched = false;
    }
  },
})

export const { SetCardList, ResetListState } = ListSlice.actions
export default ListSlice.reducer