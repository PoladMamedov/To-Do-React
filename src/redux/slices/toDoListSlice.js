import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getToDos = createAsyncThunk("ToDoList/getToDos", async ({ email, token }) => {
  const response = await fetch("http://localhost:3001/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ email }),
  }).then((res) => res.json());
  return response;
});

export const addToDo = createAsyncThunk("ToDoList/addToDo", async ({ toDoInfo, token }) => {
  const response = await fetch("http://localhost:3001/todo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ toDoInfo }),
  }).then((res) => res.json());
  return response;
});

export const deleteToDo = createAsyncThunk("ToDoList/addToDo", async ({ _id, token }) => {
  const response = await fetch("http://localhost:3001/todo", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ _id }),
  }).then((res) => res.json());
  return response;
});

export const doneToggle = createAsyncThunk("ToDoList/doneToggle", async ({ _id, token }) => {
  const response = await fetch("http://localhost:3001/todo", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ _id }),
  }).then((res) => res.json());
  return response;
});

export const deleteAll = createAsyncThunk("ToDoList/deleteAll", async ({ email, token }) => {
  const response = await fetch("http://localhost:3001/todos", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ email }),
  }).then((res) => res.json());
  return response;
});

export const toDoListSlice = createSlice({
  name: "ToDoList",
  initialState: [],
  reducers: {
    setToDos: (state, action) => {
      return action.payload;
    },
    // addToDo: (state, action) => {
    // state.push(action.payload);
    // },
    deleteToDoFromState: (state, action) => {
      const newState = state.filter((item) => item._id !== action.payload);
      return newState;
    },
    markAsDone: (state, action) => {
      const itemToMark = state.find((item) => item._id === action.payload);
      itemToMark.done = !itemToMark.done;
    },
    removeAllToDos: () => {
      return [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getToDos.pending, () => {
      return { loading: true };
    });
    builder.addCase(getToDos.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(addToDo.fulfilled, (state, action) => {
      state.push(action.payload);
    });
  },
});

export const { setToDos, deleteToDoFromState, markAsDone, removeAllToDos } = toDoListSlice.actions;

export default toDoListSlice.reducer;
