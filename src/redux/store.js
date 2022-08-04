import { configureStore } from '@reduxjs/toolkit'
import ticketsSlice from "./ticketSlice/ticketSlice";

export const store = configureStore({
    reducer: {
        tickets: ticketsSlice
    },
})