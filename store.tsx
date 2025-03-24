import { configureStore } from '@reduxjs/toolkit'
import RegisterReducer from './screens/Register/registerSlice'
import ListReducer from './screens/List/listSlice'

export const store = configureStore({
  reducer: {
    register: RegisterReducer,
    list: ListReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch