import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: { values: { name: "Gaurav", age: 0, email: "" } },
  reducers: {
    login: (state, action) => {
      state.values = action.payload;
    },

    logout: (state, action) => {
      state.values = action.payload;
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
