// importing dependencies
import { configureStore } from "@reduxjs/toolkit";

// Bringing in reducers
import { serviceReducer, addOperation, incrementOperationCount, decrementOperationCount, deleteOperation } from "./slices/serviceSlice";

// Bringing in actions
//

// Creating store
const store = configureStore({
    reducer: {
        service: serviceReducer,
    }
});

// Exporting both store and reducers
export {
    store,
    addOperation,
    incrementOperationCount,
    decrementOperationCount,
    deleteOperation,
};