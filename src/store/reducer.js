import { createSlice } from "@reduxjs/toolkit";
export const reducer = createSlice({
  name: "appReducer",
  initialState: {
    isLogged: false,
    user: {},
  },

  reducers: {
    setLogged: (state) => {
      state.isLogged = true;
    },
    setUser(state, action) {
      state.user = action.payload;
    },
  },
});
export const { setLogged, setUser } = reducer.actions;

export default reducer.reducer;
