import { configureStore } from "@reduxjs/toolkit";
import toDoListReducer from "./slices/toDoListSlice";
import nameReducer from "./slices/userNameSlice";

export const store = configureStore({
  reducer: {
    name: nameReducer,
    toDoList: toDoListReducer,
  },
});
