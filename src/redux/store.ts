import { configureStore } from '@reduxjs/toolkit'
import ticketsSlice from "./ticketSlice/ticketSlice";

export const store = configureStore({
    reducer: {
        tickets: ticketsSlice
    },
})

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch