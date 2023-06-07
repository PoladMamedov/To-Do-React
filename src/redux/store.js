import { configureStore } from "@reduxjs/toolkit";
import toDoListReducer from "./slices/toDoListSlice";
import userReducer from "./slices/userAuthSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    toDoList: toDoListReducer,
  },
});
