import {combineReducers} from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice"
import taskReducer from "../slices/taskSlice"
const rootReducer  = combineReducers({
    auth:authReducer,
    task:taskReducer
})

export default rootReducer