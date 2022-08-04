import {createSlice} from "@reduxjs/toolkit";

const data = require('./../tickets.json');

const initialState = {
    tickets: data.tickets,
    stopsValues: [],
    filteredTickets: data.tickets,
}

const ticketsSlice = createSlice({
    name: 'tickets',
    initialState,
    reducers: {
        setStopValue: (state, action) => {
            if (state.stopsValues.includes(action.payload)) {
                const index = state.stopsValues.indexOf(action.payload);
                state.stopsValues.splice(index, 1);
            } else {
                state.stopsValues = [...state.stopsValues, action.payload];
            }
        },
        clearFilter: (state) => {
            state.stopsValues = [];
        },
        filterTickets: (state) => {
            if (state.stopsValues.length !== 0) {
                state.filteredTickets = state.tickets.filter(ticket => state.stopsValues.includes(ticket.stops));
            } else {
                state.filteredTickets = data.tickets
            }
        }
    }
});

export const { setStopValue, clearFilter, filterTickets } = ticketsSlice.actions;
export default ticketsSlice.reducer;