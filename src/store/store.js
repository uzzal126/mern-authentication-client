import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../service/authSlice";

const store = configureStore({
    reducer: {
        auth: authReducer,
    },
});

export default store;
