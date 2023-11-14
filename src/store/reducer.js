import { createSlice } from "@reduxjs/toolkit";
export const reducer = createSlice({
  name: "appReducer",
  initialState: {
    isLogged: false,
  },
  
  reducers: {
    setLogged: (state) => {
      state.isLogged = true;
    },
  },
});
export const {
  setLogged,
} = reducer.actions;

export default reducer.reducer ;