import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const MAIN_URL = "https://to-do-list-backend-liard.vercel.app/";

export const logInUser = createAsyncThunk("user/logInUser", async (userInfo) => {
  const response = await fetch(`${MAIN_URL}login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userInfo),
  }).then((res) => res.json());

  if (response.authorized) {
    localStorage.setItem("userInfo", JSON.stringify(response));
  }

  return response;
});
export const registerUser = createAsyncThunk("user/registerUser", async (userInfo) => {
  const response = await fetch(`${MAIN_URL}register`, {
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
        name: action.payload.name,
        email: action.payload.email,
        token: action.payload.token,
      };
    },
    logOut: () => {
      localStorage.removeItem("userInfo");
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
