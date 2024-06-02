import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import jobsReducer from './JobsSlice'

export interface RootState {
    auth: ReturnType<typeof authReducer>;
    jobs: ReturnType<typeof jobsReducer>;
}

export default configureStore({
    reducer: {
        auth: authReducer,
        jobs: jobsReducer,
    },
});


