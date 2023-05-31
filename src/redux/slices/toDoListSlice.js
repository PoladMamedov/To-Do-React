import { createSlice } from "@reduxjs/toolkit";

function updateLocalStorage(state) {
  localStorage.setItem("todos", JSON.stringify(state));
}

export const toDoListSlice = createSlice({
  name: "ToDoList",
  initialState: [],
  reducers: {
    setToDos: (state, action) => {
      return action.payload;
    },
    addToDo: (state, action) => {
      state.push(action.payload);
      updateLocalStorage(state);
    },
    deleteToDo: (state, action) => {
      const newState = state.filter((item) => item.id !== action.payload);
      updateLocalStorage(newState);
      return newState;
    },
    markAsDone: (state, action) => {
      const itemToMark = state.find((item) => item.id === action.payload);
      itemToMark.done = !itemToMark.done;
      updateLocalStorage(state);
    },
    removeAllToDos: () => {
      updateLocalStorage([]);
      return [];
    },
  },
});

export const { setToDos, addToDo, deleteToDo, markAsDone, removeAllToDos } = toDoListSlice.actions;

export default toDoListSlice.reducer;
