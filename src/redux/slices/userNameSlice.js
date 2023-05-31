import { createSlice } from "@reduxjs/toolkit";

export const nameSlice = createSlice({
  name: "name",
  initialState: "",
  reducers: {
    setName: (state, action) => {
      localStorage.setItem("name", action.payload);
      return action.payload;
    },
  },
});

export const { setName } = nameSlice.actions;

export default nameSlice.reducer;
