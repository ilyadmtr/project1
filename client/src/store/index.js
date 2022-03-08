import {combineReducers, configureStore} from '@reduxjs/toolkit'
import userReducer from "./reducer/userSlice";
import deviceReducer from "./reducer/deviceSlice";

const rootReducer = combineReducers({
    userReducer,
    deviceReducer,
})
export const store = configureStore({
    reducer: rootReducer,
})