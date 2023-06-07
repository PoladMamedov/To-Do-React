import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const logInUser = createAsyncThunk("user/logInUser", async (userInfo) => {
  const response = await fetch("http://localhost:3001/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userInfo),
  }).then((res) => res.json());

  if (response.authorized) {
    localStorage.setItem("userName", JSON.stringify(response.name));
    localStorage.setItem("token", JSON.stringify(response.token));
  }

  return response;
});
export const registerUser = createAsyncThunk("user/registerUser", async (userInfo) => {
  const response = await fetch("http://localhost:3001/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userInfo),
  }).then((res) => res.json());
  return response;
});

const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    setUserNameToken: (state, action) => {
      return {
        authorized: true,
        name: action.payload.userName,
        token: action.payload.token,
      };
    },
    logOut: () => {
      return {};
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logInUser.pending, () => {
      return { loading: true };
    });
    builder.addCase(logInUser.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(registerUser.pending, () => {
      return { loading: true };
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const { setUserNameToken, logOut } = userSlice.actions;
export default userSlice.reducer;
