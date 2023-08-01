import {configureStore} from '@reduxjs/toolkit'
import notesReducer from './Views/Editor/store/notesSlice';

export const reduxStore = configureStore({
    reducer: {
        notes: notesReducer,
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof reduxStore.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof reduxStore.dispatch