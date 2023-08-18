import { configureStore } from "@reduxjs/toolkit";
import postSliceReducer from "./reducers/postSlice";
import numberReducer from "./reducers/numberSlice";

const store = configureStore({
    reducer:{
        post: postSliceReducer,
        number: numberReducer
    }
})

export default store