import { createSlice } from "@reduxjs/toolkit";
export const reducer = createSlice({
  name: "appReducer",
  initialState: {
    isLogged: false,
    user: null,
  },

  reducers: {
    setLogged: (state) => {
      state.isLogged = true;
    },
    setUser: (state, { payload }) => {
      state.isLogged = true;
      state.user = payload;
    },
  },
});
export const { setLogged } = reducer.actions;

export default reducer.reducer;
