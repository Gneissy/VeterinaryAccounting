// Dependencies
import { createSlice } from "@reduxjs/toolkit";

// Bringing in actions
//

// Creating service slice
const serviceSlice = createSlice({
    name: "service",
    initialState: {
        operations: [],
        totalPrice: 0
    },
    reducers: {
        addOperation(state, action){
            state.operations.push(action.payload); // sending whole payload object into the operations array
            state.totalPrice += action.payload.price;
        },
        deleteOperation(state, action){
            const { index, price } = action.payload;

            state.operations.splice(index, 1); // Delete item from services
            state.totalPrice -= price; // Update total price
        }
    }
});


// Exporting reducers
export const { addOperation, incrementOperationCount, decrementOperationCount, deleteOperation } = serviceSlice.actions;
export const serviceReducer = serviceSlice.reducer;