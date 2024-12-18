import { configureStore } from "@reduxjs/toolkit";
import authSlice from "@/redux/slices/authSlice";

// Configure the store
export const store = configureStore({
    reducer: {
        auth: authSlice, // Use a meaningful key for the reducer
    },
});

export default store;

// Correctly infer the RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
