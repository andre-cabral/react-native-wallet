import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface ListState {
  cardList: Array<any>;
  listFetched: boolean;
  selectedCardIndex: string;
}

const initialState: ListState = {
  cardList: [],
  listFetched: false,
  selectedCardIndex: 'none',
}

export const ListSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    SetCardList: (state, action: PayloadAction<Array<any>>) => {
      state.cardList = action.payload;
      state.listFetched = true;
    },
    SetSelectedCardIndex: (state, action: PayloadAction<string>) => {
      state.selectedCardIndex = action.payload;
    },
    ResetListState: (state) => {
      state.cardList = [];
      state.listFetched = false;
      state.selectedCardIndex = 'none';
    }
  },
})

export const { SetCardList, ResetListState, SetSelectedCardIndex } = ListSlice.actions
export default ListSlice.reducer